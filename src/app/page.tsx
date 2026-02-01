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
}
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
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.10),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_30%)]"
          aria-hidden
        />
        <section className="relative overflow-hidden rounded-3xl border border-primary/10 bg-background/40 px-6 py-14 shadow-2xl backdrop-blur-sm lg:px-12 lg:py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" aria-hidden />
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 space-y-6 text-center lg:order-2 lg:text-left">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Hola, <br />
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    soy Yakin Dario
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  Ingeniero Telemático especializado en DevOps y Desarrollo Full Stack
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
                <Button asChild size="lg">
                  <Link href="/projects">
                    Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contactar</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-3 sm:justify-start">
                <Button variant="outline" size="icon" className="rounded-full border-primary/40 bg-primary/5 text-primary hover:bg-primary/10" asChild>
                  <a
                    href="https://github.com/yakindario"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/40 bg-primary/5 text-primary hover:bg-primary/10" asChild>
                  <a
                    href="https://www.linkedin.com/in/yakindario/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/40 bg-primary/5 text-primary hover:bg-primary/10" asChild>
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
            <div className="order-1 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative h-72 w-72 md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 via-primary/20 to-transparent blur-3xl opacity-70" aria-hidden />
              <div className="absolute inset-6 rounded-full border border-primary/20" aria-hidden />
              <div className="absolute inset-3 rounded-full border border-primary/30" aria-hidden />
              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border border-primary/10 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent shadow-2xl">
                <div className="h-56 w-56 md:h-64 md:w-64 overflow-hidden rounded-full bg-muted">
                  <Image
                    src="/Yakindario.webp"
                    alt="Yakin Dario"
                    width={256}
                    height={256}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <span className="absolute -left-3 top-10 h-3 w-3 rounded-full bg-primary/70" aria-hidden />
              <span className="absolute right-4 -bottom-4 h-4 w-4 rounded-full bg-primary/60" aria-hidden />
            </div>
          </div>
            </div>
          </section>
        <section className="mt-20 space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Especialidades</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-secondary text-left shadow-sm transition hover:border-primary/30">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Code className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold">Desarrollo</h3>
                </div>
                <p className="text-muted-foreground">
                  Laravel, React, Next.js, TypeScript, Tailwind CSS
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-left shadow-sm transition hover:border-primary/30">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Network className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold">Redes</h3>
                </div>
                <p className="text-muted-foreground">
                  Infraestructura, Redes, Nube, AWS, Azure
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <Badge variant="secondary">Infraestructura</Badge>
                  <Badge variant="secondary">Redes</Badge>
                  <Badge variant="secondary">Nube</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Azure</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-left shadow-sm transition hover:border-primary/30">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Terminal className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold">DevOps</h3>
                </div>
                <p className="text-muted-foreground">
                  Docker, Kubernetes, GitHub Action
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Github Action</Badge>
                  <Badge variant="secondary">Jenkins</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16">
          <Card className="rounded-2xl border bg-secondary">
            <CardContent className="flex flex-col items-center gap-4 px-6 py-10 text-center sm:px-10">
              <h2 className="text-3xl font-bold">¿Listo para trabajar juntos?</h2>
              <p className="text-lg text-muted-foreground">
                Estoy disponible para nuevos proyectos y colaboraciones
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Hablemos</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mt-20 space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold sm:text-4xl">Últimos posts</h2>
              <p className="text-muted-foreground">
                Pensamientos sobre ingeniería, patrones de diseño y el stack híbrido.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((p) => {
              const Icon = getCategoryIcon(p.category as string | undefined);
              const tags = Array.isArray(p.tags) ? p.tags : [];
              return (
                <Card key={p.slug} className="flex h-full flex-col justify-between rounded-2xl border bg-secondary p-6 transition hover:border-primary/30">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-center rounded-lg bg-secondary/60 p-4">
                      <div className="flex aspect-video w-full items-center justify-center rounded-md bg-secondary/70">
                        <Icon className="h-10 w-10 text-muted-foreground/60" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Link
                        href={`/blog/${p.slug}`}
                        className="text-lg font-semibold hover:underline"
                      >
                        {p.title || p.slug}
                      </Link>
                      {p.description ? (
                        <p className="text-sm text-muted-foreground">{p.description}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{p.date || "—"}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${p.slug}`}>Leer</Link>
                      </Button>
                    </div>
                    {tags.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="outline" className="border-border/60 bg-secondary/80 px-2 py-1 text-[11px] font-medium">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
