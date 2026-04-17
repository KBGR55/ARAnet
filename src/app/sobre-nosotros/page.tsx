import type { Metadata } from "next";
import { Flag, Eye } from "lucide-react";
import HistoryTimeline from "@/components/HistoryTimeline";

export const metadata: Metadata = {
  title: "Sobre nosotros — ARANET",
  description:
    "Conoce la misión, visión y la historia de ARANET, la empresa de fibra óptica en El Pangui, Zamora Chinchipe.",
};

const founders = [
  { name: "Alexander Sócola", role: "Co-fundador" },
  { name: "Alexander Santos", role: "Co-fundador" },
  { name: "Ronald Torres", role: "Co-fundador" },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: "linear-gradient(135deg, #185c88 0%, #0f3a57 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(#95c11f 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#95c11f" }}
        />
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <span
            className="inline-block px-4 py-1.5 text-xs font-bold rounded-full mb-5"
            style={{ backgroundColor: "#95c11f", color: "#1d1d1b" }}
          >
            Conócenos
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Sobre ARANET
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Fibra óptica, cercanía y compromiso desde El Pangui, Zamora
            Chinchipe.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="text-center md:text-left">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ backgroundColor: "rgba(24,92,136,0.12)" }}
              aria-hidden
            >
              <Flag className="w-8 h-8" style={{ color: "#185c88" }} />
            </div>
            <div
              className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: "#185c88" }}
            >
              01 — Misión
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Conectar con propósito
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              ARANET brinda conectividad estable y segura para las personas y
              negocios de El Pangui ofreciendo un servicio cercano que facilita
              el acceso al mundo digital y mejora la experiencia de navegación
              de cada usuario.
            </p>
          </div>
          <div className="text-center md:text-left md:border-l md:border-zinc-200 md:pl-12">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ backgroundColor: "rgba(149,193,31,0.18)" }}
              aria-hidden
            >
              <Eye className="w-8 h-8" style={{ color: "#95c11f" }} />
            </div>
            <div
              className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: "#95c11f" }}
            >
              02 — Visión
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Un referente regional
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Aspiramos a consolidar un estándar de servicio de internet
              confiable y humano que desde nuestra base en El Pangui expanda de
              forma progresiva su huella tecnológica, convirtiéndose en un
              referente natural de calidad y conectividad inclusiva para toda
              la provincia y la región sur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Los fundadores
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Tres Ingenieros en Electrónica y Telecomunicaciones que
              convirtieron su camaradería universitaria en una visión
              empresarial compartida.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {founders.map((f) => {
              const initials = f.name
                .split(" ")
                .map((n) => n[0])
                .join("");
              return (
                <div
                  key={f.name}
                  className="rounded-2xl border border-zinc-200 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-black"
                    style={{
                      background:
                        "linear-gradient(135deg, #185c88 0%, #0f3a57 100%)",
                    }}
                    aria-hidden
                  >
                    {initials}
                  </div>
                  <h3 className="font-bold text-lg">{f.name}</h3>
                  <p
                    className="text-sm font-semibold mt-1"
                    style={{ color: "#95c11f" }}
                  >
                    {f.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Nuestra historia
            </h2>
            <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
              De una conversación entre amigos a iluminar la red de fibra
              óptica en El Pangui.
            </p>
          </div>
          <HistoryTimeline />
        </div>
      </section>

      <section
        className="py-20 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: "#1d1d1b" }}
      >
        <div
          aria-hidden
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#185c88" }}
        />
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#95c11f" }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <div className="text-6xl font-black leading-none opacity-20 mb-4">
            &ldquo;
          </div>
          <p className="text-2xl md:text-4xl font-black leading-tight">
            <span style={{ color: "#95c11f" }}>Navega sin límites.</span>
            <br />
            <span>Tecnología que une,</span>{" "}
            <span style={{ color: "#185c88" }}>Internet que conecta.</span>
          </p>
          <p className="mt-8 text-white/60 text-sm tracking-widest uppercase">
            Nuestras promesas de valor · Desde el 11 de abril de 2024
          </p>
        </div>
      </section>
    </>
  );
}
