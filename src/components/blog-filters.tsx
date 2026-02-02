'use client'

import { useState } from 'react'
import { Search, LayoutGrid } from 'lucide-react'

interface BlogFiltersProps {
  onSearchChange: (query: string) => void
  onCategoryChange: (category: string | null) => void
  selectedCategory: string | null
  categories: string[]
}

function getCategoryDotColor(category: string) {
  const colors: Record<string, string> = {
    'Redes': 'bg-[oklch(0.72_0.15_195)]',
    'Desarrollo': 'bg-[oklch(0.75_0.18_140)]',
    'DevOps': 'bg-[oklch(0.75_0.15_55)]',
  }
  return colors[category] || 'bg-[oklch(0.72_0.15_195)]'
}

function getCategoryHoverColor(category: string) {
  const colors: Record<string, string> = {
    'Redes': 'hover:text-[oklch(0.72_0.15_195)] hover:border-[oklch(0.72_0.15_195/30%)]',
    'Desarrollo': 'hover:text-[oklch(0.75_0.18_140)] hover:border-[oklch(0.75_0.18_140/30%)]',
    'DevOps': 'hover:text-[oklch(0.75_0.15_55)] hover:border-[oklch(0.75_0.15_55/30%)]',
  }
  return colors[category] || ''
}

export function BlogFilters({
  onSearchChange,
  onCategoryChange,
  selectedCategory,
  categories,
}: BlogFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    onSearchChange(value)
  }

  return (
    <section className="mb-10 sticky top-20 z-40">
      <div className="bg-[oklch(0.15_0.02_260/80%)] backdrop-blur-xl p-3 rounded-xl flex flex-col md:flex-row items-stretch md:items-center gap-4 shadow-lg border border-[oklch(1_0_0/10%)]">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[oklch(0.5_0.02_260)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Buscar artículos..."
            className="w-full h-12 bg-[oklch(0.13_0.02_260/50%)] border border-[oklch(1_0_0/15%)] text-[oklch(0.85_0.01_260)] text-sm rounded-lg pl-10 pr-4 focus:ring-1 focus:ring-[oklch(0.72_0.15_195)] focus:border-[oklch(0.72_0.15_195)] placeholder:text-[oklch(0.45_0.02_260)] transition-all font-sans outline-none"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 px-2 pb-2 md:pb-0">
          {/* All Button */}
          <button
            onClick={() => onCategoryChange(null)}
            className={`h-10 px-4 rounded-lg text-sm font-medium border transition-colors flex items-center gap-2 ${
              selectedCategory === null
                ? 'bg-[oklch(0.25_0.02_260)] text-white border-[oklch(1_0_0/15%)]'
                : 'bg-[oklch(0.13_0.02_260/50%)] text-[oklch(0.6_0.02_260)] border-transparent hover:border-[oklch(1_0_0/15%)] hover:text-white'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            Todos
          </button>

          {/* Category Buttons */}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`h-10 px-4 rounded-lg text-sm font-medium border transition-all flex items-center gap-2 group ${
                selectedCategory === category
                  ? `bg-[oklch(0.25_0.02_260)] text-white border-[oklch(1_0_0/15%)]`
                  : `bg-[oklch(0.13_0.02_260/50%)] text-[oklch(0.6_0.02_260)] border-transparent ${getCategoryHoverColor(category)}`
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${getCategoryDotColor(category)} group-hover:scale-125 transition-transform`} />
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
