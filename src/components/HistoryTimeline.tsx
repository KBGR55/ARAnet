"use client";

import { motion } from "framer-motion";
import { GraduationCap, Compass, HardHat, Zap } from "lucide-react";

const milestones = [
  {
    date: "Orígenes",
    title: "De las aulas a una visión compartida",
    Icon: GraduationCap,
    text: "Tres Ingenieros en Electrónica y Telecomunicaciones —Alexander Sócola, Alexander Santos y Ronald Torres— transformaron su amistad universitaria en una visión empresarial compartida, impulsados por el deseo de trascender la teoría académica.",
  },
  {
    date: "Plan estratégico",
    title: "El Pangui, el escenario ideal",
    Icon: Compass,
    text: "Tras analizar diversas posibilidades geográficas, identificaron en el cantón El Pangui, provincia de Zamora Chinchipe, el escenario ideal. La elección respondía a una lectura visionaria del auge minero y la proyección de crecimiento de la zona.",
  },
  {
    date: "Marzo 2024",
    title: "Despliegue de la fibra óptica",
    Icon: HardHat,
    text: "Inició la materialización del proyecto con el arduo despliegue de la infraestructura de fibra óptica. Un periodo donde el entusiasmo técnico convivía con la incertidumbre y los desafíos iniciales.",
  },
  {
    date: "11 de abril de 2024",
    title: "ARANET iluminó su red",
    Icon: Zap,
    text: "La visión se hizo servicio. Desde este día oficial de operaciones, trabajamos bajo una filosofía de mejora continua, consolidándonos como un referente de estabilidad y confianza para la comunidad.",
  },
];

export default function HistoryTimeline() {
  return (
    <motion.ol
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      className="relative border-l-2 pl-10 space-y-12"
      style={{ borderColor: "#95c11f" }}
    >
      {milestones.map((m, i) => {
        const Icon = m.Icon;
        return (
          <motion.li
            key={m.title}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
            className="relative"
          >
            <motion.span
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
                delay: i * 0.1 + 0.15,
              }}
              whileHover={{ scale: 1.15, rotate: 6 }}
              className="absolute -left-[52px] top-0 w-11 h-11 rounded-full flex items-center justify-center text-white ring-4 ring-zinc-50 shadow-md"
              style={{ backgroundColor: "#185c88" }}
              aria-hidden
            >
              <Icon className="w-5 h-5" />
            </motion.span>
            <div
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: "#95c11f" }}
            >
              {m.date}
            </div>
            <h3 className="mt-1 text-xl md:text-2xl font-bold">{m.title}</h3>
            <p className="mt-3 text-zinc-600 leading-relaxed">{m.text}</p>
          </motion.li>
        );
      })}
    </motion.ol>
  );
}
