import Link from "next/link";

const plans = [
  {
    name: "Básico",
    speed: "150",
    unit: "MB",
    features: [
      "Ideal para hogares pequeños",
      "Navegación fluida y estable",
      "Soporte técnico local",
    ],
  },
  {
    name: "Home",
    speed: "200",
    unit: "MB",
    features: [
      "Perfecto para streaming y trabajo remoto",
      "Wi-Fi de alto rendimiento",
      "Soporte prioritario",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    speed: "300",
    unit: "MB",
    features: [
      "Máxima velocidad para toda la familia",
      "Ideal para gamers y creadores",
      "Atención personalizada",
    ],
  },
];

const docs = [
  { label: "Guía de Control Parental", href: "#" },
  { label: "Parámetros de Calidad del Servicio", href: "#" },
  { label: "Formulario de Verificación Adultos Mayores", href: "#" },
  { label: "Reglamento de prestación de servicios", href: "#" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white text-[#1d1d1b]">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/85 border-b border-zinc-200">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span
              aria-hidden
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white font-black text-lg"
              style={{ backgroundColor: "#185c88" }}
            >
              A
            </span>
            <span className="font-extrabold text-xl tracking-wide">
              ARA<span style={{ color: "#95c11f" }}>NET</span>
            </span>
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li><a href="#inicio" className="hover:text-[#185c88]">Inicio</a></li>
            <li><a href="#planes" className="hover:text-[#185c88]">Planes</a></li>
            <li><a href="#nosotros" className="hover:text-[#185c88]">Nosotros</a></li>
            <li><a href="#historia" className="hover:text-[#185c88]">Historia</a></li>
            <li><a href="#contacto" className="hover:text-[#185c88]">Contacto</a></li>
          </ul>
          <a
            href="https://wa.me/+593980992866"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex rounded-full text-white px-5 py-2 text-sm font-semibold transition hover:opacity-90"
            style={{ backgroundColor: "#95c11f" }}
          >
            WhatsApp
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, #185c88 0%, #1d1d1b 60%, #185c88 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#95c11f" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#ffffff" }}
        />
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-40 text-white">
          <span
            className="inline-block px-4 py-1.5 text-xs font-bold rounded-full mb-6"
            style={{ backgroundColor: "#95c11f", color: "#1d1d1b" }}
          >
            Tecnología que une, Internet que conecta
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-3xl">
            Conéctate a la velocidad del futuro,{" "}
            <span style={{ color: "#95c11f" }}>navega sin límites</span> y sin
            interrupciones.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Internet de fibra óptica confiable y humano para los hogares y
            negocios de El Pangui, Zamora Chinchipe.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#planes"
              className="rounded-full px-8 py-3.5 font-semibold transition hover:opacity-90 text-center"
              style={{ backgroundColor: "#95c11f", color: "#1d1d1b" }}
            >
              Ver planes
            </a>
            <a
              href="#nosotros"
              className="rounded-full border-2 border-white/40 px-8 py-3.5 font-semibold hover:bg-white/10 transition text-center"
            >
              Conocer ARANET
            </a>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "#185c88" }}
            >
              Nuestros planes
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
              Planes diseñados para ti
            </h2>
            <p className="mt-4 text-zinc-600">
              Elige la velocidad perfecta para tu hogar o negocio.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-3xl p-8 border-2 transition flex flex-col ${
                  p.highlight
                    ? "text-white shadow-2xl scale-[1.02]"
                    : "bg-white border-zinc-200 hover:border-[#185c88]"
                }`}
                style={
                  p.highlight
                    ? { backgroundColor: "#185c88", borderColor: "#185c88" }
                    : undefined
                }
              >
                {p.highlight && (
                  <span
                    className="self-start inline-block px-3 py-1 text-xs font-bold rounded-full mb-4"
                    style={{ backgroundColor: "#95c11f", color: "#1d1d1b" }}
                  >
                    Más popular
                  </span>
                )}
                <h3
                  className="font-bold text-2xl"
                  style={{ color: p.highlight ? "#ffffff" : "#1d1d1b" }}
                >
                  {p.name}
                </h3>
                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className="text-5xl font-black"
                    style={{ color: p.highlight ? "#95c11f" : "#185c88" }}
                  >
                    {p.speed}
                  </span>
                  <span
                    className={`text-xl font-bold ${
                      p.highlight ? "text-white" : "text-zinc-700"
                    }`}
                  >
                    {p.unit}
                  </span>
                </div>
                <ul
                  className={`mt-6 space-y-3 text-sm flex-1 ${
                    p.highlight ? "text-white/90" : "text-zinc-600"
                  }`}
                >
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span style={{ color: "#95c11f" }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/+593980992866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block text-center rounded-full py-3 font-semibold transition ${
                    p.highlight
                      ? "bg-white hover:bg-zinc-100"
                      : "text-white hover:opacity-90"
                  }`}
                  style={
                    p.highlight
                      ? { color: "#185c88" }
                      : { backgroundColor: "#185c88" }
                  }
                >
                  Descubrir
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section id="nosotros" className="py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "#95c11f" }}
            >
              Quiénes somos
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
              Sobre ARANET
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white p-8 border border-zinc-200 shadow-sm">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-white text-2xl mb-4"
                style={{ backgroundColor: "#185c88" }}
                aria-hidden
              >
                🎯
              </div>
              <h3 className="text-2xl font-bold" style={{ color: "#185c88" }}>
                Misión
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                ARANET brinda conectividad estable y segura para las personas y
                negocios de El Pangui ofreciendo un servicio cercano que
                facilita el acceso al mundo digital y mejora la experiencia de
                navegación de cada usuario.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 border border-zinc-200 shadow-sm">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-white text-2xl mb-4"
                style={{ backgroundColor: "#95c11f" }}
                aria-hidden
              >
                🌱
              </div>
              <h3 className="text-2xl font-bold" style={{ color: "#95c11f" }}>
                Visión
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Aspiramos a consolidar un estándar de servicio de internet
                confiable y humano que desde nuestra base en El Pangui expanda
                de forma progresiva su huella tecnológica, convirtiéndose en un
                referente natural de calidad y conectividad inclusiva para toda
                la provincia y la región sur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESEÑA HISTÓRICA */}
      <section id="historia" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <p
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "#185c88" }}
            >
              Nuestra historia
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
              Reseña histórica
            </h2>
          </div>
          <div className="mt-12 space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Los orígenes de ARANET se remontan a las aulas universitarias,
              ese espacio donde convergió la vocación y la amistad de{" "}
              <strong>Alexander Sócola</strong>,{" "}
              <strong>Alexander Santos</strong> y{" "}
              <strong>Ronald Torres</strong>, tres Ingenieros en Electrónica y
              Telecomunicaciones que, impulsados por el deseo de trascender la
              teoría académica y plasmar sus conocimientos en una solución
              tangible, decidieron transformar su camaradería en una visión
              empresarial compartida.
            </p>
            <p>
              Lo que comenzó como una serie de conversaciones recurrentes y
              reuniones informales sobre la posibilidad de emprender, maduró
              hasta convertirse en un plan estratégico. Tras analizar diversas
              posibilidades geográficas, identificaron en el cantón{" "}
              <strong>El Pangui, provincia de Zamora Chinchipe</strong>, el
              escenario ideal. La elección no fue aleatoria; respondía a una
              lectura visionaria del auge minero y la proyección de crecimiento
              futuro que presentaba la zona.
            </p>
            <p>
              La materialización del proyecto inició en{" "}
              <strong>marzo de 2024</strong>, una etapa caracterizada por el
              arduo despliegue de la infraestructura de fibra óptica; un
              periodo donde el entusiasmo técnico convivía con la
              incertidumbre, el nerviosismo y las dudas propias de quienes
              arriesgan para construir algo nuevo. Sin embargo, la convicción
              de los socios fue más fuerte que los desafíos iniciales.
            </p>
            <p>
              Todo ese esfuerzo cobró sentido el{" "}
              <strong>11 de abril de 2024</strong>, fecha que marca el inicio
              oficial de operaciones. Aquel día, la visión se hizo servicio y
              ARANET iluminó su red por primera vez. Desde entonces, se ha
              trabajado incansablemente bajo una filosofía de mejora continua,
              honrando sus promesas de valor:{" "}
              <em style={{ color: "#185c88" }}>&quot;Navega sin límites&quot;</em> y{" "}
              <em style={{ color: "#95c11f" }}>
                &quot;Tecnología que une, Internet que conecta&quot;
              </em>
              , consolidándose día a día como un referente de estabilidad y
              confianza para la comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* VISÍTANOS */}
      <section
        id="contacto"
        className="py-24"
        style={{ backgroundColor: "#1d1d1b" }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "#95c11f" }}
            >
              Visítanos
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
              Estamos en El Pangui
            </h2>
            <div className="mt-6 space-y-4 text-white/80">
              <p className="text-lg">
                <strong className="text-white">Dirección:</strong>
                <br />
                Benigno Cruz entre Cordillera del Cóndor y Loja.
              </p>
              <p className="text-lg">
                <strong className="text-white">Ubicación:</strong>
                <br />
                El Pangui · Zamora Chinchipe · Ecuador
              </p>
              <p className="text-lg">
                <strong className="text-white">WhatsApp / Celular:</strong>
                <br />
                <a
                  href="https://wa.me/+593980992866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: "#95c11f" }}
                >
                  098 099 2866
                </a>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/+593980992866"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#95c11f", color: "#1d1d1b" }}
              >
                Chatear por WhatsApp
              </a>
              <a
                href="https://www.facebook.com/ARAnetPangui"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/aranet_pangui/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl aspect-[4/3]">
            <iframe
              title="Ubicación ARANET - El Pangui"
              src="https://www.google.com/maps?q=El+Pangui+Zamora+Chinchipe+Ecuador&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white/80">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white font-black text-lg"
                style={{ backgroundColor: "#185c88" }}
              >
                A
              </span>
              <span className="font-extrabold text-xl">
                ARA<span style={{ color: "#95c11f" }}>NET</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm">
              Tecnología que une, Internet que conecta. Fibra óptica para El
              Pangui y su gente.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/ARAnetPangui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition"
                style={{ backgroundColor: "#185c88" }}
              >
                f
              </a>
              <a
                href="https://www.instagram.com/aranet_pangui/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition"
                style={{ backgroundColor: "#185c88" }}
              >
                ig
              </a>
              <a
                href="https://wa.me/+593980992866"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#1d1d1b] font-bold hover:opacity-80 transition"
                style={{ backgroundColor: "#95c11f" }}
              >
                wa
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Información</h4>
            <ul className="space-y-2 text-sm">
              {docs.map((d) => (
                <li key={d.label}>
                  <a href={d.href} className="hover:text-[#95c11f]">
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>El Pangui, Zamora Chinchipe</li>
              <li>Benigno Cruz entre Cordillera del Cóndor y Loja</li>
              <li>
                <a
                  href="https://wa.me/+593980992866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#95c11f]"
                >
                  098 099 2866
                </a>
              </li>
              <li>
                <a
                  href="https://aranet.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#95c11f]"
                >
                  aranet.tech
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-white/60 text-center">
            © {new Date().getFullYear()} ARANET · Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
