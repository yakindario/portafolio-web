import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { PersonSchema } from "@/components/shema-markup"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://yakindario.com'),
  title: {
    default: "Yakin Dario | Ingeniero Telemático & Desarrollador Web",
    template: "%s | Yakin Dario"
  },
  description: "Portafolio profesional de Yakin Dario. Ingeniero Telemático especializado en DevOps, Desarrollo Full Stack, Next.js, React y Cloud Computing.",
  keywords: ["Desarrollo Web", "Next.js", "React", "DevOps", "Ingeniero Telemático", "Portafolio", "Yakin Dario"],
  authors: [{ name: "Yakin Dario", url: "https://yakindario.com" }],
  creator: "Yakin Dario",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://yakindario.com",
    title: "Yakin Dario | Ingeniero Telemático & Desarrollador Web",
    description: "Portafolio profesional de Yakin Dario. Ingeniero Telemático especializado en DevOps, Desarrollo Full Stack, Next.js, React y Cloud Computing.",
    siteName: "Yakin Dario Portafolio",
    images: [
      {
        url: "/Yakindario.webp", // Asegúrate de tener una imagen og-image.jpg o similar en public/
        width: 1200,
        height: 630,
        alt: "Yakin Dario Portafolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yakin Dario | Ingeniero Telemático & Desarrollador Web",
    description: "Portafolio profesional de Yakin Dario. Ingeniero Telemático especializado en DevOps, Desarrollo Full Stack, Next.js, React y Cloud Computing.",
    creator: "@yakindario",
    images: ["/Yakindario.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <PersonSchema />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}