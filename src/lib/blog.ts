import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'

const postsDir = path.join(process.cwd(), 'src', 'content', 'blog')

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
  [key: string]: unknown
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const files = await fs.readdir(postsDir)
    const posts = await Promise.all(
      files
        .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
        .map(async (filename): Promise<Post> => {
          const slug = filename.replace(/\.mdx?$|\.md$/, '')
          const full = path.join(postsDir, filename)
          const raw = await fs.readFile(full, 'utf8')
          const { data, content } = matter(raw)
          // generar un excerpt simple desde el primer párrafo
          const firstParagraph = (content || '').split(/\n\s*\n/).find((p) => p && p.trim().length > 0) || ''
          const plain = firstParagraph.replace(/[#>*`]/g, '').trim()
          const excerpt = plain.length > 160 ? plain.slice(0, 157) + '...' : plain
          const readingTime = calculateReadingTime(content)
          return { slug, excerpt, readingTime, ...(data as Record<string, unknown>) } as Post
        })
    )
    // opcional: ordenar por fecha
    posts.sort((a, b) => {
      const dateA = a.date || ''
      const dateB = b.date || ''
      return dateA > dateB ? -1 : 1
    })
    return posts
  } catch {
    return []
  }
}

export async function getPostBySlug(slug: string) {
  const mdxPath = path.join(postsDir, `${slug}.mdx`)
  const mdPath = path.join(postsDir, `${slug}.md`)
  let fullPath = mdxPath
  try {
    await fs.access(mdxPath)
  } catch {
    fullPath = mdPath
  }

  const raw = await fs.readFile(fullPath, 'utf8')
  const { data, content } = matter(raw)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  })

  return { frontmatter: data as Record<string, unknown>, mdxSource }
}
