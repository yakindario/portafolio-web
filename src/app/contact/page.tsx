import { Metadata } from "next";
import ContactContent from "./contact-content";
import { ContactPageSchema } from "@/components/shema-markup";

export const metadata: Metadata = {
  title: "Contacto | Yakin Dario - Ingeniero Telemático",
  description: "Ponte en contacto conmigo para proyectos de desarrollo web, consultoría DevOps o colaboraciones. Disponible para trabajo freelance y contrataciones.",
  openGraph: {
    title: "Contacto | Yakin Dario - Ingeniero Telemático",
    description: "Ponte en contacto conmigo para proyectos de desarrollo web, consultoría DevOps o colaboraciones.",
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactPageSchema />
      <ContactContent />
    </>
  );
}
