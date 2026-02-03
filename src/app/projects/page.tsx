import { Metadata } from 'next'
import ProjectsContent from './projects-content'

export const metadata: Metadata = {
  title: 'Proyectos | Yakin Dario - Portafolio de Ingeniería',
  description: 'Portafolio de Ingeniería y Desarrollo. Una colección de aplicaciones web, pipelines DevOps y proyectos de bases de datos.',
  openGraph: {
    title: 'Proyectos | Yakin Dario - Portafolio de Ingeniería',
    description: 'Portafolio de Ingeniería y Desarrollo. Una colección de aplicaciones web, pipelines DevOps y proyectos de bases de datos.',
  },
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
