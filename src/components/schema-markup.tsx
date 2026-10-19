export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Yakin Dario",
          url: "https://yakindario.me",
          jobTitle: "Ingeniero Telemático",
          knowsAbout: [
            "DevOps",
            "Desarrollo Full Stack",
            "Laravel",
            "React",
            "Next.js",
            "AWS",
            "Azure",
            "Docker",
            "Kubernetes",
            "Redes y Telecomunicaciones"
          ],
          image: "https://yakindario.me/Yakindario.webp",
          sameAs: [
            "https://github.com/yakindario",
            "https://www.linkedin.com/in/yakindario/",
            "https://x.com/yakindario"
          ]
        })
      }}
    />
  );
}

export function AboutPageSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: "Yakin Dario",
            jobTitle: "Ingeniero Telemático",
            description: "Ingeniero Telemático especializado en DevOps y desarrollo Full Stack con experiencia en Laravel, React, Next.js, AWS y Azure.",
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "Universidad de Guadalajara",
                sameAs: "https://www.udg.mx/"
              }
            ],
            knowsAbout: [
              "DevOps",
              "Laravel",
              "React",
              "Next.js",
              "Docker",
              "Kubernetes",
              "AWS",
              "Azure",
              "Infraestructura de Redes",
              "MikroTik",
              "Sistemas CCTV"
            ],
            workLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Puerto Vallarta",
                addressRegion: "Jalisco",
                addressCountry: "MX"
              }
            }
          }
        })
      }}
    />
  );
}

export function ContactPageSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Página de contacto de Yakin Dario",
          description: "Contacta con Yakin Dario para proyectos de desarrollo, consultoría DevOps o colaboraciones profesionales.",
          mainEntity: {
            "@type": "Person",
            name: "Yakin Dario",
            jobTitle: "Ingeniero Telemático | Especialista DevOps | Desarrollador Full Stack",
            email: "yakindario@gmail.com",
            url: "https://yakindario.me",
            sameAs: [
              "https://github.com/yakindario",
              "https://www.linkedin.com/in/yakindario/",
              "https://x.com/yakindario"
            ]
          }
        })
      }}
    />
  );
}

interface BlogPostSchemaProps {
  title: string;
  description?: string;
  date: string;
  slug: string;
  image?: string;
  category?: string;
  tags?: string[];
}

export function BlogPostSchema({
  title,
  description,
  date,
  slug,
  image,
  category,
  tags = [],
}: BlogPostSchemaProps) {
  const postUrl = `https://yakindario.me/blog/${slug}`;
  const imageUrl = image || "https://yakindario.me/Yakindario.webp";

  let isoDate: string | undefined;
  if (date) {
    try {
      const parsed = new Date(date);
      isoDate = isNaN(parsed.getTime()) ? date : parsed.toISOString();
    } catch {
      isoDate = date;
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: title,
          description: description || `Artículo técnico sobre ${title}`,
          image: [imageUrl],
          datePublished: isoDate,
          dateModified: isoDate,
          inLanguage: "es-ES",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": postUrl,
          },
          author: {
            "@type": "Person",
            name: "Yakin Dario",
            url: "https://yakindario.me",
            jobTitle: "Ingeniero Telemático",
            sameAs: [
              "https://github.com/yakindario",
              "https://www.linkedin.com/in/yakindario/",
              "https://x.com/yakindario",
            ],
          },
          publisher: {
            "@type": "Person",
            name: "Yakin Dario",
            url: "https://yakindario.me",
            image: "https://yakindario.me/Yakindario.webp",
          },
          articleSection: category || "Tecnología",
          keywords: tags.length > 0 ? tags.join(", ") : undefined,
        }),
      }}
    />
  );
}

