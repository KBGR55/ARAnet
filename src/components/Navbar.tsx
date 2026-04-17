import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/85 border-b border-zinc-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="ARANET - Navega sin límites"
            width={120}
            height={40}
            priority
          />
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><Link href="/#inicio" className="hover:text-[#185c88]">Inicio</Link></li>
          <li><Link href="/#planes" className="hover:text-[#185c88]">Planes</Link></li>
          <li><Link href="/sobre-nosotros" className="hover:text-[#185c88]">Nosotros</Link></li>
          <li><Link href="/#contacto" className="hover:text-[#185c88]">Contacto</Link></li>
        </ul>
        <a
          href="https://wa.me/+593980992866"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex rounded-full text-white px-5 py-2 text-sm font-semibold transition hover:opacity-90"
          style={{ backgroundColor: "#95c11f" }}
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
