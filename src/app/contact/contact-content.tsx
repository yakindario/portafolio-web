"use client";

import { useState } from "react";
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
  Copy,
  Check,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  FileDown,
} from "lucide-react";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yakindario@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      const response = await fetch("https://formsubmit.co/ajax/yakindario@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: fullName || "Visitante del Portafolio",
          email: formData.email,
          _subject: `[Portafolio Web] ${formData.subject || "Nuevo mensaje de contacto"}`,
          message: formData.message,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "No se pudo enviar el mensaje");
      }
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Ocurrió un error al enviar el formulario.");
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Contacto</h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            ¿Tienes un proyecto en mente, una vacante o una propuesta? ¡Escríbeme y hablemos!
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y te responderé directamente a tu correo electrónico.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {status === "success" ? (
                <div className="space-y-6 py-6 text-center animate-in fade-in duration-300">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">¡Mensaje enviado con éxito!</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                      Muchas gracias por escribirme. He recibido tu mensaje en <strong>yakindario@gmail.com</strong> y te responderé lo antes posible.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setStatus("idle")}
                    className="rounded-full"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {status === "error" && (
                    <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-destructive flex items-start gap-3 text-sm">
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">No se pudo enviar el mensaje</p>
                        <p className="text-xs opacity-90 mt-1">
                          {errorMessage || "Intenta nuevamente o escríbeme directamente a yakindario@gmail.com."}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre *</Label>
                      <Input
                        id="firstName"
                        placeholder="Tu nombre"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={status === "loading"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input
                        id="lastName"
                        placeholder="Tu apellido"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={status === "loading"}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      placeholder="¿De qué trata tu proyecto o propuesta?"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntame sobre tu proyecto, requerimientos o vacante..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === "loading"}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full shadow-md shadow-primary/20"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando mensaje...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info, Social Links & Direct Actions */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Información Directa</CardTitle>
                <CardDescription>
                  Si prefieres escribirme directamente sin usar el formulario:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl border border-border bg-secondary/30">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground font-medium">Correo Electrónico</p>
                      <a
                        href="mailto:yakindario@gmail.com"
                        className="text-sm font-semibold hover:text-primary transition-colors truncate block"
                      >
                        yakindario@gmail.com
                      </a>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyEmail}
                    className="shrink-0 gap-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs text-primary font-semibold">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span className="text-xs">Copiar</span>
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-secondary/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Ubicación</p>
                    <p className="text-sm font-semibold">Puerto Vallarta, Jalisco, México</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    className="w-full gap-2 border border-border hover:border-primary/40"
                    asChild
                  >
                    <a
                      href="https://cdn.yakindario.me/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileDown className="h-4 w-4 text-primary" />
                      Descargar Currículum (PDF)
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Perfiles Profesionales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" className="gap-2 h-11" asChild>
                    <a
                      href="https://github.com/yakindario"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2 h-11" asChild>
                    <a
                      href="https://www.linkedin.com/in/yakindario/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2 h-11" asChild>
                    <a
                      href="https://x.com/yakindario"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                      <span>Twitter / X</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Disponibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Estado actual:</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Disponible para nuevos retos
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tiempo de respuesta:</span>
                    <span className="font-medium text-foreground">&lt; 24 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Zona horaria:</span>
                    <span className="font-medium text-foreground">GMT-6 (Hora Central México)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
