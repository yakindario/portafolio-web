import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Terminal, Network } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20">
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
      </section>

      {/* Skills Preview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Especialidades</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Desarrollo</h3>
              <p className="text-muted-foreground mb-4">Larave, React, Next.js, TypeScript, Tailwind CSS</p>
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
              <p className="text-muted-foreground mb-4">Infrestructura, Redes, Nube, AWS , Azure</p>
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
              <p className="text-muted-foreground mb-4">Docker, Kubernetes, GitHub Action</p>
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
          <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
          <p className="text-xl text-muted-foreground mb-8">Estoy disponible para nuevos proyectos y colaboraciones</p>
          <Button asChild size="lg">
            <Link href="/contact">Hablemos</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
