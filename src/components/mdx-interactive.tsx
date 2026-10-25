'use client'

import React, { useState, useRef } from 'react'
import { Copy, Check, ChevronRight } from 'lucide-react'

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
export function CodeBlock({ children, className, filename, ...props }: React.HTMLAttributes<HTMLPreElement> & { filename?: string }) {
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

// Interactive Tabs component for switching commands/languages
export function Tabs({ items = [], children }: { items?: string[]; children: React.ReactNode }) {
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

export function Tab({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

// Collapsible Details / Accordion
export function Details({ summary = 'Ver detalles', children }: { summary?: string; children: React.ReactNode }) {
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
