'use client'

import { LayoutGrid, Globe, Server, Database } from 'lucide-react'

interface ProjectFiltersProps {
  onCategoryChange: (category: string | null) => void
  selectedCategory: string | null
  counts?: Record<string, number>
}

const categories = [
  { id: null, label: 'Todos', icon: LayoutGrid },
  { id: 'web-apps', label: 'Aplicaciones Web', icon: Globe },
  { id: 'infrastructure', label: 'Infraestructura', icon: Server },
  { id: 'data', label: 'Datos & SQL', icon: Database },
]

export function ProjectFilters({
  onCategoryChange,
  selectedCategory,
  counts,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const Icon = category.icon
        const isActive = selectedCategory === category.id
        const count = counts ? (category.id === null ? counts.all : counts[category.id] || 0) : undefined
        
        return (
          <button
            key={category.id ?? 'all'}
            onClick={() => onCategoryChange(category.id)}
            className={`
              flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold
              transition-all duration-200 whitespace-nowrap
              ${isActive
                ? 'bg-primary text-primary-foreground shadow-[0_0_20px_oklch(0.72_0.19_195/30%)]'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            <span>{category.label}</span>
            {count !== undefined && (
              <span
                className={`ml-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${
                  isActive
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'bg-secondary text-muted-foreground'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
