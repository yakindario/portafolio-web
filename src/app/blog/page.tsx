import { getAllPosts } from '@/lib/blog'
import { BlogGrid } from '@/components/blog-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Ingeniería de Redes & DevOps',
  description: 'Artículos técnicos, tutoriales y reflexiones sobre redes, cloud computing, desarrollo y arquitectura de sistemas.',
  alternates: {
    canonical: 'https://yakindario.me/blog',
  },
  openGraph: {
    title: 'Blog | Yakin Dario - Ingeniería de Redes & DevOps',
    description: 'Artículos técnicos, tutoriales y reflexiones sobre redes, cloud computing, desarrollo y arquitectura de sistemas.',
    url: 'https://yakindario.me/blog',
    siteName: 'Yakin Dario',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://yakindario.me/Yakindario.webp',
        width: 1200,
        height: 630,
        alt: 'Blog de Yakin Dario',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Yakin Dario - Ingeniería de Redes & DevOps',
    description: 'Artículos técnicos, tutoriales y reflexiones sobre redes, cloud computing, desarrollo y arquitectura de sistemas.',
    creator: '@yakindario',
    images: ['https://yakindario.me/Yakindario.webp'],
  },
}

export default async function BlogIndex() {
  const posts = await getAllPosts()

  return (
    <div className="relative min-h-screen">
      {/* Background dot pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 text-foreground/5 bg-dot-grid" />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Últimos Artículos
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Artículos técnicos, tutoriales y reflexiones sobre redes, desarrollo y arquitectura de sistemas.
          </p>
        </div>

        {/* Blog Grid with Filters */}
        <BlogGrid posts={posts} />
      </main>
    </div>
  )
}
