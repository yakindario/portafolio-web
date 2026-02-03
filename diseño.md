4. Requerimientos de Diseño Visual y Experiencia de Usuario (UI/UX)
Esta sección define el "Look & Feel" de la plataforma para proyectar una imagen profesional, moderna y técnica.

4.1. Identidad Visual (Look & Feel)
Concepto Estético: "Ingeniería Minimalista Nocturna". Estética limpia y técnica, con jerarquía clara, alto contraste y profundidad sutil.

Paleta de Colores (Design Tokens):

Base (Dark-First): Fondo principal azul marino profundo. Evitar negro absoluto. Superficies en tonos oscuros con variación leve para dar capas (cards/sections).

Acento (Primary Color): Púrpura como color principal de acción (botones, enlaces activos). Permitir un degradado sutil primary -> primary/60 en títulos destacados para replicar el brillo de la referencia.

Texto: Blanco suave para títulos, gris azulado para texto secundario. Usar muted-foreground para descripciones.

Bordes: Líneas finas y tenues (border-primary/10 o border-muted) para delimitar tarjetas sin sombras pesadas.

4.2. Tipografía y Jerarquía
Fuentes (Typography):

Títulos y UI: Inter o Geist Sans.

Código y Terminal: JetBrains Mono o Fira Code.

Jerarquía: Títulos grandes (text-4xl a text-6xl), subtítulos legibles (text-lg a text-xl), meta en text-xs/text-sm.

Espaciado: Secciones amplias con padding vertical generoso y gaps consistentes (py-16/20, gap-6/8).

4.3. Personalización de Componentes (shadcn/ui)
Tarjetas (Cards):

Estilo oscuro con fondo secondary, borde sutil y radio amplio (rounded-2xl). 
Hover: leve realce del borde (hover:border-primary/30) y elevación mínima.

Badges (Etiquetas):

Chips pequeños con fondo secondary y borde sutil. Tipografía compacta.

Botones (Buttons):

Primario sólido con acento púrpura, outline para secundario. Icon buttons redondeados con borde primary/40 y fondo primary/5.

4.4. Diseño de Layout y Estructura
Hero Section (Inicio):

Layout en dos columnas: izquierda foto/halo; derecha título, subtítulo, CTAs y redes sociales.
Foto con marco circular concéntrico y puntos decorativos; halo suave con degradado púrpura.
Fondo con textura sutil (radial/ruido) y tarjeta envolvente para el hero.

Sección Especialidades:

Título centrado.
Grid de 3 columnas con cards uniformes.
Cada card: icono con acento, título, descripción y chips de tecnologías.

Recent Writings:

Encabezado a la izquierda y link “View all posts” a la derecha.
Grid de 3 cards con placeholder de icono temático, meta (fecha/lectura), título, descripción y tags al pie.

Navegación:

Sticky con blur, fondo semi-transparente, links discretos y CTA “Get in Touch” destacado.

4.5. Feedback Visual e Interactividad
Transiciones: hover suaves (duration-200, ease-in-out).
Focus: anillos sutiles con ring primary/30.
Skeletons: placeholders de carga para cards del blog si aplica.