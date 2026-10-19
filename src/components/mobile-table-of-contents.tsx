'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, ListTree } from 'lucide-react'

interface Heading {
  id: string
  text: string
  level: number
}

export function MobileTableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return

    const elements = article.querySelectorAll('h2, h3')
    const headingElements = Array.from(elements)
      .map((element) => ({
        id: element.id,
        text: (element.textContent || '').replace(/^#\s*/, '').trim(),
        level: parseInt(element.tagName.substring(1)),
      }))
      .filter((h) => h.id && h.text)

    setHeadings(headingElements)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 85
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setIsOpen(false)
    }
  }

  return (
    <div className="xl:hidden my-8 rounded-xl border border-primary/20 bg-secondary/30 backdrop-blur-sm overflow-hidden transition-all duration-200 shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/40 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2.5">
          <ListTree className="w-4 h-4 text-primary" />
          <span className="font-semibold text-sm text-foreground">Índice de contenidos</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono font-medium">
            {headings.length}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-primary' : ''
          }`}
        />
      </button>

      {isOpen && (
        <nav
          aria-label="Índice de contenidos móvil"
          className="px-4 pb-4 pt-1 border-t border-primary/10 space-y-1 max-h-80 overflow-y-auto"
        >
          {headings.map((heading) => {
            const isActive = activeId === heading.id
            const isH3 = heading.level === 3

            return (
              <button
                key={heading.id}
                type="button"
                onClick={() => handleScrollTo(heading.id)}
                className={`w-full text-left py-2 px-3 rounded-md text-sm transition-all duration-150 flex items-center ${
                  isH3 ? 'pl-6 text-xs' : 'font-medium'
                } ${
                  isActive
                    ? 'text-primary bg-primary/10 font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                <span className="truncate">{heading.text}</span>
              </button>
            )
          })}
        </nav>
      )}
    </div>
  )
}
