"use client"
import { MDXRemote } from 'next-mdx-remote'

interface MDXComponents {
  [key: string]: React.ComponentType<Record<string, unknown>>
}

const components: MDXComponents = {
  a: (props) => <a {...props} className="text-primary underline" />,
  img: (props) => <img {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} alt="" className="rounded mx-auto my-4" />,
  pre: (props) => <pre {...props} className="rounded bg-muted p-4 overflow-auto" />,
  code: (props) => <code {...props} className="bg-muted px-1 rounded text-sm" />,
  h2: (props) => <h2 {...props} className="text-2xl font-semibold mt-6 mb-3" />,
  p: (props) => <p {...props} className="leading-7 text-muted-foreground" />,
}

export default function MDXClient({ source }: { source: Record<string, unknown> }) {
  return <MDXRemote {...source} components={components} />
}
