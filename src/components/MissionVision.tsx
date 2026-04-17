"use client";

import { motion } from "framer-motion";
import { Flag, Eye } from "lucide-react";

const items = [
  {
    label: "Misión",
    title: "Conectar con propósito",
    text: "ARANET brinda conectividad estable y segura para las personas y negocios de El Pangui ofreciendo un servicio cercano que facilita el acceso al mundo digital y mejora la experiencia de navegación de cada usuario.",
    Icon: Flag,
    color: "#185c88",
    soft: "rgba(24,92,136,0.1)",
  },
  {
    label: "Visión",
    title: "Un referente regional",
    text: "Aspiramos a consolidar un estándar de servicio de internet confiable y humano que desde nuestra base en El Pangui expanda de forma progresiva su huella tecnológica, convirtiéndose en un referente natural de calidad y conectividad inclusiva para toda la provincia y la región sur.",
    Icon: Eye,
    color: "#95c11f",
    soft: "rgba(149,193,31,0.14)",
  },
];

export default function MissionVision() {
  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-16">
      {items.map((item, i) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl"
                style={{ backgroundColor: item.soft }}
              >
                <Icon className="w-6 h-6" style={{ color: item.color }} />
              </div>

              <div
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: item.color }}
              >
                {item.label}
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold">
              {item.title}
            </h2>

            <div
              className="w-12 h-[3px] rounded-full my-4"
              style={{ backgroundColor: item.color }}
            />

            <p className="text-zinc-600 leading-relaxed">{item.text}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
