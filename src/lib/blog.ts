import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'

const postsDir = path.join(process.cwd(), 'src', 'content', 'blog')

export async function getAllPosts() {
  try {
    const files = await fs.readdir(postsDir)
    const posts = await Promise.all(
      files
        .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
        .map(async (filename) => {
          const slug = filename.replace(/\.mdx?$|\.md$/, '')
          const full = path.join(postsDir, filename)
          const raw = await fs.readFile(full, 'utf8')
          const { data, content } = matter(raw)
          // generar un excerpt simple desde el primer párrafo
          const firstParagraph = (content || '').split(/\n\s*\n/).find((p) => p && p.trim().length > 0) || ''
          const plain = firstParagraph.replace(/[#>*`]/g, '').trim()
          const excerpt = plain.length > 160 ? plain.slice(0, 157) + '...' : plain
          return { slug, excerpt, ...(data as Record<string, any>) }
        })
    )
    // opcional: ordenar por fecha
    posts.sort((a: any, b: any) => (a.date > b.date ? -1 : 1))
    return posts
  } catch (e) {
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

  return { frontmatter: data as Record<string, any>, mdxSource }
}
