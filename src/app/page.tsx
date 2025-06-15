import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Terminal,
  Network,
  Github,
  Linkedin, 
  Twitter
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { PersonSchema } from "@/components/shema-markup"

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
}


export default function HomePage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-2 items-center">
              {/* Foto de perfil - Lado izquierdo */}
              <div className="flex justify-center lg:justify-start order-1 lg:order-1">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-4 border-primary/10 shadow-2xl">
                    {/* Placeholder para foto de perfil */}
                      <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                      <img
                        src="/Yakindario.webp"
                        alt="Yakin Dario"
                        width={288}
                        height={288}
                        className="object-cover w-full h-full rounded-full"
                      />
                      </div>
                  </div>
                  {/* Decoración */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/60 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>

              {/* Contenido de texto - Lado derecho */}
              <div className="text-center lg:text-left order-2 lg:order-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Hola,<br></br> soy Yakin Dario
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                  Ingeniero Telemático especializado en DevOps y Desarrollo Full
                  Stack
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                  <Button asChild size="lg">
                    <Link href="/projects">
                      Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Contactar</Link>
                  </Button>
                </div>

                {/* Redes Sociales */}
                <div className="flex gap-4 justify-center lg:justify-start">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    asChild
                  >
                    <a
                      href="https://github.com/yakindario"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/yakindario/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    asChild
                  >
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
          </div>
        </section>
        {/* <section className="text-center py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Hola, soy Yakin Dario
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Ingeniero Telemático especializado en DevOps y Desarrollo Full Stack
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/projects">
                  Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#">Contactar</Link>
              </Button>
            </div>
          </div>
        </section> */}

        {/* Skills Preview */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Especialidades</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Desarrollo</h3>
                <p className="text-muted-foreground mb-4">
                  Laravel, React, Next.js, TypeScript, Tailwind CSS
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Network className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Redes </h3>
                <p className="text-muted-foreground mb-4">
                  Infraestructura, Redes, Nube, AWS, Azure
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Infrastructura</Badge>
                  <Badge variant="secondary">Redes</Badge>
                  <Badge variant="secondary">Nube</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Azure</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Terminal className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">DevOps</h3>
                <p className="text-muted-foreground mb-4">
                  Docker, Kubernetes, GitHub Action
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Github Action</Badge>
                  <Badge variant="secondary">Jenkins</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Estoy disponible para nuevos proyectos y colaboraciones
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Hablemos</Link>
            </Button>
          </div>
        </section>
      </div>
      <PersonSchema />
    </>
  );
}
