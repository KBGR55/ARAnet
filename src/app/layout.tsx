import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ar-anet.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ARANET — Internet de fibra óptica en El Pangui, Zamora Chinchipe",
    template: "%s | ARANET",
  },
  description:
    "Internet de fibra óptica confiable y humano para hogares y negocios de El Pangui, Zamora Chinchipe. Planes desde 150 MB con soporte técnico local. Navega sin límites con ARANET.",
  keywords: [
    "ARANET",
    "internet El Pangui",
    "fibra óptica Zamora Chinchipe",
    "internet Zamora Chinchipe",
    "proveedor internet Ecuador",
    "fibra óptica Ecuador",
    "internet hogar El Pangui",
    "Navega sin límites",
    "ARAnet",
    "aranet.tech",
  ],
  authors: [{ name: "ARANET", url: siteUrl }],
  creator: "ARANET",
  publisher: "ARANET",
  applicationName: "ARANET",
  category: "Telecommunications",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteUrl,
    siteName: "ARANET",
    title: "ARANET — Internet de fibra óptica en El Pangui",
    description:
      "Fibra óptica confiable y humana para El Pangui, Zamora Chinchipe. Planes desde 150 MB con soporte técnico local.",
    images: [
      {
        url: "/portada_aranet_Mesa-de-trabajo-1-copia-1.webp",
        width: 1024,
        height: 384,
        alt: "ARANET - Siempre conectado, siempre rápido",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARANET — Internet de fibra óptica en El Pangui",
    description:
      "Fibra óptica confiable para El Pangui, Zamora Chinchipe. Planes desde 150 MB.",
    images: ["/portada_aranet_Mesa-de-trabajo-1-copia-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "ARANET",
  alternateName: "ARAnet",
  description:
    "Proveedor de internet de fibra óptica en El Pangui, Zamora Chinchipe, Ecuador.",
  url: siteUrl,
  telephone: "+593980992866",
  image: `${siteUrl}/portada_aranet_Mesa-de-trabajo-1-copia-1.webp`,
  logo: `${siteUrl}/logo/logo.png`,
  slogan: "Tecnología que une, Internet que conecta",
  foundingDate: "2024-04-11",
  founders: [
    { "@type": "Person", name: "Alexander Sócola" },
    { "@type": "Person", name: "Alexander Santos" },
    { "@type": "Person", name: "Ronald Torres" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Benigno Cruz entre Cordillera del Cóndor y Loja",
    addressLocality: "El Pangui",
    addressRegion: "Zamora Chinchipe",
    addressCountry: "EC",
  },
  areaServed: {
    "@type": "City",
    name: "El Pangui",
  },
  sameAs: [
    "https://www.facebook.com/ARAnetPangui",
    "https://www.instagram.com/aranet_pangui/",
    "https://aranet.tech/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+593980992866",
    contactType: "customer service",
    areaServed: "EC",
    availableLanguage: ["Spanish"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-white text-[#1d1d1b]"
        suppressHydrationWarning
      >
        <div
          style={{ display: "none" }}
          dangerouslySetInnerHTML={{
            __html: "<!-- Desarrollador: https://github.com/KBGR55 -->",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
