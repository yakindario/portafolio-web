import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Mail,
  Globe,
  Linkedin,
  Code2,
} from "lucide-react";
import type { Metadata } from "next";
import { AboutPageSchema } from "@/components/shema-markup";

export const metadata: Metadata = {
  title: "Sobre mí | Yakin Dario - Ingeniero Telemático y DevOps",
  description:
    "Conoce mi trayectoria profesional como Ingeniero Telemático, mi experiencia en DevOps, desarrollo Full Stack y mi enfoque en soluciones tecnológicas innovadoras.",
  keywords: [
    "biografía profesional",
    "ingeniero telemático",
    "experiencia DevOps",
    "desarrollador Full Stack",
    "Yakin Dario",
    "trayectoria profesional",
    "Desarrollo Web en Puerto Vallarta",
  ],
  openGraph: {
    title: "Sobre mí | Yakin Dario - Ingeniero Telemático y DevOps",
    description:
      "Conoce mi trayectoria profesional como Ingeniero Telemático especializado en DevOps y desarrollo Full Stack.",
    images: [
      {
        url: "/yakindario.webp",
        width: 1200,
        height: 630,
        alt: "Yakin Dario - Perfil profesional",
      },
    ],
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutPageSchema />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <aside className="space-y-6">
            <Card className="overflow-hidden border-primary/10 bg-secondary/40 backdrop-blur-sm">
              <div className="relative aspect-[4/5]">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_45%)]"
                  aria-hidden
                />
                <Image
                  src="/Yakindario.webp"
                  alt="Yakin Dario"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            <Card className="border-primary/10 bg-secondary/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Mail className="h-4 w-4" /> Datos de contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary/70" />
                  <a
                    href="mailto:yakindario@gmail.com"
                    className="hover:underline"
                  >
                    yakindario@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary/70" />
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
                  <Linkedin className="h-4 w-4 text-primary/70" />
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
                  <MapPin className="h-4 w-4 text-primary/70" /> Puerto Vallarta,
                  Jalisco
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="space-y-12">
            <section className="space-y-4 border-b border-primary/10 pb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                Sobre Mí
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Sobre Mí
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Ingeniero en Telemática y desarrollador full‑stack apasionado por
                el DevOps, la nube y la automatización de despliegues.
              </p>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-6 w-1 rounded-full bg-primary" />
                <h2 className="text-2xl font-bold">Mi Historia</h2>
              </div>
              <Card className="border-primary/10 bg-secondary/40">
                <CardContent className="space-y-4 pt-6 text-muted-foreground leading-relaxed">
                  <p>
                    ¡Hola! Soy <strong>Yakin Dario Méndez Muñoz</strong>,
                    ingeniero en Telemática egresado de la Universidad de
                    Guadalajara(udg), Centro Univercitario de la Costa (CUC). De
                    puerto vallarta, Jalisco, México. He combinado mi pasión por
                    las redes y el soporte técnico con el desarrollo web
                    full‑stack, especializándome en Laravel, Next.js y React.
                  </p>
                  <p>
                    Me encanta construir productos que resuelvan problemas
                    reales y automatizar su entrega mediante <em>CI/CD</em>,
                    Docker y GitHub Actions. He desplegado proyectos en Vercel y
                    Azure, siguiendo principios de <em>DevOps</em> y buenas
                    prácticas de seguridad.
                  </p>
                  <p>
                    Cuando no estoy codificando, participo en comunidades de
                    desarrollo, estudio nuevas arquitecturas cloud y creo
                    contenido educativo sobre Linux y DevOps.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-6 w-1 rounded-full bg-primary" />
                <h2 className="text-2xl font-bold">Habilidades Técnicas</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-primary/10 bg-secondary/40">
                  <CardHeader>
                    <CardTitle>Frontend</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                    <Badge variant="outline">HTML5</Badge>
                    <Badge variant="outline">CSS3</Badge>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-secondary/40">
                  <CardHeader>
                    <CardTitle>Backend</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Express</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">REST APIs</Badge>
                    <Badge variant="outline">GraphQL</Badge>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-secondary/40">
                  <CardHeader>
                    <CardTitle>DevOps & Cloud</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    <Badge variant="outline">Git</Badge>
                    <Badge variant="outline">GitHub Actions</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Terraform</Badge>
                    <Badge variant="outline">Vercel</Badge>
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Azure</Badge>
                    <Badge variant="outline">CI/CD</Badge>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-secondary/40">
                  <CardHeader>
                    <CardTitle>Metodologías</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    <Badge variant="outline">Agile</Badge>
                    <Badge variant="outline">Scrum</Badge>
                    <Badge variant="outline">TDD</Badge>
                    <Badge variant="outline">Code Review</Badge>
                    <Badge variant="outline">Responsive Design</Badge>
                    <Badge variant="outline">SEO</Badge>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-6 w-1 rounded-full bg-primary" />
                <h2 className="text-2xl font-bold">Certificaciones & Cursos</h2>
              </div>
              <Card className="border-primary/10 bg-secondary/40">
                <CardContent className="space-y-3 pt-6 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Code2 className="mt-1 h-4 w-4 text-primary/70" /> AWS
                    re/Start – Fundamentos de Cloud (2024)
                  </div>
                  <div className="flex items-start gap-2">
                    <Code2 className="mt-1 h-4 w-4 text-primary/70" /> Microsoft
                    AZ‑900 – Azure Fundamentals (2024)
                  </div>
                  <div className="flex items-start gap-2">
                    <Code2 className="mt-1 h-4 w-4 text-primary/70" /> Bootcamp
                    DevOps – Código Facilito (2024)
                  </div>
                  <div className="flex items-start gap-2">
                    <Code2 className="mt-1 h-4 w-4 text-primary/70" /> Bootcamp
                    PHP & Laravel – Código Facilito (2024)
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-6 w-1 rounded-full bg-primary" />
                <h2 className="text-2xl font-bold">Proyectos Destacados</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-primary/10 bg-secondary/40">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-4 w-4" /> Portafolio Web
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>
                      Sitio personal en Next.js + Tailwind CSS con CI/CD en
                      GitHub Actions y despliegue automático en Vercel.
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
                <Card className="border-primary/10 bg-secondary/40">
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

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-6 w-1 rounded-full bg-primary" />
                <h2 className="text-2xl font-bold">Educación</h2>
              </div>
              <Card className="border-primary/10 bg-secondary/40">
                <CardHeader>
                  <CardTitle className="flex flex-wrap items-center justify-between gap-3">
                    <span>Ingeniería en Telemática</span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" /> 2018 ‑ 2022
                    </span>
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" /> Universidad de Guadalajara –
                    CUCosta
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Mención en telecomunicaciones, infraestructura de redes y
                    soporte técnico. Proyecto de titulación: Optimización de red
                    LAN y servicios en la nube para una empresa regional.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
