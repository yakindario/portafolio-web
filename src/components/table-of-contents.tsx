"use client"

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extraer todos los headings h2 y h3 del artículo
    const article = document.querySelector('article')
    if (!article) return

    const elements = article.querySelectorAll('h2, h3')
    const headingElements = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: parseInt(element.tagName.substring(1)),
    }))

    setHeadings(headingElements)

    // Observar qué sección está visible
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

  return (
    <aside className="hidden xl:block w-64 sticky top-[80px] h-[calc(100vh-80px)] overflow-y-auto p-6">
      <div className="flex flex-col gap-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">
          En esta página
        </h4>
        <nav className="flex flex-col border-l border-border">
          {headings.map((heading) => {
            const isActive = activeId === heading.id
            const isH3 = heading.level === 3

            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`
                  py-1.5 text-sm transition-all
                  ${isH3 ? 'pl-8 text-xs' : 'pl-4'}
                  ${
                    isActive
                      ? 'text-primary font-medium border-l border-primary -ml-[1px] bg-primary/5 rounded-r'
                      : 'text-muted-foreground hover:text-primary hover:border-l-primary hover:-ml-[1px] border-l border-transparent'
                  }
                `}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(heading.id)
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                {heading.text}
              </a>
            )
          })}
        </nav>

        {/* Newsletter Card */}
        <div className="mt-8 p-4 bg-secondary/40 backdrop-blur-sm rounded-lg border border-border">
          <h5 className="text-foreground text-sm font-bold mb-2">¿Te gustó este artículo?</h5>
          <p className="text-muted-foreground text-xs mb-3">
            Únete al newsletter semanal para más contenido técnico.
          </p>
          <button className="w-full py-2 rounded bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold border border-primary/30 transition-colors">
            Suscribirse
          </button>
        </div>
      </div>
    </aside>
  )
}
