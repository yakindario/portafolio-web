import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Mail,
  Globe,
  Linkedin,
  Code2,
} from "lucide-react";
import type { Metadata } from "next";
import { AboutPageSchema } from "@/components/shema-markup";

export const metadata: Metadata = {
  title: "Sobre mí | Yakin Dario - Ingeniero Telemático y DevOps",
  description: "Conoce mi trayectoria profesional como Ingeniero Telemático, mi experiencia en DevOps, desarrollo Full Stack y mi enfoque en soluciones tecnológicas innovadoras.",
  keywords: ["biografía profesional", "ingeniero telemático", "experiencia DevOps", "desarrollador Full Stack", "Yakin Dario", "trayectoria profesional", "Desarrollo Web en Puerto Vallarta"],
  openGraph: {
    title: "Sobre mí | Yakin Dario - Ingeniero Telemático y DevOps",
    description: "Conoce mi trayectoria profesional como Ingeniero Telemático especializado en DevOps y desarrollo Full Stack.",
    images: [
      {
        url: "/yakindario.webp", // Reemplaza con tu imagen específica para esta página
        width: 1200,
        height: 630,
        alt: "Yakin Dario - Perfil profesional"
      }
    ],
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
    <AboutPageSchema />
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            Sobre Mí
          </h1>
          <p className="text-xl text-muted-foreground">
            Ingeniero en Telemática y desarrollador full‑stack apasionado por el
            DevOps, la nube y la automatización de despliegues.
          </p>
        </header>

        {/* Contact & Links */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" /> Datos de contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:yakindario@gmail.com"
                  className="hover:underline"
                >
                  yakindario@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <a
                  href="https://yakindario.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  yakindario.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/yakindario/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/yakindario
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Puerto Vallarta, Jalisco
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bio */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" /> Mi Historia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ¡Hola! Soy <strong>Yakin Dario Méndez Muñoz</strong>, ingeniero en
                Telemática egresado de la Universidad de Guadalajara(udg), Centro Univercitario de la Costa (CUC).
                De puerto vallarta, Jalisco, México. 
                He combinado mi pasión por las redes y el soporte técnico con el
                desarrollo web full‑stack, especializándome en Laravel, Next.js
                y React.
              </p>
              <p>
                Me encanta construir productos que resuelvan problemas reales y
                automatizar su entrega mediante <em>CI/CD</em>, Docker y
                GitHub Actions. He desplegado proyectos en Vercel y Azure,
                siguiendo principios de <em>DevOps</em> y buenas prácticas de
                seguridad.
              </p>
              <p>
                Cuando no estoy codificando, participo en comunidades de
                desarrollo, estudio nuevas arquitecturas cloud y creo contenido
                educativo sobre Linux y DevOps.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>PHP</Badge>
                  <Badge>Laravel</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>REST APIs</Badge>
                  <Badge>GraphQL</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>DevOps & Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub Actions</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Terraform</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Azure</Badge>
                  <Badge>CI/CD</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Metodologías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Agile</Badge>
                  <Badge>Scrum</Badge>
                  <Badge>TDD</Badge>
                  <Badge>Code Review</Badge>
                  <Badge>Responsive Design</Badge>
                  <Badge>SEO</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Certificaciones & Cursos</h2>
          <Card>
            <CardContent className="space-y-2 pt-6">
              <div className="flex items-start gap-2 text-muted-foreground">
                <Code2 className="h-4 w-4 mt-1" /> AWS re/Start – Fundamentos de
                Cloud (2024)
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Code2 className="h-4 w-4 mt-1" /> Microsoft AZ‑900 – Azure
                Fundamentals (2024)
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Code2 className="h-4 w-4 mt-1" /> Bootcamp DevOps – Código
                Facilito (2024)
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Code2 className="h-4 w-4 mt-1" /> Bootcamp PHP & Laravel –
                Código Facilito (2024)
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Portafolio Web
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>
                  Sitio personal en Next.js + Tailwind CSS con CI/CD en GitHub
                  Actions y despliegue automático en Vercel.
                </p>
                <a
                  href="https://github.com/yakindario/portafolio-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Ver Repositorio
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> E‑commerce en Laravel
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>
                  Plataforma de compras con Laravel + Livewire, roles con
                  Spatie y pagos integrados con Mercado Pago.
                </p>
                <a
                  href="https://github.com/yakindario/ecommerce-proyecto-larave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Ver Repositorio
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Educación</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Ingeniería en Telemática</span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" /> 2018 ‑ 2022
                </div>
              </CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" /> Universidad de Guadalajara – CUCosta
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Mención en telecomunicaciones, infraestructura de redes y
                soporte técnico. Proyecto de titulación: Optimización de red LAN
                y servicios en la nube para una empresa regional.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
      <AboutPageSchema />
    </>
  );
}
