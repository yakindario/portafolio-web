import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default async function BlogIndex() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground mt-2">Artículos y notas sobre desarrollo y DevOps.</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.slug} className="flex flex-col justify-between">
            <CardContent>
              <CardHeader className="p-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-lg">
                    <Link href={`/blog/${p.slug}`} className="hover:underline">{p.title || p.slug}</Link>
                  </CardTitle>
                  {p.category && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/category/${p.category}`} className="text-xs">
                        <Badge variant="secondary" className="text-xs">{p.category}</Badge>
                      </Link>
                    </Button>
                  )}
                </div>
                {p.date ? <div className="text-xs text-muted-foreground">{p.date}</div> : null}
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
              <div className="w-full flex items-center justify-between">
                <div className="text-xs text-muted-foreground">{p.author ? String(p.author) : ''}</div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/blog/${p.slug}`}>Leer</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
