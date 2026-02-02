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
        <div className="bg-[oklch(0.18_0.02_260)] rounded-xl border border-[oklch(1_0_0/10%)] p-12 text-center">
          <p className="text-[oklch(0.6_0.02_260)]">No articles found matching your criteria.</p>
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
              className="flex items-center justify-center h-10 px-4 rounded-lg border border-[oklch(1_0_0/15%)] bg-[oklch(0.25_0.02_260)] text-[oklch(0.6_0.02_260)] hover:text-white hover:border-[oklch(0.72_0.15_195)] hover:bg-[oklch(0.22_0.02_260)] transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex items-center justify-center w-10 h-10 rounded-lg border font-bold transition-all ${
                  currentPage === page
                    ? 'border-[oklch(0.72_0.15_195)] bg-[oklch(0.72_0.15_195/10%)] text-[oklch(0.72_0.15_195)] shadow-[0_0_10px_oklch(0.72_0.15_195/20%)]'
                    : 'border-[oklch(1_0_0/15%)] bg-[oklch(0.25_0.02_260)] text-[oklch(0.6_0.02_260)] hover:text-white hover:border-[oklch(1_0_0/25%)] hover:bg-[oklch(0.22_0.02_260)]'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center h-10 px-4 rounded-lg border border-[oklch(1_0_0/15%)] bg-[oklch(0.25_0.02_260)] text-[oklch(0.75_0.01_260)] hover:text-white hover:border-[oklch(0.72_0.15_195)] hover:bg-[oklch(0.22_0.02_260)] transition-all font-medium group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </nav>
        </div>
      )}
    </>
  )
}
