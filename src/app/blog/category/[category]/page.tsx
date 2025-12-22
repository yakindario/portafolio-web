import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft } from 'lucide-react'

type Props = { params: Promise<{ category: string }> }

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const allPosts = await getAllPosts()
  
  // Filtrar posts por categoría
  const posts = allPosts.filter((p) => p.category === category)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="-ml-3 text-muted-foreground hover:text-foreground">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>
        </Button>
      </div>

      <header className="mb-8">
        <h1 className="text-4xl font-bold capitalize">Categoría: {category}</h1>
        <p className="text-muted-foreground mt-2">{posts.length} artículo(s) encontrado(s)</p>
      </header>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No hay posts en esta categoría.</p>
          <Button asChild className="mt-4">
            <Link href="/blog">Ver todos los posts</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Card key={p.slug} className="flex flex-col justify-between">
              <CardContent>
                <CardHeader className="p-0">
                  <CardTitle className="text-lg">
                    <Link href={`/blog/${p.slug}`} className="hover:underline">{p.title || p.slug}</Link>
                  </CardTitle>
                  <div className="text-xs text-muted-foreground mt-1">{p.date}</div>
                </CardHeader>

                {p.description || p.excerpt ? (
                  <CardDescription className="mt-3 text-sm text-muted-foreground">{p.description || p.excerpt}</CardDescription>
                ) : null}

                {p.tags && p.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {p.tags.map((tag: string) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>

              <CardFooter>
                <Button variant="ghost" size="sm" asChild className="w-full">
                  <Link href={`/blog/${p.slug}`}>Leer</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
