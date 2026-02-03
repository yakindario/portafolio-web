import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BrainCircuit,
  Braces,
  CloudCog,
  Code,
  FlaskConical,
  Gauge,
  Github,
  Linkedin,
  Network,
  Palette,
  ShieldCheck,
  Terminal,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Yakin Dario | Ingeniero Telemático - Especialista en DevOps y Full Stack",
  description: "Yakin Dario, Ingeniero Telemático especializado en DevOps, desarrollo Full Stack con Laravel, React, Next.js y soluciones en la nube AWS y Azure.",
  keywords: [
    "Yakin Dario",
    "Desarrollador Web",
    "Ingeniero Telemático",
    "DevOps",
    "Full Stack Developer",
    "Laravel",
    "React",
    "Next.js",
    "Desarrollo Web Puerto vallarta",
  ],
  openGraph: {
    title: "Yakin Dario | Ingeniero Telemático - Especialista en DevOps y Full Stack",
    description: "Especialista en desarrollo web, DevOps y soluciones en la nube",
    images: [
      {
        url: "https://yakindario.com/Yakindario.webp",
        width: 1200,
        height: 630,
        alt: "Yakin Dario - Ingeniero Telemático",
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
};

function getCategoryIcon(category?: string): LucideIcon {
  const key = category?.toLowerCase() || "";
  if (/devops|cloud/.test(key)) return CloudCog;
  if (/backend|api|server|program/.test(key)) return Braces;
  if (/front|ui|ux/.test(key)) return Palette;
  if (/data|ai|ml/.test(key)) return BrainCircuit;
  if (/sec/.test(key)) return ShieldCheck;
  if (/test|qa|quality/.test(key)) return FlaskConical;
  if (/perf|scal/.test(key)) return Gauge;
  if (/tool|cli/.test(key)) return Terminal;
  return Terminal;
}


export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <>
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Background decorative elements */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,oklch(0.72_0.19_195_/_0.08),transparent_50%),radial-gradient(circle_at_75%_75%,oklch(0.72_0.19_195_/_0.05),transparent_50%)]"
          aria-hidden
        />
        
        {/* Hero Section */}
        <section className="relative pb-20">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Photo with decorative rings - LEFT */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative h-72 w-72 md:h-80 md:w-80">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-primary/15 to-transparent blur-3xl" aria-hidden />
                
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-primary/20" aria-hidden />
                
                {/* Middle ring */}
                <div className="absolute inset-4 rounded-full border border-primary/30" aria-hidden />
                
                {/* Inner ring with gradient */}
                <div className="absolute inset-8 rounded-full border border-primary/40 bg-gradient-to-br from-primary/10 via-transparent to-transparent" aria-hidden />
                
                {/* Photo container */}
                <div className="relative z-10 flex h-full w-full items-center justify-center">
                  <div className="h-52 w-52 md:h-60 md:w-60 overflow-hidden rounded-full border-2 border-primary/20 bg-muted shadow-2xl">
                    <Image
                      src="/Yakindario.webp"
                      alt="Yakin Dario"
                      width={256}
                      height={256}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </div>
                
                {/* Decorative dots */}
                <span className="absolute -left-2 top-16 h-2.5 w-2.5 rounded-full bg-primary/60 shadow-lg shadow-primary/20" aria-hidden />
                <span className="absolute right-0 bottom-8 h-3.5 w-3.5 rounded-full bg-primary/50 shadow-lg shadow-primary/20" aria-hidden />
                <span className="absolute left-1/4 -bottom-4 h-2 w-2 rounded-full bg-muted-foreground/40" aria-hidden />
              </div>
            </div>
            
            {/* Text content - RIGHT */}
            <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Hola, <br />
                  <span className="text-primary">
                    soy Yakin Dario
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl max-w-lg mx-auto lg:mx-0">
                  Ingeniero Telemático especializado en DevOps y Desarrollo Full Stack
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="rounded-full px-6 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                  <Link href="/projects">
                    Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
                  <Link href="/contact">Contactar</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full border border-border bg-secondary/50 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary" asChild>
                  <a
                    href="https://github.com/yakindario"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full border border-border bg-secondary/50 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary" asChild>
                  <a
                    href="https://www.linkedin.com/in/yakindario/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full border border-border bg-secondary/50 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary" asChild>
                  <a
                    href="https://x.com/yakindario"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Specialties Section */}
        <section className="py-20 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Especialidades</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Development Card */}
            <Card className="group relative overflow-hidden rounded-2xl border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="flex h-full flex-col gap-5 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Code className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold">Desarrollo</h3>
                  </div>
                  <Badge className="bg-primary/15 text-primary border-0 text-[10px] font-semibold uppercase tracking-wider">React</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">Laravel</Badge>
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">React</Badge>
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">Next.js</Badge>
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">TypeScript</Badge>
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">Tailwind</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Creación de aplicaciones web modernas y escalables con un enfoque en rendimiento y experiencia de usuario.
                </p>
              </CardContent>
            </Card>

            {/* Networks Card */}
            <Card className="group relative overflow-hidden rounded-2xl border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="flex h-full flex-col gap-5 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                      <Network className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold">Redes</h3>
                  </div>
                  <Badge className="bg-orange-500/15 text-orange-500 border-0 text-[10px] font-semibold uppercase tracking-wider">Networking</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">Infraestructura</Badge>
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">MikroTik</Badge>
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">Cloud</Badge>
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">AWS</Badge>
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">Azure</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Diseño e implementación de infraestructuras de red robustas, seguras y de alta disponibilidad.
                </p>
              </CardContent>
            </Card>

            {/* DevOps Card */}
            <Card className="group relative overflow-hidden rounded-2xl border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="flex h-full flex-col gap-5 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                      <Terminal className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold">DevOps</h3>
                  </div>
                  <Badge className="bg-violet-500/15 text-violet-500 border-0 text-[10px] font-semibold uppercase tracking-wider">DevOps</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">Docker</Badge>
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">K8s</Badge>
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">CI/CD</Badge>
                  <Badge variant="secondary" className="rounded-md bg-secondary/80 text-xs font-medium">Jenkins</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Automatización de flujos de trabajo, integración continua y gestión eficiente de contenedores.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Últimas Publicaciones */}
        <section className="py-20 space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Últimas Publicaciones</h2>
              <p className="text-muted-foreground">
                Pensamientos sobre ingeniería, patrones de diseño y el stack híbrido.
              </p>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Ver todos los posts <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((p) => {
              const Icon = getCategoryIcon(p.category as string | undefined);
              const tags = Array.isArray(p.tags) ? p.tags : [];
              const categoryColors: Record<string, { bg: string; text: string; iconBg: string }> = {
                backend: { bg: "bg-primary/10", text: "text-primary", iconBg: "bg-primary/20" },
                devops: { bg: "bg-violet-500/10", text: "text-violet-400", iconBg: "bg-violet-500/20" },
                networking: { bg: "bg-orange-500/10", text: "text-orange-400", iconBg: "bg-orange-500/20" },
                frontend: { bg: "bg-emerald-500/10", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
                default: { bg: "bg-muted", text: "text-muted-foreground", iconBg: "bg-muted" },
              };
              const category = (p.category as string)?.toLowerCase() || "default";
              const colors = categoryColors[category] || categoryColors.default;
              
              return (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                  <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    {/* Icon header */}
                    <div className={`flex items-center justify-center py-12 ${colors.bg}`}>
                      <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${colors.iconBg}`}>
                        <Icon className={`h-8 w-8 ${colors.text}`} />
                      </div>
                    </div>
                    
                    <CardContent className="flex flex-1 flex-col gap-4 p-6">
                      {/* Meta info */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{p.date || "—"}</span>
                        <span>•</span>
                        <span>5 min de lectura</span>
                      </div>
                      
                      {/* Title & description */}
                      <div className="space-y-2">
                        <h3 className="font-semibold leading-snug transition-colors group-hover:text-primary">
                          {p.title || p.slug}
                        </h3>
                        {p.description && (
                          <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                        )}
                      </div>
                      
                      {/* Tags */}
                      {tags.length > 0 && (
                        <div className="mt-auto flex flex-wrap gap-2 pt-2">
                          {tags.slice(0, 3).map((tag) => (
                            <Badge 
                              key={tag} 
                              variant="outline" 
                              className="rounded-md border-border bg-secondary/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                            >
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <Card className="overflow-hidden rounded-2xl border-border bg-gradient-to-br from-card via-card to-primary/5">
            <CardContent className="flex flex-col items-center gap-6 px-8 py-14 text-center">
              <h2 className="text-3xl font-bold tracking-tight">¿Listo para trabajar juntos?</h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Estoy disponible para nuevos proyectos y colaboraciones
              </p>
              <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                <Link href="/contact">Hablemos</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
