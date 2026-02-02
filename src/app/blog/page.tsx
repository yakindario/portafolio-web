import { getAllPosts } from '@/lib/blog'
import { BlogGrid } from '@/components/blog-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Yakindario - Network Engineering & DevOps',
  description: 'Technical deep dives, tutorials, and thoughts on networking, development, and system architecture.',
  openGraph: {
    title: 'Blog | Yakindario - Network Engineering & DevOps',
    description: 'Technical deep dives, tutorials, and thoughts on networking, development, and system architecture.',
  },
}

export default async function BlogIndex() {
  const posts = await getAllPosts()

  return (
    <div className="relative min-h-screen">
      {/* Background dot pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 text-[oklch(1_0_0/8%)] bg-dot-grid" />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest Articles
          </h1>
          <p className="text-[oklch(0.6_0.02_260)] max-w-2xl">
            Technical deep dives, tutorials, and thoughts on networking, development, and system architecture.
          </p>
        </div>

        {/* Blog Grid with Filters */}
        <BlogGrid posts={posts} />
      </main>
    </div>
  )
}
