'use client'

import { useState } from 'react'
import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectCard, Project } from '@/components/project-card'
import { ProjectFilters } from '@/components/project-filters'

const projects: Project[] = [
  {
    id: 1,
    title: 'Portafolio Web & Blog',
    description:
      'Sitio personal construido con Next.js y Tailwind CSS, CI/CD en GitHub Actions y despliegue continuo en Vercel. Incluye blog en MDX y sección de IA.',
    image: '/images/projects/portfolio.png',
    imageType: 'default',
    technologies: [
      { name: 'Next.js', color: 'nextjs' },
      { name: 'React', color: 'react' },
      { name: 'Tailwind CSS', color: 'tailwind' },
      { name: 'TypeScript', color: 'typescript' },
      { name: 'Vercel', color: 'vercel' },
    ],
    githubUrl: 'https://github.com/yakindario/portafolio-web',
    liveUrl: 'https://yakindario.com',
    featured: true,
    category: 'web-apps',
    icon: 'hub',
  },
  {
    id: 2,
    title: 'E-commerce en Laravel',
    description:
      'Plataforma de comercio electrónico con gestión de productos, roles (Spatie), pagos con Mercado Pago y componentes dinámicos en Livewire Volt.',
    imageType: 'default',
    technologies: [
      { name: 'Laravel', color: 'laravel' },
      { name: 'PHP', color: 'php' },
      { name: 'Livewire', color: 'livewire' },
      { name: 'Tailwind CSS', color: 'tailwind' },
      { name: 'MySQL', color: 'mysql' },
      { name: 'Mercado Pago', color: 'mercadopago' },
    ],
    githubUrl: 'https://github.com/yakindario/ecommerce-proyecto-laravel',
    featured: true,
    category: 'web-apps',
    icon: 'hub',
  },
  {
    id: 3,
    title: 'DevOps Pipeline con Kubernetes',
    description:
      'Pipeline CI/CD que construye, prueba y despliega automáticamente una aplicación en un clúster Kubernetes en DigitalOcean usando GitHub Actions y Helm.',
    imageType: 'terminal',
    terminalContent: [
      'user@yakindario:~$ ./deploy.sh',
      '[+] Building Docker image...',
      '[INFO] Pushing to registry...',
      '[INFO] Deploying to K8s cluster...',
      '[+] Deployment successful!',
      '_'
    ],
    technologies: [
      { name: 'Docker', color: 'docker' },
      { name: 'Kubernetes', color: 'kubernetes' },
      { name: 'GitHub Actions', color: 'github' },
      { name: 'Helm', color: 'helm' },
      { name: 'DigitalOcean', color: 'digitalocean' },
    ],
    githubUrl: 'https://github.com/yakindario/DevOps-Proyecto',
    featured: true,
    category: 'infrastructure',
    icon: 'terminal',
  },
  {
    id: 4,
    title: 'Bootcamp SQL – Análisis de Reservaciones',
    description:
      'Notebook que responde preguntas de negocio sobre una base de datos de reservaciones de hotel usando SQL y Python.',
    imageType: 'default',
    technologies: [
      { name: 'SQLite', color: 'sqlite' },
      { name: 'SQL', color: 'sql' },
      { name: 'Python', color: 'python' },
      { name: 'Pandas', color: 'pandas' },
      { name: 'Jupyter', color: 'jupyter' },
    ],
    githubUrl: 'https://github.com/yakindario/Bootcamp-de-SQL-',
    featured: false,
    category: 'data',
    icon: 'hub',
  },
  {
    id: 5,
    title: 'Diseño BD Reservaciones Hotel',
    description:
      'Modelo relacional normalizado para gestionar huéspedes, habitaciones y pagos, implementado en SQLite.',
    imageType: 'network',
    technologies: [
      { name: 'SQLite', color: 'sqlite' },
      { name: 'DB Design', color: 'network' },
      { name: 'ERD', color: 'network' },
    ],
    githubUrl: 'https://github.com/yakindario/Base-de-Datos-Reservaciones-Hotel',
    featured: false,
    category: 'data',
    icon: 'share',
  },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects

  return (
    <div className="min-h-screen">
      {/* Background pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5 bg-dot-grid text-white" />
      
      <div className="relative z-10">
        <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                Proyectos
                <span className="text-primary">.</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Portafolio de Ingeniería y Desarrollo. Una colección de aplicaciones web, 
                pipelines DevOps y proyectos de bases de datos.
              </p>
            </div>
            
            {/* Filters */}
            <ProjectFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No se encontraron proyectos en esta categoría.
              </p>
            </div>
          )}
        </section>

        {/* GitHub CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-16">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                ¿Quieres ver más código?
              </h2>
              <p className="text-muted-foreground">
                Revisa mis repositorios y contribuciones en GitHub.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-foreground hover:text-background text-primary-foreground font-bold shrink-0"
              asChild
            >
              <a 
                href="https://github.com/yakindario" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                Ver Perfil de GitHub
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
