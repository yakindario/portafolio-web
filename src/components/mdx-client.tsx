"use client"
import { MDXRemote } from 'next-mdx-remote'

const components = {
  a: (props: any) => <a {...props} className="text-primary underline" />,
  img: (props: any) => <img {...props} className="rounded mx-auto my-4" />,
  pre: (props: any) => <pre {...props} className="rounded bg-muted p-4 overflow-auto" />,
  code: (props: any) => <code {...props} className="bg-muted px-1 rounded text-sm" />,
  h2: (props: any) => <h2 {...props} className="text-2xl font-semibold mt-6 mb-3" />,
  p: (props: any) => <p {...props} className="leading-7 text-muted-foreground" />,
}

export default function MDXClient({ source }: { source: any }) {
  return <MDXRemote {...source} components={components} />
}
