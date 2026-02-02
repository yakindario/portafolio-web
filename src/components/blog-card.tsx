'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface BlogCardProps {
  slug: string
  title?: string
  description?: string
  excerpt: string
  date?: string
  category?: string
  image?: string
  readingTime: number
}

function getCategoryColor(category?: string) {
  const colors: Record<string, { text: string; bg: string; border: string }> = {
    'Networking': {
      text: 'text-[oklch(0.72_0.15_195)]',
      bg: 'bg-[oklch(0.72_0.15_195)]',
      border: 'border-[oklch(0.72_0.15_195/30%)]'
    },
    'Development': {
      text: 'text-[oklch(0.75_0.18_140)]',
      bg: 'bg-[oklch(0.75_0.18_140)]',
      border: 'border-[oklch(0.75_0.18_140/30%)]'
    },
    'DevOps': {
      text: 'text-[oklch(0.75_0.15_55)]',
      bg: 'bg-[oklch(0.75_0.15_55)]',
      border: 'border-[oklch(0.75_0.15_55/30%)]'
    },
  }
  return colors[category || ''] || colors['Development']
}

function formatDate(date?: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).toUpperCase()
}

export function BlogCard({
  slug,
  title,
  description,
  excerpt,
  date,
  category,
  image,
  readingTime,
}: BlogCardProps) {
  const categoryColor = getCategoryColor(category)

  return (
    <Link href={`/blog/${slug}`} className="group block h-full">
      <article className="h-full bg-[oklch(0.18_0.02_260)] rounded-xl border border-[oklch(1_0_0/10%)] overflow-hidden hover:-translate-y-1 hover:border-[oklch(0.72_0.15_195)] hover:shadow-[0_0_20px_oklch(0.72_0.15_195/10%)] transition-all duration-200 flex flex-col">
        {/* Image Section */}
        <div className="h-48 overflow-hidden relative">
          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className={`px-2 py-1 bg-[oklch(0.13_0.02_260/80%)] backdrop-blur text-xs font-mono font-bold rounded border border-[oklch(1_0_0/15%)] ${categoryColor.text}`}>
              {category?.toUpperCase() || 'ARTICLE'}
            </span>
          </div>
          
          {/* Image */}
          {image ? (
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url('${image}')` }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[oklch(0.25_0.03_260)] to-[oklch(0.15_0.02_260)] flex items-center justify-center">
              <span className="text-[oklch(1_0_0/20%)] text-6xl font-bold">{title?.charAt(0) || 'A'}</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Meta info */}
          <div className="flex items-center gap-4 text-xs font-mono text-[oklch(0.55_0.02_260)] mb-3">
            <span>{formatDate(date)}</span>
            <span>{readingTime} MIN READ</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-[oklch(0.72_0.15_195)] transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[oklch(0.65_0.02_260)] mb-6 line-clamp-3">
            {description || excerpt}
          </p>

          {/* Read Article Button */}
          <div className="mt-auto">
            <button className="text-[oklch(0.72_0.15_195)] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
              Read Article
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </article>
    </Link>
  )
}
