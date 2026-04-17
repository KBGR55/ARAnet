"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#planes", label: "Planes" },
  { href: "/sobre-nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/85 border-b border-zinc-200/60">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
          <Image
            src="/logo/logo.png"
            alt="ARANET - Navega sin límites"
            width={120}
            height={40}
            priority
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-[#185c88] transition">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/+593980992866"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex rounded-full text-white px-5 py-2 text-sm font-semibold transition hover:opacity-90"
          style={{ backgroundColor: "#95c11f" }}
        >
          WhatsApp
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-zinc-800 hover:bg-zinc-100 transition"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute left-0 right-0 top-full bg-white border-b border-zinc-200 shadow-lg"
          >
            <ul className="flex flex-col px-4 py-3 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-lg text-base font-medium text-zinc-800 hover:bg-zinc-100 hover:text-[#185c88] transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://wa.me/+593980992866"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-full text-white px-5 py-3 font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: "#95c11f" }}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
