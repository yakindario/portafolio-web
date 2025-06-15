"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import {ContactPageSchema} from "@/components/shema-markup";



export default function ContactPage() {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold">Contacto</h1>
          <p className="text-xl text-muted-foreground">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form (disabled) */}
          <Card>
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
              <CardDescription>
                El formulario está temporalmente deshabilitado. Puedes contactarme
                directamente por correo o redes sociales.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="Tu nombre" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" placeholder="Tu apellido" disabled />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="¿De qué quieres hablar?" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="Cuéntame sobre tu proyecto..." rows={5} disabled />
                </div>
                <Button className="w-full" disabled>
                  Formulario deshabilitado
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info, Social Links & Availability */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:yakindario@gmail.com"
                    className="text-muted-foreground hover:underline"
                  >
                    yakindario@gmail.com
                  </a>
                </div>
                {/* <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href="tel:+523221234567"
                    className="text-muted-foreground hover:underline"
                  >
                    +52 322 123 4567
                  </a>
                </div> */}
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    Puerto Vallarta, Jalisco (MX)
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Redes Sociales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/yakindario"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.linkedin.com/in/yakindario/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://twitter.com/yakindario"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Disponibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Estado:</span>
                    <span className="text-green-600 font-medium">Disponible para proyectos</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tiempo de respuesta:</span>
                    <span className="text-muted-foreground">24–48 h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zona horaria:</span>
                    <span className="text-muted-foreground">GMT-6 (México)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <ContactPageSchema />
   </>               
  );
}
