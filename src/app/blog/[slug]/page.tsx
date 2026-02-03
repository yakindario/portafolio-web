import MDXClient from '@/components/mdx-client'
import { getPostBySlug } from '@/lib/blog'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Calendar, Clock, Tag, User, ArrowRight } from 'lucide-react'
import { TableOfContents } from '@/components/table-of-contents'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { frontmatter } = await getPostBySlug(slug)

  return {
    title: `${frontmatter.title} | Yakin Dario`,
    description: (frontmatter.description as string) || `Lee sobre ${frontmatter.title}`,
    openGraph: {
      title: frontmatter.title as string,
      description: (frontmatter.description as string) || undefined,
      type: 'article',
      publishedTime: frontmatter.date as string,
      authors: ['Yakin Dario'],
      tags: (frontmatter.tags as string[]) || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title as string,
      description: (frontmatter.description as string) || undefined,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const { frontmatter, mdxSource } = await getPostBySlug(slug)
  
  const title = String(frontmatter.title || '')
  const date = String(frontmatter.date || '')
  const category = String(frontmatter.category || '')
  const tags = Array.isArray(frontmatter.tags) ? frontmatter.tags : []
  const readingTime = frontmatter.readingTime ? String(frontmatter.readingTime) : ''
  const description = String(frontmatter.description || '')

  return (
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
      <Card className="bg-secondary/40 backdrop-blur-sm border-primary/10 p-8 md:p-12 mb-12">
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

          {/* Autor */}
          <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Yakin Dario</p>
              <p className="text-sm text-muted-foreground">Ingeniero Telemático</p>
            </div>
          </div>
        </header>
      </Card>

      {/* Contenido Principal */}
      <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none 
        prose-headings:text-foreground prose-headings:font-bold
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-muted-foreground prose-p:leading-relaxed
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-code:bg-secondary/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-secondary/60 prose-pre:border prose-pre:border-primary/10
        prose-blockquote:border-primary prose-blockquote:bg-secondary/20 prose-blockquote:py-1 prose-blockquote:not-italic
        prose-strong:text-foreground
        prose-li:text-muted-foreground
        prose-img:rounded-lg prose-img:border prose-img:border-primary/10">
        <MDXClient source={mdxSource} />
      </div>

      {/* Footer del artículo */}
      <Card className="bg-secondary/40 backdrop-blur-sm border-primary/10 p-8 mt-16">
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
  )
}