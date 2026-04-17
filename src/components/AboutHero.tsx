export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #185c88 0%, #0f3a57 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(#95c11f 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "#95c11f" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 50%, #fafafa 75%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          Sobre ARANET
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          Fibra óptica, cercanía y compromiso desde El Pangui, Zamora
          Chinchipe.
        </p>
      </div>
    </section>
  );
}
