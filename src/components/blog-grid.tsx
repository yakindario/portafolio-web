'use client'

import { useState, useMemo } from 'react'
import { BlogCard } from './blog-card'
import { BlogFilters } from './blog-filters'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Post {
  slug: string
  excerpt: string
  readingTime: number
  title?: string
  date?: string
  description?: string
  category?: string
  tags?: string[]
  image?: string
}

interface BlogGridProps {
  posts: Post[]
}

const POSTS_PER_PAGE = 9

export function BlogGrid({ posts }: BlogGridProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>()
    posts.forEach((post) => {
      if (post.category) cats.add(post.category)
    })
    return Array.from(cats)
  }, [posts])

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === '' ||
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory =
        selectedCategory === null || post.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [posts, searchQuery, selectedCategory])

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE
    return filteredPosts.slice(start, start + POSTS_PER_PAGE)
  }, [filteredPosts, currentPage])

  // Reset page when filters change
  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <>
      <BlogFilters
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
        categories={categories}
      />

      {/* Posts Grid */}
      {paginatedPosts.length === 0 ? (
        <div className="bg-card rounded-xl border border-border p-12 text-center">
          <p className="text-muted-foreground">No se encontraron artículos que coincidan con tu búsqueda.</p>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              image={post.image}
              readingTime={post.readingTime}
            />
          ))}
        </section>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center">
          <nav aria-label="Pagination" className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center justify-center h-10 px-4 rounded-lg border border-border bg-muted text-muted-foreground hover:text-foreground hover:border-primary hover:bg-muted/80 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Anterior
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex items-center justify-center w-10 h-10 rounded-lg border font-bold transition-all ${
                  currentPage === page
                    ? 'border-primary bg-primary/10 text-primary shadow-[0_0_10px_oklch(0.72_0.15_195/20%)]'
                    : 'border-border bg-muted text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted/80'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center h-10 px-4 rounded-lg border border-border bg-muted text-muted-foreground hover:text-foreground hover:border-primary hover:bg-muted/80 transition-all font-medium group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </nav>
        </div>
      )}
    </>
  )
}
