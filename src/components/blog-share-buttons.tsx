'use client'

import { useState } from 'react'
import { Check, Link2, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BlogShareButtonsProps {
  title: string
  slug: string
  className?: string
}

export function BlogShareButtons({ title, slug, className = '' }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : `https://yakindario.me/blog/${slug}`

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = shareUrl
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      // ignore copy errors
    }
  }

  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      name: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: 'hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 hover:bg-[#1DA1F2]/10',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: 'hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10',
    },
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.301-.15-1.778-.877-2.053-.977-.275-.1-.475-.15-.675.15-.2.301-.775.977-.95 1.177-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.488-.893-.796-1.496-1.78-1.671-2.081-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.226-.244-.585-.492-.506-.675-.515-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.026-1.05 2.502s1.075 2.9 1.225 3.101c.15.2 2.116 3.231 5.127 4.532.716.31 1.275.495 1.71.634.72.228 1.375.196 1.893.118.577-.087 1.778-.727 2.029-1.428.25-.701.25-1.302.175-1.428-.075-.126-.275-.201-.575-.351zM12 21.82c-1.802 0-3.565-.486-5.114-1.408l-.367-.218-3.799.996 1.014-3.703-.24-.382c-1.01-1.609-1.544-3.468-1.544-5.375 0-5.408 4.399-9.809 9.81-9.809 2.62 0 5.083 1.02 6.936 2.875 1.854 1.854 2.874 4.316 2.874 6.934 0 5.409-4.4 9.81-9.81 9.81zm0-21.82c-6.627 0-12 5.373-12 12 0 2.115.549 4.103 1.512 5.835l-1.512 5.525 5.679-1.489c1.677.915 3.593 1.439 5.321 1.439 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
        </svg>
      ),
      color: 'hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10',
    },
  ]

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 mr-1">
        <Share2 className="w-3.5 h-3.5 text-primary" />
        Compartir:
      </span>

      <Button
        variant="outline"
        size="sm"
        onClick={handleCopy}
        className={`h-8 px-2.5 text-xs font-medium border-primary/20 transition-all duration-200 ${
          copied ? 'bg-primary/10 text-primary border-primary/50' : 'hover:border-primary/50'
        }`}
        title="Copiar enlace del artículo"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 mr-1.5 text-primary" />
            <span>¡Copiado!</span>
          </>
        ) : (
          <>
            <Link2 className="h-3.5 w-3.5 mr-1.5" />
            <span>Copiar link</span>
          </>
        )}
      </Button>

      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`Compartir en ${link.name}`}
          className={`inline-flex items-center justify-center h-8 w-8 rounded-md border border-primary/20 bg-background/50 text-muted-foreground transition-all duration-200 ${link.color}`}
        >
          {link.icon}
          <span className="sr-only">Compartir en {link.name}</span>
        </a>
      ))}
    </div>
  )
}
