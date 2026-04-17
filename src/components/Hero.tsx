import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]"
            style={{ color: "#1d1d1b" }}
          >
            Conéctate a la velocidad del futuro,{" "}
            <span style={{ color: "#185c88" }}>navega sin límites</span> y sin
            interrupciones.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-zinc-600 max-w-xl">
            Internet de fibra óptica confiable y humano para los hogares y
            negocios de El Pangui, Zamora Chinchipe.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#planes"
              className="rounded-full px-8 py-3.5 font-semibold transition hover:opacity-90 text-center text-white"
              style={{ backgroundColor: "#185c88" }}
            >
              Ver planes
            </a>
            <a
              href="#nosotros"
              className="rounded-full border-2 px-8 py-3.5 font-semibold text-center transition hover:bg-zinc-50"
              style={{ borderColor: "#185c88", color: "#185c88" }}
            >
              Conocer ARANET
            </a>
          </div>
        </div>
        <div className="relative w-full aspect-[1024/384] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/portada_aranet_Mesa-de-trabajo-1-copia-1.webp"
            alt="ARANET - Siempre conectado, siempre rápido"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
