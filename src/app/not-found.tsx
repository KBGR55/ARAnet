import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description:
    "La página que buscas no existe o fue movida. Vuelve al inicio de ARANET.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center px-4 py-20 sm:py-28">
      <div className="max-w-xl w-full text-center">
        <p
          className="text-sm font-semibold tracking-widest uppercase"
          style={{ color: "#95c11f" }}
        >
          Error 404
        </p>
        <h1
          className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight"
          style={{ color: "#185c88" }}
        >
          Página no encontrada
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[#1d1d1b]/70">
          La dirección que ingresaste no existe o fue movida. Te invitamos a
          volver al inicio o conocer más sobre ARANET.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: "#185c88" }}
          >
            Volver al inicio
          </Link>
          <Link
            href="/sobre-nosotros"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition hover:opacity-90"
            style={{
              backgroundColor: "#95c11f",
              color: "#1d1d1b",
            }}
          >
            Sobre nosotros
          </Link>
        </div>
      </div>
    </section>
  );
}
