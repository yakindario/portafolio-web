'use client'

import { Github, Play, Terminal, Smartphone, HardDrive, Share2, Archive } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface Technology {
  name: string
  color: string
}

export interface Project {
  id: number
  title: string
  description: string
  image?: string
  imageType?: 'default' | 'terminal' | 'phone' | 'network' | 'server' | 'archive'
  terminalContent?: string[]
  technologies: Technology[]
  githubUrl: string
  liveUrl?: string
  docsUrl?: string
  featured: boolean
  category: 'web-apps' | 'iot-hardware' | 'infrastructure' | 'data'
  icon?: 'hub' | 'terminal' | 'smartphone' | 'dns' | 'share' | 'archive'
}

function getTechColor(color: string) {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    react: {
      bg: 'bg-[oklch(0.72_0.18_200/15%)]',
      text: 'text-[oklch(0.72_0.18_200)]',
      border: 'border-[oklch(0.72_0.18_200/25%)]'
    },
    nextjs: {
      bg: 'bg-[oklch(0.75_0.02_260/15%)]',
      text: 'text-[oklch(0.85_0.02_260)]',
      border: 'border-[oklch(0.75_0.02_260/25%)]'
    },
    typescript: {
      bg: 'bg-[oklch(0.65_0.15_250/15%)]',
      text: 'text-[oklch(0.70_0.15_250)]',
      border: 'border-[oklch(0.65_0.15_250/25%)]'
    },
    nodejs: {
      bg: 'bg-[oklch(0.70_0.18_145/15%)]',
      text: 'text-[oklch(0.75_0.18_145)]',
      border: 'border-[oklch(0.70_0.18_145/25%)]'
    },
    python: {
      bg: 'bg-[oklch(0.78_0.15_85/15%)]',
      text: 'text-[oklch(0.78_0.15_85)]',
      border: 'border-[oklch(0.78_0.15_85/25%)]'
    },
    laravel: {
      bg: 'bg-[oklch(0.60_0.22_25/15%)]',
      text: 'text-[oklch(0.65_0.22_25)]',
      border: 'border-[oklch(0.60_0.22_25/25%)]'
    },
    php: {
      bg: 'bg-[oklch(0.55_0.18_280/15%)]',
      text: 'text-[oklch(0.65_0.18_280)]',
      border: 'border-[oklch(0.55_0.18_280/25%)]'
    },
    docker: {
      bg: 'bg-[oklch(0.65_0.18_230/15%)]',
      text: 'text-[oklch(0.72_0.18_230)]',
      border: 'border-[oklch(0.65_0.18_230/25%)]'
    },
    kubernetes: {
      bg: 'bg-[oklch(0.65_0.20_260/15%)]',
      text: 'text-[oklch(0.72_0.20_260)]',
      border: 'border-[oklch(0.65_0.20_260/25%)]'
    },
    aws: {
      bg: 'bg-[oklch(0.75_0.18_55/15%)]',
      text: 'text-[oklch(0.75_0.18_55)]',
      border: 'border-[oklch(0.75_0.18_55/25%)]'
    },
    mysql: {
      bg: 'bg-[oklch(0.60_0.18_220/15%)]',
      text: 'text-[oklch(0.70_0.18_220)]',
      border: 'border-[oklch(0.60_0.18_220/25%)]'
    },
    tailwind: {
      bg: 'bg-[oklch(0.72_0.15_195/15%)]',
      text: 'text-[oklch(0.72_0.15_195)]',
      border: 'border-[oklch(0.72_0.15_195/25%)]'
    },
    vercel: {
      bg: 'bg-[oklch(0.85_0.01_260/15%)]',
      text: 'text-[oklch(0.90_0.01_260)]',
      border: 'border-[oklch(0.85_0.01_260/25%)]'
    },
    ansible: {
      bg: 'bg-[oklch(0.55_0.22_15/15%)]',
      text: 'text-[oklch(0.65_0.22_15)]',
      border: 'border-[oklch(0.55_0.22_15/25%)]'
    },
    helm: {
      bg: 'bg-[oklch(0.60_0.20_250/15%)]',
      text: 'text-[oklch(0.70_0.20_250)]',
      border: 'border-[oklch(0.60_0.20_250/25%)]'
    },
    digitalocean: {
      bg: 'bg-[oklch(0.65_0.18_230/15%)]',
      text: 'text-[oklch(0.72_0.18_230)]',
      border: 'border-[oklch(0.65_0.18_230/25%)]'
    },
    sqlite: {
      bg: 'bg-[oklch(0.65_0.15_230/15%)]',
      text: 'text-[oklch(0.72_0.15_230)]',
      border: 'border-[oklch(0.65_0.15_230/25%)]'
    },
    sql: {
      bg: 'bg-[oklch(0.70_0.12_200/15%)]',
      text: 'text-[oklch(0.75_0.12_200)]',
      border: 'border-[oklch(0.70_0.12_200/25%)]'
    },
    pandas: {
      bg: 'bg-[oklch(0.55_0.20_280/15%)]',
      text: 'text-[oklch(0.65_0.20_280)]',
      border: 'border-[oklch(0.55_0.20_280/25%)]'
    },
    jupyter: {
      bg: 'bg-[oklch(0.75_0.18_45/15%)]',
      text: 'text-[oklch(0.75_0.18_45)]',
      border: 'border-[oklch(0.75_0.18_45/25%)]'
    },
    mqtt: {
      bg: 'bg-[oklch(0.70_0.18_50/15%)]',
      text: 'text-[oklch(0.75_0.18_50)]',
      border: 'border-[oklch(0.70_0.18_50/25%)]'
    },
    network: {
      bg: 'bg-[oklch(0.50_0.02_260/20%)]',
      text: 'text-[oklch(0.70_0.02_260)]',
      border: 'border-[oklch(0.50_0.02_260/30%)]'
    },
    livewire: {
      bg: 'bg-[oklch(0.70_0.20_320/15%)]',
      text: 'text-[oklch(0.75_0.20_320)]',
      border: 'border-[oklch(0.70_0.20_320/25%)]'
    },
    mercadopago: {
      bg: 'bg-[oklch(0.65_0.20_220/15%)]',
      text: 'text-[oklch(0.72_0.20_220)]',
      border: 'border-[oklch(0.65_0.20_220/25%)]'
    },
    github: {
      bg: 'bg-[oklch(0.75_0.02_260/15%)]',
      text: 'text-[oklch(0.85_0.02_260)]',
      border: 'border-[oklch(0.75_0.02_260/25%)]'
    },
    default: {
      bg: 'bg-[oklch(0.50_0.02_260/20%)]',
      text: 'text-[oklch(0.70_0.02_260)]',
      border: 'border-[oklch(0.50_0.02_260/30%)]'
    },
  }
  return colors[color.toLowerCase()] || colors.default
}

function getProjectIcon(icon?: string) {
  const icons: Record<string, React.ReactNode> = {
    hub: <HardDrive className="w-5 h-5 text-[oklch(0.5_0.02_260)]" />,
    terminal: <Terminal className="w-5 h-5 text-[oklch(0.5_0.02_260)]" />,
    smartphone: <Smartphone className="w-5 h-5 text-[oklch(0.5_0.02_260)]" />,
    dns: <HardDrive className="w-5 h-5 text-[oklch(0.5_0.02_260)]" />,
    share: <Share2 className="w-5 h-5 text-[oklch(0.5_0.02_260)]" />,
    archive: <Archive className="w-5 h-5 text-[oklch(0.5_0.02_260)]" />,
  }
  return icons[icon || 'hub'] || icons.hub
}

// Terminal preview component
function TerminalPreview({ content }: { content: string[] }) {
  return (
    <div className="h-48 w-full relative flex flex-col bg-[oklch(0.08_0.02_260)] border-b border-[oklch(1_0_0/10%)]">
      {/* Terminal header */}
      <div className="h-8 bg-[oklch(0.10_0.02_260)] border-b border-[oklch(1_0_0/10%)] flex items-center px-4 gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>
      {/* Terminal content */}
      <div className="flex-1 p-4 font-mono text-[10px] sm:text-xs overflow-hidden leading-snug">
        {content.map((line, i) => (
          <p key={i} className={`mb-1 ${
            line.startsWith('user@') ? 'text-green-400' : 
            line.startsWith('[+]') ? 'text-[oklch(0.5_0.02_260)]' :
            line.startsWith('[INFO]') ? 'text-blue-400' :
            line === '_' ? 'text-green-400 animate-blink' :
            'text-white'
          }`}>
            {line === '_' ? '█' : line}
          </p>
        ))}
      </div>
    </div>
  )
}

// Phone mockup preview
function PhonePreview() {
  return (
    <div className="h-48 w-full relative overflow-hidden bg-[oklch(0.12_0.02_260)] border-b border-[oklch(1_0_0/10%)] flex items-end justify-center">
      <div className="w-28 h-36 bg-black rounded-t-xl border-4 border-[oklch(0.25_0.02_260)] border-b-0 shadow-2xl relative translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="w-full h-full bg-[oklch(0.15_0.02_260)] p-2">
          <div className="flex justify-between mb-2">
            <div className="w-5 h-5 rounded-full bg-primary/20" />
            <div className="w-8 h-1.5 bg-[oklch(0.3_0.02_260)] rounded-full" />
          </div>
          <div className="space-y-2">
            <div className="h-8 w-full bg-[oklch(0.25_0.02_260)] rounded" />
            <div className="h-8 w-full bg-[oklch(0.25_0.02_260)] rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Network visualization preview
function NetworkPreview() {
  return (
    <div className="h-48 w-full relative overflow-hidden bg-[oklch(0.08_0.02_260)] border-b border-[oklch(1_0_0/10%)] flex items-center justify-center">
      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
        <svg className="w-full h-full text-primary" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="50" r="4" fill="currentColor" />
          <circle cx="50" cy="30" r="3" fill="currentColor" />
          <circle cx="150" cy="30" r="3" fill="currentColor" />
          <circle cx="50" cy="70" r="3" fill="currentColor" />
          <circle cx="150" cy="70" r="3" fill="currentColor" />
          <path d="M100 50 L50 30 M100 50 L150 30 M100 50 L50 70 M100 50 L150 70" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/60 border border-[oklch(1_0_0/15%)] text-[10px] text-[oklch(0.5_0.02_260)] font-mono">
        v1.0.0
      </div>
    </div>
  )
}

// Server/Image preview
function ImagePreview({ image, alt }: { image?: string; alt: string }) {
  return (
    <div className="h-48 w-full relative overflow-hidden bg-[oklch(0.15_0.02_260)] border-b border-[oklch(1_0_0/10%)]">
      {image ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url('${image}')` }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[oklch(0.25_0.03_260)] to-[oklch(0.12_0.02_260)] flex items-center justify-center">
          <span className="text-[oklch(1_0_0/15%)] text-6xl font-bold">{alt.charAt(0)}</span>
        </div>
      )}
    </div>
  )
}

// Archive preview
function ArchivePreview() {
  return (
    <div className="h-48 w-full relative overflow-hidden bg-[oklch(0.15_0.02_260)] border-b border-[oklch(1_0_0/10%)] flex items-center justify-center">
      <div className="w-14 h-14 rounded-full bg-[oklch(0.25_0.02_260/80%)] border border-[oklch(1_0_0/15%)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:border-primary/50">
        <Archive className="w-7 h-7 text-[oklch(0.5_0.02_260)] group-hover:text-white transition-colors" />
      </div>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, technologies, githubUrl, liveUrl, docsUrl, featured, imageType, terminalContent, image, icon } = project

  // Render preview based on type
  const renderPreview = () => {
    switch (imageType) {
      case 'terminal':
        return <TerminalPreview content={terminalContent || []} />
      case 'phone':
        return <PhonePreview />
      case 'network':
        return <NetworkPreview />
      case 'archive':
        return <ArchivePreview />
      default:
        return <ImagePreview image={image} alt={title} />
    }
  }

  return (
    <article className="group flex flex-col h-full bg-[oklch(0.16_0.02_260)] border border-[oklch(1_0_0/8%)] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_40px_-10px_oklch(0.72_0.19_195/20%)]">
      {/* Image/Preview Section */}
      <div className="relative">
        {renderPreview()}
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title with icon */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
          {getProjectIcon(icon)}
        </div>

        {/* Description */}
        <p className="text-[oklch(0.55_0.02_260)] text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => {
            const colors = getTechColor(tech.color)
            return (
              <span
                key={tech.name}
                className={`px-2 py-0.5 rounded text-xs font-medium border ${colors.bg} ${colors.text} ${colors.border}`}
              >
                {tech.name}
              </span>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-4 border-t border-[oklch(1_0_0/5%)] flex items-center gap-2">
          {liveUrl && (
            <Button 
              size="sm" 
              className="flex-1 bg-primary hover:bg-white hover:text-black text-primary-foreground font-bold text-xs"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4 mr-1" />
                Demo
              </a>
            </Button>
          )}
          
          {docsUrl && (
            <Button 
              variant="outline" 
              size="sm"
              className="flex-1 border-[oklch(1_0_0/15%)] text-white hover:border-white hover:bg-[oklch(0.25_0.02_260)] text-xs"
              asChild
            >
              <a href={docsUrl} target="_blank" rel="noopener noreferrer">
                Docs
              </a>
            </Button>
          )}
          
          <Button 
            variant="outline" 
            size="sm"
            className={`${!liveUrl && !docsUrl ? 'flex-1' : ''} border-[oklch(1_0_0/15%)] text-white hover:border-white hover:bg-[oklch(0.25_0.02_260)] text-xs`}
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              {!liveUrl && !docsUrl && <span className="ml-2">Ver Código</span>}
            </a>
          </Button>
        </div>
      </div>
    </article>
  )
}
