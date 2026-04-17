export default function Contact() {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Estamos en El Pangui
          </h2>
          <div className="mt-6 space-y-4 text-zinc-600">
            <p className="text-lg">
              <strong className="text-zinc-900">Dirección:</strong>
              <br />
              Benigno Cruz entre Cordillera del Cóndor y Loja.
            </p>
            <p className="text-lg">
              <strong className="text-zinc-900">Ubicación:</strong>
              <br />
              El Pangui · Zamora Chinchipe · Ecuador
            </p>
            <p className="text-lg">
              <strong className="text-zinc-900">WhatsApp / Celular:</strong>
              <br />
              <a
                href="https://wa.me/+593980992866"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-semibold"
                style={{ color: "#185c88" }}
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
              className="rounded-full px-6 py-3 font-semibold transition hover:opacity-90 text-white"
              style={{ backgroundColor: "#95c11f" }}
            >
              Chatear por WhatsApp
            </a>
            <a
              href="https://www.facebook.com/ARAnetPangui"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 px-6 py-3 font-semibold hover:bg-zinc-50 transition"
              style={{ borderColor: "#185c88", color: "#185c88" }}
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/aranet_pangui/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 px-6 py-3 font-semibold hover:bg-zinc-50 transition"
              style={{ borderColor: "#185c88", color: "#185c88" }}
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-lg aspect-[4/3]">
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
  );
}
