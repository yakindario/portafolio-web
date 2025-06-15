export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Yakin Dario",
          url: "https://yakindario.com",
          jobTitle: "Ingeniero Telemático",
          knowsAbout: [
            "DevOps", 
            "Desarrollo Full Stack", 
            "Laravel", 
            "React",
            "Next.js", 
            "AWS", 
            "Azure"
          ],
          image: "https://yakindario.com/Yakindario.webp",
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

// Añadir a tu archivo de esquemas o crear uno nuevo

export function AboutPageSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {
            "@type": "Person",
            "name": "Yakin Dario",
            "jobTitle": "Ingeniero Telemático",
            "description": "Ingeniero Telemático especializado en DevOps y desarrollo Full Stack con experiencia en Laravel, React, Next.js, AWS y Azure.",
            "alumniOf": [
              {
                "@type": "CollegeOrUniversity",
                "name": "[Universidad de Gudalajara]",
                "sameAs": "[https://www.udg.mx/]"
              }
            ],
            "knowsAbout": [
              "DevOps", "Laravel", "React", "Next.js", 
              "Docker", "Kubernetes", "AWS", "Azure"
            ],
            "workLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Puerto Vallarta",
                "addressRegion": "Jalisco",
                "addressCountry": "MX"
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
          "name": "Página de contacto de Yakin Dario",
          "description": "Contacta con Yakin Dario para proyectos de desarrollo, consultoría DevOps o colaboraciones profesionales.",
          "mainEntity": {
            "@type": "Person",
            "name": "Yakin Dario",
            "jobTitle": "Ingeniero Telemático | Especialista DevOps | Desarrollador Full Stack",
            "email": "yakindario@gmail.com", // Reemplaza con tu email real
            "url": "https://yakindario.com",
            "sameAs": [
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