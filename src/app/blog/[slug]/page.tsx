import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { mdxComponents } from '@/components/mdx-components'
import { getPostBySlug, getAdjacentPosts, getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Calendar, Clock, Tag, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { TableOfContents } from '@/components/table-of-contents'
import { MobileTableOfContents } from '@/components/mobile-table-of-contents'
import { ReadingProgressBar } from '@/components/reading-progress-bar'
import { BlogShareButtons } from '@/components/blog-share-buttons'
import { BlogPostSchema } from '@/components/schema-markup'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { frontmatter } = await getPostBySlug(slug)
    const title = (frontmatter.title as string) || ''
    const description = (frontmatter.description as string) || `Lee sobre ${title}`
    const rawImage = frontmatter.image ? String(frontmatter.image) : '/Yakindario.webp'
    const imageUrl = rawImage.startsWith('http') ? rawImage : `https://yakindario.me${rawImage.startsWith('/') ? '' : '/'}${rawImage}`
    const postUrl = `https://yakindario.me/blog/${slug}`
    const imageType = imageUrl.endsWith('.webp') ? 'image/webp' : imageUrl.endsWith('.png') ? 'image/png' : 'image/jpeg'

    return {
      title,
      description,
      alternates: {
        canonical: postUrl,
      },
      openGraph: {
        title,
        description,
        url: postUrl,
        siteName: 'Yakin Dario',
        locale: 'es_ES',
        type: 'article',
        publishedTime: frontmatter.date as string,
        authors: ['Yakin Dario'],
        tags: (frontmatter.tags as string[]) || [],
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: title,
            type: imageType,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        creator: '@yakindario',
        images: [imageUrl],
      },
    }
  } catch {
    return {
      title: 'Post no encontrado',
    }
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  let frontmatter: Record<string, unknown>
  let content: string
  try {
    const post = await getPostBySlug(slug)
    frontmatter = post.frontmatter
    content = post.content
  } catch {
    notFound()
  }

  const { prevPost, nextPost } = await getAdjacentPosts(slug)
  
  const title = String(frontmatter.title || '')
  const date = String(frontmatter.date || '')
  const category = String(frontmatter.category || '')
  const tags = Array.isArray(frontmatter.tags) ? frontmatter.tags : []
  const readingTime = frontmatter.readingTime ? String(frontmatter.readingTime) : ''
  const description = String(frontmatter.description || '')
  const image = frontmatter.image ? String(frontmatter.image) : ''

  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        date={date}
        slug={slug}
        image={image}
        category={category}
        tags={tags as string[]}
      />
      <ReadingProgressBar />
      <div className="flex max-w-[1440px] mx-auto">
        <article className="container max-w-4xl mx-auto px-4 py-12 flex-1 min-w-0">
      
      {/* Navegación Superior */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="-ml-3 text-muted-foreground hover:text-primary transition-colors">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>
        </Button>
      </div>

      {/* Hero Header con glassmorphism */}
      <Card className="bg-secondary/40 backdrop-blur-sm border-primary/10 p-8 md:p-12 mb-8">
        <header className="space-y-6">
          {/* Categoría y fecha */}
          <div className="flex flex-wrap items-center gap-4">
            {category && (
              <Link href={`/blog/category/${category}`}>
                <Badge className="bg-primary/10 text-primary border-0 hover:bg-primary/20 transition-colors">
                  <Tag className="h-3 w-3 mr-1.5" />
                  {category}
                </Badge>
              </Link>
            )}
            {date && (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString('es-ES', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </div>
            )}
            {readingTime && (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{readingTime} min lectura</span>
              </div>
            )}
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {title}
          </h1>

          {/* Descripción */}
          {description && (
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="border-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Autor y Compartir */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-primary/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">Yakin Dario</p>
                <p className="text-xs text-muted-foreground">Ingeniero Telemático</p>
              </div>
            </div>

            <BlogShareButtons title={title} slug={slug} />
          </div>
        </header>
      </Card>

      {/* Imagen de Portada Hero */}
      {image && (
        <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-2xl overflow-hidden mb-12 border border-primary/15 shadow-2xl bg-secondary/30 group">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* Mobile Table of Contents (visible en móviles y tablets) */}
      <MobileTableOfContents />

      {/* Contenido Principal */}
      <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none 
        prose-headings:text-foreground prose-headings:font-bold
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-muted-foreground prose-p:leading-relaxed
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-transparent prose-pre:p-0 prose-pre:border-0 prose-pre:my-0
        prose-blockquote:border-primary prose-blockquote:bg-secondary/20 prose-blockquote:py-1 prose-blockquote:not-italic
        prose-strong:text-foreground
        prose-li:text-muted-foreground
        prose-img:rounded-lg prose-img:border prose-img:border-primary/10">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeHighlight],
            },
          }}
          components={mdxComponents}
        />
      </div>

      {/* Compartir al final del artículo */}
      <div className="mt-12 p-6 rounded-xl border border-primary/10 bg-secondary/30 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-foreground text-sm">¿Te resultó útil este artículo?</p>
          <p className="text-xs text-muted-foreground">Compártelo con otros desarrolladores o ingenieros de redes.</p>
        </div>
        <BlogShareButtons title={title} slug={slug} />
      </div>

      {/* Navegación entre posts: Anterior / Siguiente */}
      {(prevPost || nextPost) && (
        <nav aria-label="Navegación entre artículos" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group block p-5 rounded-xl border border-primary/10 bg-secondary/30 hover:bg-secondary/60 hover:border-primary/40 transition-all duration-200"
            >
              <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors mb-2">
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>ARTÍCULO ANTERIOR</span>
              </div>
              <p className="font-semibold text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                {prevPost.title}
              </p>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group block p-5 rounded-xl border border-primary/10 bg-secondary/30 hover:bg-secondary/60 hover:border-primary/40 transition-all duration-200 text-left sm:text-right"
            >
              <div className="flex items-center justify-start sm:justify-end gap-1.5 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors mb-2">
                <span>SIGUIENTE ARTÍCULO</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="font-semibold text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                {nextPost.title}
              </p>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </nav>
      )}

      {/* Footer del artículo */}
      <Card className="bg-secondary/40 backdrop-blur-sm border-primary/10 p-8 mt-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Autor */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Yakin Dario</p>
              <p className="text-sm text-muted-foreground">Ingeniero Telemático</p>
            </div>
          </div>

          {/* CTA */}
          <Button asChild className="group">
            <Link href="/blog">
              Ver más artículos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </Card>
      </article>
      
      {/* Table of Contents Sidebar */}
      <TableOfContents />
    </div>
    </>
  )
}