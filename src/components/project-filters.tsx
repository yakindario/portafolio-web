'use client'

import { LayoutGrid, Globe, Server, Database } from 'lucide-react'

interface ProjectFiltersProps {
  onCategoryChange: (category: string | null) => void
  selectedCategory: string | null
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
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const Icon = category.icon
        const isActive = selectedCategory === category.id
        
        return (
          <button
            key={category.id ?? 'all'}
            onClick={() => onCategoryChange(category.id)}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold
              transition-all duration-200 whitespace-nowrap
              ${isActive
                ? 'bg-primary text-primary-foreground shadow-[0_0_15px_oklch(0.72_0.19_195/30%)]'
                : 'bg-[oklch(0.18_0.02_260)] border border-[oklch(1_0_0/10%)] text-[oklch(0.7_0.02_260)] hover:text-white hover:border-[oklch(1_0_0/20%)]'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            {category.label}
          </button>
        )
      })}
    </div>
  )
}
