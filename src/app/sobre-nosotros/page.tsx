import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import MissionVision from "@/components/MissionVision";
import HistorySection from "@/components/HistorySection";
import SlogansQuote from "@/components/SlogansQuote";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce la misión, visión y la historia de ARANET: tres ingenieros que llevaron fibra óptica a El Pangui, Zamora Chinchipe desde el 11 de abril de 2024.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Sobre nosotros — ARANET",
    description:
      "La historia de ARANET, proveedor de fibra óptica en El Pangui, Zamora Chinchipe.",
    url: "/sobre-nosotros",
    type: "website",
  },
};

export default function SobreNosotrosPage() {
  return (
    <>
      <AboutHero />
      <section className="py-20 md:py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <MissionVision />
        </div>
      </section>
      <HistorySection />
      <SlogansQuote />
    </>
  );
}
