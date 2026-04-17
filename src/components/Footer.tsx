function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5.01-4.74.07-1.07.05-1.65.22-2.04.37-.51.2-.88.44-1.26.82-.38.38-.62.75-.82 1.26-.15.39-.32.97-.37 2.04C2.71 8.5 2.7 8.86 2.7 12s.01 3.5.07 4.74c.05 1.07.22 1.65.37 2.04.2.51.44.88.82 1.26.38.38.75.62 1.26.82.39.15.97.32 2.04.37C8.5 21.29 8.86 21.3 12 21.3s3.5-.01 4.74-.07c1.07-.05 1.65-.22 2.04-.37.51-.2.88-.44 1.26-.82.38-.38.62-.75.82-1.26.15-.39.32-.97.37-2.04.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.22-1.65-.37-2.04a3.4 3.4 0 0 0-.82-1.26 3.4 3.4 0 0 0-1.26-.82c-.39-.15-.97-.32-2.04-.37C15.5 4.01 15.14 4 12 4zm0 3.05A4.95 4.95 0 1 1 7.05 12 4.95 4.95 0 0 1 12 7.05zm0 8.16A3.21 3.21 0 1 0 8.79 12 3.21 3.21 0 0 0 12 15.21zm5.14-8.37a1.16 1.16 0 1 1-1.16-1.15 1.16 1.16 0 0 1 1.16 1.15z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12 2C6.48 2 2 6.48 2 12a10 10 0 0 0 1.35 5L2 22l5.12-1.34A10 10 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.04.8.81-2.96-.2-.31A8.3 8.3 0 0 1 3.7 12C3.7 7.41 7.41 3.7 12 3.7c4.59 0 8.3 3.71 8.3 8.3 0 4.59-3.71 8.3-8.3 8.3z" />
    </svg>
  );
}

const docs = [
  {
    label: "Guía de Control Parental",
    href: "/info/Guia-control-parental-Arcotel-1-1.pdf",
  },
  {
    label: "Parámetros de Calidad del Servicio",
    href: "/info/Parametros-de-Calidad-arcotel.pdf",
  },
  {
    label: "Formulario de Verificación Adultos Mayores",
    href: "/info/FormularioVerificacion-adultos-mayores-aranet.pdf",
  },
  {
    label: "Reglamento de prestación de servicios",
    href: "/info/reglamento-de-prestacion-servicios-CONATEL.pdf",
  },
];

export default function Footer() {
  return (
    <footer className="text-white/80" style={{ backgroundColor: "#1d1d1b" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <span className="font-extrabold text-3xl tracking-wide text-white">
            ARAnet
          </span>
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
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
              style={{ backgroundColor: "#185c88" }}
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/aranet_pangui/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
              style={{ backgroundColor: "#185c88" }}
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/+593980992866"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#1d1d1b] hover:opacity-80 transition"
              style={{ backgroundColor: "#95c11f" }}
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Información</h4>
          <ul className="space-y-2 text-sm">
            {docs.map((d) => (
              <li key={d.label}>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#95c11f]"
                >
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
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-white/60 text-center">
          © {new Date().getFullYear()} ARANET · Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
