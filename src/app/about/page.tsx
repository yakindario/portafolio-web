import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { AboutPageSchema } from "@/components/shema-markup";

export const metadata: Metadata = {
  title: "Sobre mí | Yakin Dario - Ingeniero Telemático y DevOps",
  description:
    "Ingeniero en Telemática con experiencia en infraestructura de redes, videovigilancia y desarrollo Full Stack (Laravel/Next.js). Especialista en soluciones híbridas hardware-software.",
  keywords: [
    "Ingeniero Telemático",
    "Soporte Técnico Puerto Vallarta",
    "Desarrollador Laravel Next.js",
    "Infraestructura de Redes",
    "Yakin Dario",
    "DevOps Azure AWS",
    "CCTV Hikvision",
  ],
  openGraph: {
    title: "Sobre mí | Yakin Dario - Ingeniero Telemático y DevOps",
    description:
      "Ingeniero en Telemática con sólida experiencia en infraestructura, redes y desarrollo Full Stack.",
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

// Actualizado basado en la sección "Experiencia Profesional" y "Educación" de tu CV [cite: 30-40]
const timeline = [
  {
    period: "Jul 2025 — Presente",
    title: "Soporte Técnico Especializado",
    company: "DSI Comunicaciones",
    description: "Implementación de sistemas de videovigilancia (CCTV Hikvision), configuración de routers/switches para entornos hoteleros y certificación de cableado estructurado (Voz, Datos, Fibra Óptica).",
    active: true,
  },
  {
    period: "2018 — 2022",
    title: "Ingeniería en Telemática",
    company: "Universidad de Guadalajara (CUCosta)",
    description: "Formación integral en telecomunicaciones. Proyecto de titulación enfocado en optimización de redes LAN y servicios en la nube.",
    active: false,
  },
  {
    period: "Jul 2021 — Dic 2021",
    title: "Practicante de Sistemas",
    company: "Costa Sur Resort & Spa",
    description: "Soporte técnico a usuarios y mantenimiento de hardware. Implementación de puntos de acceso Wi-Fi y gestión de infraestructura de comunicaciones.",
    active: false,
  },
  {
    period: "Bootcamps & Certificaciones",
    title: "Formación Continua",
    company: "Código Facilito / Microsoft / AWS",
    description: "Especialización técnica constante: Bootcamp PHP & Laravel (2025), Bootcamp DevOps (2024), Azure Fundamentals (AZ-900) y AWS re/Start.",
    active: false,
  },
];

const philosophy = [
  {
    title: "Infraestructura Robusta",
    description: "Desde el cableado estructurado hasta la nube: la red física es el cimiento de cualquier software exitoso.",
  },
  {
    title: "Buenas Prácticas",
    description: "El código limpio y la documentación no son opcionales. Mantengo una fuerte orientación a los estándares de la industria.",
  },
  {
    title: "Aprendizaje Continuo",
    description: "La tecnología no se detiene. Mi enfoque combina la solidez de la ingeniería tradicional con la agilidad del desarrollo moderno.",
  },
];

// Actualizado con "Habilidades Técnicas" del CV [cite: 8-16]
const techStack = {
  infra: ["Cisco", "Ubiquiti", "Hikvision", "Azure", "AWS", "Docker", "Linux"],
  frontend: ["Next.js", "React", "JavaScript", "Tailwind", "Vercel"],
  backend: ["PHP", "Laravel", "MySQL", "PostgreSQL", "Python", "Node.js"],
};

export default function AboutPage() {
  return (
    <>
      <AboutPageSchema />
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 flex flex-col gap-8">
              {/* Profile Photo */}
              <div className="relative group mx-auto lg:mx-0">
                <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-xl opacity-50" />
                <div className="relative aspect-square w-64 rounded-full overflow-hidden border-2 border-border p-2 bg-card">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/Yakindario.webp"
                      alt="Yakin Dario"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    />
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full shadow-2xl">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="text-[10px] font-bold text-foreground uppercase tracking-widest whitespace-nowrap">
                    Disponible
                  </span>
                </div>
              </div>

              {/* Name & Location */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold">Yakin Dario</h3>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground text-sm mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>Puerto Vallarta, Jalisco, México</span>
                </div>
              </div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://github.com/yakindario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-2 bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all rounded-xl py-4"
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/yakin-dario/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-2 bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all rounded-xl py-4"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">LinkedIn</span>
                </a>
                <a
                  href="mailto:yakindario@gmail.com"
                  className="group flex flex-col items-center justify-center gap-2 bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all rounded-xl py-4"
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Email</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-8 flex flex-col gap-16">
            {/* Hero Section */}
            <section className="flex flex-col gap-4">
              <p className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase">
                Perfil Profesional
              </p>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-none">
                <span className="text-primary">Ingeniero Telemático</span>
                <br />
                & Desarrollador Full Stack.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mt-4">
                Fusionando la solidez de la infraestructura de telecomunicaciones con la agilidad del desarrollo web moderno y DevOps.
              </p>
            </section>

            [cite_start]{/* 01. The Journey - Actualizado con "Perfil Profesional" del CV [cite: 4-7] */}
            <section className="flex flex-col gap-6">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <span className="text-primary font-mono text-sm">01.</span>
                Sobre Mí
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Soy un <strong className="text-foreground">Ingeniero en Telemática</strong> con sólida experiencia en el mundo físico de las redes: desde infraestructura de telecomunicaciones y cableado estructurado hasta sistemas de videovigilancia (Hikvision) en entornos críticos como la hotelería.
                </p>
                <p>
                  Mi evolución profesional me ha llevado a expandir mis capacidades hacia el <span className="text-primary">Desarrollo Web Full Stack y DevOps</span>. 
                  Hoy, no solo configuro la red, sino que construyo las aplicaciones que corren sobre ella utilizando tecnologías como PHP/Laravel y JavaScript/Next.js, 
                  implementando pipelines de CI/CD y gestionando infraestructura en la nube (AWS, Azure).
                </p>
              </div>
            </section>

            {/* 02. Career Milestones */}
            <section className="flex flex-col gap-10">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <span className="text-primary font-mono text-sm">02.</span>
                Trayectoria Profesional
              </h2>
              <div className="relative ml-4 border-l border-muted space-y-12">
                {timeline.map((item, i) => (
                  <div key={i} className="relative pl-8 group">
                    <span 
                      className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-background transition-all duration-300 group-hover:scale-150 ${
                        item.active ? 'bg-primary' : 'bg-muted-foreground/40 group-hover:bg-primary'
                      }`} 
                    />
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      {item.company && (
                        <span className="text-xs font-bold text-primary mb-1 block">
                          @ {item.company}
                        </span>
                      )}
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 03. Technical Philosophy */}
            <section className="flex flex-col gap-6">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <span className="text-primary font-mono text-sm">03.</span>
                Filosofía Técnica
              </h2>
              <div className="flex flex-col gap-4">
                {philosophy.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-secondary/30"
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 04. Technical Arsenal */}
            <section className="flex flex-col gap-8">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <span className="text-primary font-mono text-sm">04.</span>
                Arsenal Técnico
              </h2>
              <div className="space-y-6">
                {/* Infra */}
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                  <span className="font-mono text-[10px] text-muted-foreground font-bold uppercase tracking-widest w-20">
                    Infra & Redes
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techStack.infra.map((tech) => (
                      <Badge 
                        key={tech} 
                        className="bg-orange-500/10 border-orange-500/20 text-orange-400 hover:bg-orange-500/20 text-[10px] font-bold uppercase tracking-wider"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {/* Frontend */}
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                  <span className="font-mono text-[10px] text-muted-foreground font-bold uppercase tracking-widest w-20">
                    Frontend
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techStack.frontend.map((tech) => (
                      <Badge 
                        key={tech} 
                        className="bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 text-[10px] font-bold uppercase tracking-wider"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {/* Backend */}
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                  <span className="font-mono text-[10px] text-muted-foreground font-bold uppercase tracking-widest w-20">
                    Backend
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techStack.backend.map((tech) => (
                      <Badge 
                        key={tech} 
                        className="bg-green-500/10 border-green-500/20 text-green-400 hover:bg-green-500/20 text-[10px] font-bold uppercase tracking-wider"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="pt-8 border-t border-border">
              <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-border text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-primary/10" />
                <h2 className="text-3xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Disponible para proyectos de infraestructura de red y desarrollo web full-stack.
                </p>
                <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                  <Link href="/contact" className="flex items-center gap-2">
                    Contáctame
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}