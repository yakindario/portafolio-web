"use client"
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { Info, Lightbulb, Copy, Check, BookOpen } from 'lucide-react'
import { useState } from 'react'

interface MDXComponents {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ComponentType<any>
}

// Code block with copy functionality
function CodeBlock({ children, className, filename, ...props }: React.HTMLAttributes<HTMLPreElement> & { filename?: string }) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = () => {
    const code = children?.toString() || ''
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative rounded-lg overflow-hidden border border-border bg-[#0d1112] my-6 shadow-xl">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#1a2325] border-b border-border">
          <span className="text-xs font-mono text-muted-foreground">{filename}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre {...props} className={`font-mono text-sm leading-relaxed ${className || ''}`}>
          {children}
        </pre>
      </div>
    </div>
  )
}

// Info callout box
function InfoBox({ children, title = "Nota", type = "info" }: { children: React.ReactNode; title?: string; type?: "info" | "tip" }) {
  const Icon = type === "tip" ? Lightbulb : Info
  const colorClasses = type === "tip" 
    ? "bg-amber-900/10 border-l-amber-500 text-amber-500"
    : "bg-primary/10 border-l-primary text-primary"
  
  return (
    <div className={`p-4 rounded-lg border-l-4 ${colorClasses} my-6`}>
      <div className="flex gap-3">
        <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-bold text-foreground text-sm mb-1">{title}</p>
          <div className="text-muted-foreground text-sm leading-relaxed prose-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}

// Enhanced figure with caption
function Figure({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <figure className="my-8 rounded-xl overflow-hidden border border-border bg-secondary/40">
      {children}
      {caption && (
        <figcaption className="p-3 text-center text-sm text-muted-foreground bg-secondary/20 border-t border-border">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// Bibliography box component
function BibliographyBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-lg border-l-4 bg-purple-950/10 border-l-purple-500 my-8">
      <div className="flex gap-3">
        <BookOpen className="h-5 w-5 mt-0.5 flex-shrink-0 text-purple-500" />
        <div className="flex-1">
          <h2 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
            📚 Bibliografía
          </h2>
          <div className="space-y-4">{children}</div>
        </div>
      </div>
    </div>
  )
}

// Individual bibliography entry
function BibEntry({ children }: { children: React.ReactNode }) {
  return (
    <div className="pl-4 border-l-2 border-border hover:border-purple-500 transition-colors py-2">
      <div className="text-sm text-muted-foreground leading-relaxed space-y-1">{children}</div>
    </div>
  )
}

const components: MDXComponents = {
  a: (props) => <a {...props} className="text-primary underline hover:text-primary/80 transition-colors" />,
  img: (props) => {
    const imgProps = props as React.ImgHTMLAttributes<HTMLImageElement>
    const src = typeof imgProps.src === 'string' ? imgProps.src : ''
    return (
      <Image
        src={src || '/placeholder.png'}
        alt={imgProps.alt || 'image'}
        width={800}
        height={500}
        className="rounded-lg mx-auto my-6"
      />
    )
  },
  pre: (props) => {
    const { children, ...rest } = props as { children: React.ReactNode; filename?: string }
    const filename = (props as { filename?: string }).filename
    return <CodeBlock filename={filename} {...rest}>{children}</CodeBlock>
  },
  code: (props) => {
    const { children, className } = props as { children: React.ReactNode; className?: string }
    // If it's inline code (no className or no language-)
    if (!className || !className.includes('language-')) {
      return <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props} />
    }
    // Block code
    return <code className={`font-mono text-sm ${className}`} {...props}>{children}</code>
  },
  h1: (props) => (
    <h1 {...props} className="text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tight mt-8 mb-6 first:mt-0" />
  ),
  h2: (props) => {
    const { children } = props as { children: React.ReactNode }
    const id = typeof children === 'string' 
      ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') 
      : undefined
    return (
      <h2 {...props} id={id} className="group text-3xl font-bold text-foreground mt-12 mb-4 flex items-center scroll-mt-20">
        {id && (
          <a href={`#${id}`} className="text-primary opacity-0 -ml-7 mr-2 group-hover:opacity-100 transition-opacity">
            #
          </a>
        )}
        <span>{children}</span>
      </h2>
    )
  },
  h3: (props) => {
    const { children } = props as { children: React.ReactNode }
    const id = typeof children === 'string' 
      ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') 
      : undefined
    return (
      <h3 {...props} id={id} className="text-2xl font-bold text-foreground mt-8 mb-3 scroll-mt-20" />
    )
  },
  h4: (props) => <h4 {...props} className="text-xl font-semibold text-foreground mt-6 mb-2" />,
  p: (props) => <p {...props} className="leading-7 text-muted-foreground my-4" />,
  ul: (props) => <ul {...props} className="list-disc list-inside space-y-2 my-4 text-muted-foreground" />,
  ol: (props) => <ol {...props} className="list-decimal list-inside space-y-2 my-4 text-muted-foreground" />,
  li: (props) => <li {...props} className="leading-7" />,
  blockquote: (props) => (
    <blockquote {...props} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" />
  ),
  table: (props) => (
    <div className="my-6 w-full overflow-x-auto">
      <table {...props} className="w-full border-collapse" />
    </div>
  ),
  thead: (props) => <thead {...props} className="bg-secondary" />,
  tbody: (props) => <tbody {...props} className="divide-y divide-border" />,
  tr: (props) => <tr {...props} className="border-b border-border" />,
  th: (props) => <th {...props} className="px-4 py-3 text-left text-sm font-bold text-foreground" />,
  td: (props) => <td {...props} className="px-4 py-3 text-sm text-muted-foreground" />,
  hr: (props) => <hr {...props} className="my-8 border-border" />,
  strong: (props) => <strong {...props} className="font-bold text-foreground" />,
  em: (props) => <em {...props} className="italic" />,
  // Custom components
  InfoBox,
  Figure,
  BibliographyBox,
  BibEntry,
}

export default function MDXClient({ source }: { source: unknown }) {
  // @ts-expect-error MDXRemote needs MDXRemoteSerializeResult but source is already serialized
  return <MDXRemote {...source} components={components} />
}
