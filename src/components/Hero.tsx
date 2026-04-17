"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wifi, ShieldCheck, Headphones } from "lucide-react";

const features = [
  { Icon: Wifi, label: "Fibra óptica" },
  { Icon: ShieldCheck, label: "Conexión estable" },
  { Icon: Headphones, label: "Soporte local" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #f0f7fb 0%, #ffffff 60%, #f6faee 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: "#185c88" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: "#95c11f" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(#185c88 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border"
            style={{
              backgroundColor: "rgba(149,193,31,0.15)",
              borderColor: "rgba(149,193,31,0.4)",
              color: "#5f7d14",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#95c11f" }}
            />
            Fibra óptica en El Pangui
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]"
            style={{ color: "#1d1d1b" }}
          >
            Conéctate a la velocidad del futuro,{" "}
            <span style={{ color: "#185c88" }}>navega sin límites</span> y sin
            interrupciones.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-zinc-600 max-w-xl"
          >
            Internet de fibra óptica confiable y humano para los hogares y
            negocios de El Pangui, Zamora Chinchipe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#planes"
              className="rounded-full px-8 py-3.5 font-semibold transition hover:opacity-90 hover:scale-105 text-center text-white shadow-lg"
              style={{ backgroundColor: "#185c88" }}
            >
              Ver planes
            </a>
            <a
              href="/sobre-nosotros"
              className="rounded-full border-2 px-8 py-3.5 font-semibold text-center transition hover:bg-white"
              style={{ borderColor: "#185c88", color: "#185c88" }}
            >
              Conocer ARANET
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {features.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-zinc-700"
              >
                <span
                  className="w-8 h-8 rounded-full inline-flex items-center justify-center"
                  style={{ backgroundColor: "rgba(24,92,136,0.1)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#185c88" }} />
                </span>
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2rem] -z-10 opacity-60 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, #95c11f 0%, #185c88 100%)",
            }}
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full aspect-[1024/384] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5"
          >
            <Image
              src="/portada_aranet_Mesa-de-trabajo-1-copia-1.webp"
              alt="ARANET - Siempre conectado, siempre rápido"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hidden md:flex absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 items-center gap-3 border border-zinc-100"
          >
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black"
              style={{ backgroundColor: "#95c11f" }}
            >
              150
            </span>
            <div>
              <div className="text-xs text-zinc-500 uppercase tracking-wide font-semibold">
                Desde
              </div>
              <div className="font-bold text-zinc-900">MB de fibra</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
