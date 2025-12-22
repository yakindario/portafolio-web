"use client"
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'

interface MDXComponents {
  [key: string]: React.ComponentType<Record<string, unknown>>
}

const components: MDXComponents = {
  a: (props) => <a {...props} className="text-primary underline" />,
  img: (props) => {
    const imgProps = props as React.ImgHTMLAttributes<HTMLImageElement>
    const src = typeof imgProps.src === 'string' ? imgProps.src : ''
    return (
      <Image
        src={src || '/placeholder.png'}
        alt={imgProps.alt || 'image'}
        width={600}
        height={400}
        className="rounded mx-auto my-4"
      />
    )
  },
  pre: (props) => <pre {...props} className="rounded bg-muted p-4 overflow-auto" />,
  code: (props) => <code {...props} className="bg-muted px-1 rounded text-sm" />,
  h2: (props) => <h2 {...props} className="text-2xl font-semibold mt-6 mb-3" />,
  p: (props) => <p {...props} className="leading-7 text-muted-foreground" />,
}

export default function MDXClient({ source }: { source: unknown }) {
  // @ts-expect-error MDXRemote needs MDXRemoteSerializeResult but source is already serialized
  return <MDXRemote {...source} components={components} />
}
