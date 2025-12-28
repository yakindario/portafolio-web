import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | Yakin Dario - Portafolio de Desarrollo",
  description: "Explora mis proyectos de desarrollo web, DevOps y aplicaciones Full Stack. Ejemplos de trabajo con Next.js, React, AWS, y más.",
  openGraph: {
    title: "Proyectos | Yakin Dario - Portafolio de Desarrollo",
    description: "Explora mis proyectos de desarrollo web, DevOps y aplicaciones Full Stack.",
  },
};

const projects = [
  {
    id: 1,
    title: "Portafolio Web & Blog",
    description:
      "Sitio personal construido con Next.js y Tailwind CSS, CI/CD en GitHub Actions y despliegue continuo en Vercel. Incluye blog en MDX y sección de IA.",
    image: "/images/projects/portfolio.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
    ],
    githubUrl: "https://github.com/yakindario/portafolio-web",
    liveUrl: "https://yakindario.com",
    featured: true,
  },
  {
    id: 2,
    title: "E‑commerce en Laravel",
    description:
      "Plataforma de comercio electrónico con gestión de productos, roles (Spatie), pagos con Mercado Pago y componentes dinámicos en Livewire Volt.",
    image: "/images/projects/ecommerce.png",
    technologies: [
      "Laravel",
      "PHP",
      "Livewire",
      "Tailwind CSS",
      "MySQL",
      "Mercado Pago",
    ],
    githubUrl: "https://github.com/yakindario/ecommerce-proyecto-laravel",
    liveUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "DevOps Pipeline con Kubernetes",
    description:
      "Pipeline CI/CD que construye, prueba y despliega automáticamente una aplicación en un clúster Kubernetes en DigitalOcean usando GitHub Actions y Helm.",
    image: "/images/projects/devops.png",
    technologies: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Helm",
      "DigitalOcean",
    ],
    githubUrl: "https://github.com/yakindario/DevOps-Proyecto",
    liveUrl: "",
    featured: true,
  },
  {
    id: 4,
    title: "Bootcamp SQL – Análisis de Reservaciones",
    description:
      "Notebook que responde preguntas de negocio sobre una base de datos de reservaciones de hotel usando SQL y Python.",
    image: "/images/projects/sql_bootcamp.png",
    technologies: ["SQLite", "SQL", "Python", "Pandas", "Jupyter"],
    githubUrl: "https://github.com/yakindario/Bootcamp-de-SQL-",
    liveUrl: "",
    featured: false,
  },
  {
    id: 5,
    title: "Diseño BD Reservaciones Hotel",
    description:
      "Modelo relacional normalizado para gestionar huéspedes, habitaciones y pagos, implementado en SQLite.",
    image: "/images/projects/hotel_db.png",
    technologies: ["SQLite", "DB Design", "ERD"],
    githubUrl:
      "https://github.com/yakindario/Base-de-Datos-Reservaciones-Hotel",
    liveUrl: "",
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Mis Proyectos</h1>
          <p className="text-xl text-muted-foreground">
            Selección de trabajos donde combino desarrollo, DevOps y bases de
            datos
          </p>
        </header>

        {/* Featured */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Proyectos Destacados</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                {/* Image placeholder */}
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">
                    Imagen del Proyecto
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Badge variant="secondary">Destacado</Badge>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" /> Código
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" /> Ver Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Others */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Otros Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Imagen</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3 w-3" />
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">¿Te gusta lo que ves?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Estos son algunos de mis proyectos. ¡Hablemos sobre cómo puedo
              ayudar en tu iniciativa!
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Trabajemos Juntos</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
