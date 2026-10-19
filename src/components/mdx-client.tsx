"use client"

import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import {
  Info,
  Lightbulb,
  Copy,
  Check,
  BookOpen,
  AlertTriangle,
  AlertOctagon,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'
import React, { useState, useRef } from 'react'
import { Badge } from '@/components/ui/badge'

interface MDXComponents {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ComponentType<any>
}

function formatLanguage(lang: string): string {
  const map: Record<string, string> = {
    yaml: 'YAML',
    yml: 'YAML',
    bash: 'BASH',
    sh: 'SHELL',
    shell: 'SHELL',
    zsh: 'ZSH',
    python: 'PYTHON',
    py: 'PYTHON',
    javascript: 'JAVASCRIPT',
    js: 'JAVASCRIPT',
    typescript: 'TYPESCRIPT',
    ts: 'TYPESCRIPT',
    tsx: 'REACT TSX',
    jsx: 'REACT JSX',
    json: 'JSON',
    html: 'HTML',
    css: 'CSS',
    dockerfile: 'DOCKER',
    docker: 'DOCKER',
    sql: 'SQL',
    markdown: 'MARKDOWN',
    md: 'MARKDOWN',
  }
  return map[lang.toLowerCase()] || lang.toUpperCase()
}

// Code block with copy functionality and automatic language badge
function CodeBlock({ children, className, filename, ...props }: React.HTMLAttributes<HTMLPreElement> & { filename?: string }) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  // Detect language from className or child's className
  let detectedLanguage = ''
  if (className) {
    const match = /language-(\w+)/.exec(className)
    if (match) detectedLanguage = match[1]
  }

  if (!detectedLanguage && React.isValidElement(children)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const childClass = (children.props as any)?.className || ''
    const match = /language-(\w+)/.exec(childClass)
    if (match) detectedLanguage = match[1]
  }

  const handleCopy = () => {
    const codeText = preRef.current?.textContent || ''
    if (!codeText) return

    if (navigator.clipboard) {
      navigator.clipboard.writeText(codeText)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = codeText
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const displayTitle = filename || (detectedLanguage ? formatLanguage(detectedLanguage) : 'TERMINAL')

  return (
    <div className="group relative rounded-xl overflow-hidden border border-border/80 dark:border-primary/20 bg-[#0c1017] my-6 shadow-xl transition-all duration-200 hover:border-primary/40">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#131923] border-b border-border/70 dark:border-primary/15 select-none">
        <div className="flex items-center gap-3">
          {/* Terminal control dots */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 inline-block shadow-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 inline-block shadow-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 inline-block shadow-sm" />
          </div>

          <span className="text-xs font-mono font-medium text-slate-300 tracking-wide">
            {displayTitle}
          </span>
        </div>

        {/* Copy button */}
        <button
          type="button"
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all duration-150 ${
            copied
              ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
              : 'text-slate-400 hover:text-slate-100 hover:bg-white/10 active:scale-95'
          }`}
          title="Copiar código al portapapeles"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="font-semibold">¡Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="p-4 overflow-x-auto">
        <pre
          ref={preRef}
          {...props}
          className={`font-mono text-sm leading-relaxed text-[#c9d1d9] ${className || ''}`}
        >
          {children}
        </pre>
      </div>
    </div>
  )
}


// Callout box with multiple alert variants
interface CalloutProps {
  children: React.ReactNode
  title?: string
  type?: 'info' | 'tip' | 'warning' | 'success' | 'error'
}

function Callout({ children, title, type = 'info' }: CalloutProps) {
  const configs = {
    info: {
      defaultTitle: 'Información',
      icon: Info,
      classes: 'bg-primary/10 border-l-primary text-primary',
      iconColor: 'text-primary',
    },
    tip: {
      defaultTitle: 'Consejo',
      icon: Lightbulb,
      classes: 'bg-cyan-500/10 border-l-cyan-500 text-cyan-500',
      iconColor: 'text-cyan-500',
    },
    warning: {
      defaultTitle: 'Advertencia',
      icon: AlertTriangle,
      classes: 'bg-amber-500/10 border-l-amber-500 text-amber-500',
      iconColor: 'text-amber-500',
    },
    success: {
      defaultTitle: 'Éxito / Resultado',
      icon: CheckCircle2,
      classes: 'bg-emerald-500/10 border-l-emerald-500 text-emerald-500',
      iconColor: 'text-emerald-500',
    },
    error: {
      defaultTitle: 'Precaución / Peligro',
      icon: AlertOctagon,
      classes: 'bg-red-500/10 border-l-red-500 text-red-500',
      iconColor: 'text-red-500',
    },
  }

  const config = configs[type] || configs.info
  const Icon = config.icon

  return (
    <div className={`p-4 rounded-xl border-l-4 ${config.classes} my-6 backdrop-blur-sm shadow-sm`}>
      <div className="flex gap-3">
        <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${config.iconColor}`} />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground text-sm mb-1">{title || config.defaultTitle}</p>
          <div className="text-muted-foreground text-sm leading-relaxed prose-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}

function InfoBox({ children, title, type = 'info' }: { children: React.ReactNode; title?: string; type?: 'info' | 'tip' }) {
  return <Callout type={type} title={title}>{children}</Callout>
}

function WarningBox({ children, title }: { children: React.ReactNode; title?: string }) {
  return <Callout type="warning" title={title}>{children}</Callout>
}

function SuccessBox({ children, title }: { children: React.ReactNode; title?: string }) {
  return <Callout type="success" title={title}>{children}</Callout>
}

function TipBox({ children, title }: { children: React.ReactNode; title?: string }) {
  return <Callout type="tip" title={title}>{children}</Callout>
}

function ErrorBox({ children, title }: { children: React.ReactNode; title?: string }) {
  return <Callout type="error" title={title}>{children}</Callout>
}

// Interactive Tabs component for switching commands/languages
function Tabs({ items = [], children }: { items?: string[]; children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState(0)
  const childrenArray = React.Children.toArray(children)

  return (
    <div className="my-6 rounded-xl border border-border/80 dark:border-primary/20 bg-[#0c1017] overflow-hidden shadow-xl">
      <div className="flex items-center gap-1 px-3 pt-2 bg-[#131923] border-b border-border/70 dark:border-primary/15 overflow-x-auto">
        {items.map((item, index) => {
          const isActive = activeTab === index
          return (
            <button
              key={item}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-t-md transition-all duration-150 border-b-2 -mb-[1px] ${
                isActive
                  ? 'text-primary border-primary bg-primary/10'
                  : 'text-muted-foreground border-transparent hover:text-foreground hover:bg-white/5'
              }`}
            >
              {item}
            </button>
          )
        })}
      </div>
      <div className="p-4">
        {childrenArray[activeTab] || children}
      </div>
    </div>
  )
}

function Tab({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

// Collapsible Details / Accordion
function Details({ summary = 'Ver detalles', children }: { summary?: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="my-6 rounded-xl border border-primary/20 bg-secondary/30 backdrop-blur-sm overflow-hidden transition-all duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm text-foreground hover:bg-secondary/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span>{summary}</span>
        <ChevronRight
          className={`w-4 h-4 text-primary transition-transform duration-200 ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-1 border-t border-primary/10 text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

// Keyboard shortcut tag
function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="px-1.5 py-0.5 text-xs font-mono font-semibold text-foreground bg-muted border border-border rounded shadow-sm inline-block mx-0.5">
      {children}
    </kbd>
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

function slugifyHeading(node: React.ReactNode): string {
  function extractText(n: React.ReactNode): string {
    if (typeof n === 'string') return n
    if (typeof n === 'number') return n.toString()
    if (Array.isArray(n)) return n.map(extractText).join('')
    if (React.isValidElement(n)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return extractText((n.props as any)?.children)
    }
    return ''
  }

  const raw = extractText(node)
  return raw
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
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
    // If it's inline code (no className or no language- and no hljs)
    if (!className || (!className.includes('language-') && !className.includes('hljs'))) {
      return (
        <code className="bg-primary/10 border border-primary/20 text-primary px-1.5 py-0.5 rounded text-[0.875em] font-mono font-medium" {...props}>
          {children}
        </code>
      )
    }
    // Block code
    return <code className={`font-mono text-sm ${className}`} {...props}>{children}</code>
  },
  h1: (props) => (
    <h1 {...props} className="text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tight mt-8 mb-6 first:mt-0" />
  ),

  h2: (props) => {
    const { children } = props as { children: React.ReactNode }
    const id = slugifyHeading(children)
    return (
      <h2 {...props} id={id || undefined} className="group text-3xl font-bold text-foreground mt-12 mb-4 flex items-center scroll-mt-20">
        {id && (
          <a href={`#${id}`} className="text-primary opacity-0 -ml-7 mr-2 group-hover:opacity-100 transition-opacity" aria-label={`Enlace directo a ${id}`}>
            #
          </a>
        )}
        <span>{children}</span>
      </h2>
    )
  },
  h3: (props) => {
    const { children } = props as { children: React.ReactNode }
    const id = slugifyHeading(children)
    return (
      <h3 {...props} id={id || undefined} className="text-2xl font-bold text-foreground mt-8 mb-3 scroll-mt-20" />
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
  Callout,
  InfoBox,
  WarningBox,
  SuccessBox,
  TipBox,
  ErrorBox,
  Tabs,
  Tab,
  Details,
  Accordion: Details,
  Kbd,
  Badge,
  Figure,
  BibliographyBox,
  BibEntry,
}


export default function MDXClient({ source }: { source: unknown }) {
  // @ts-expect-error MDXRemote needs MDXRemoteSerializeResult but source is already serialized
  return <MDXRemote {...source} components={components} />
}
