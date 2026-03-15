import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal, ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
      {/* Decorative terminal icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Terminal className="h-8 w-8" />
      </div>

      {/* Error code */}
      <h1 className="font-mono text-8xl font-bold tracking-tighter text-foreground sm:text-9xl">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-xl font-medium text-foreground">
        Página no encontrada
      </p>
      <p className="mt-2 max-w-md text-muted-foreground">
        Lo sentimos, la página que buscas no existe o fue movida a otra ubicación.
      </p>

      {/* Terminal-style hint */}
      <div className="mt-8 rounded-lg border border-border bg-muted/50 px-6 py-3 font-mono text-sm text-muted-foreground">
        <span className="text-primary">$</span> curl -I yakindario.com/...
        <br />
        <span className="text-destructive">HTTP/1.1 404 Not Found</span>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="default" size="lg">
          <Link href="/" className="inline-flex items-center gap-2">
            <Home className="h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/blog" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Ir al blog
          </Link>
        </Button>
      </div>
    </div>
  )
}
