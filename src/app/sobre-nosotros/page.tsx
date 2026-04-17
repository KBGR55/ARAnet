import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import MissionVision from "@/components/MissionVision";
import Founders from "@/components/Founders";
import HistorySection from "@/components/HistorySection";
import SlogansQuote from "@/components/SlogansQuote";

export const metadata: Metadata = {
  title: "Sobre nosotros — ARANET",
  description:
    "Conoce la misión, visión y la historia de ARANET, la empresa de fibra óptica en El Pangui, Zamora Chinchipe.",
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
      <Founders />
      <HistorySection />
      <SlogansQuote />
    </>
  );
}
