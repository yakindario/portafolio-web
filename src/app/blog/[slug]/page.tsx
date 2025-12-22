import MDXClient from '@/components/mdx-client'
import { getPostBySlug } from '@/lib/blog'
import Link from 'next/link'
// Card components removed - not used in current layout
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'

// Nota: Asegúrate de que esta estructura de tipos coincida con tu versión de Next.js
// En Next.js 15, params es una Promise.
type Props = { params: Promise<{ slug: string }> }

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const { frontmatter, mdxSource } = await getPostBySlug(slug)

  return (
    <article className="container max-w-3xl mx-auto px-4 py-10">
      
      {/* 1. Navegación Superior */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="-ml-3 text-muted-foreground hover:text-foreground">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>
        </Button>
      </div>

      {/* 2. Encabezado del Post (Hero Section) */}
      <header className="mb-10 space-y-4 text-center sm:text-left">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl">
            {frontmatter.title}
          </h1>
          
          {/* Metadatos */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-muted-foreground">
            {frontmatter.date && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={frontmatter.date}>
                  {new Date(frontmatter.date).toLocaleDateString('es-MX', {
                    dateStyle: 'long'
                  })}
                </time>
              </div>
            )}
            {frontmatter.readingTime && (
               <div className="flex items-center gap-1">
                 <Clock className="h-4 w-4" />
                 <span>{frontmatter.readingTime} min lectura</span>
               </div>
            )}
            {frontmatter.category && (
              <Button variant="ghost" size="sm" asChild className="h-auto p-0">
                <Link href={`/blog/category/${frontmatter.category}`}>
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="capitalize">{frontmatter.category}</span>
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Tags */}
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
            {frontmatter.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      <Separator className="my-8" />

      {/* 3. Contenido Principal */}
      <div className="relative">
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
           <MDXClient source={mdxSource} />
        </div>
      </div>

      <Separator className="my-12" />

      {/* 4. Footer del artículo con Firma de Autor */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Sección de Autor */}
        <div className="flex flex-col space-y-1 text-center sm:text-left">
            <p className="text-base font-medium text-foreground">
                Escrito por <span className="font-bold">Yakin Dario</span>
            </p>
            <p className="text-sm text-muted-foreground font-medium">
                Ingeniero Telemático
            </p>
        </div>

        <Button asChild variant="outline">
          <Link href="/blog">
            Ver otros posts
          </Link>
        </Button>
      </div>

    </article>
  )
}