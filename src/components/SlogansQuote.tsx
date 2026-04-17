export default function SlogansQuote() {
  return (
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
  );
}
