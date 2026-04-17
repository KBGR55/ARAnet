const founders = [
  { name: "Alexander Sócola", role: "Co-fundador" },
  { name: "Alexander Santos", role: "Co-fundador" },
  { name: "Ronald Torres", role: "Co-fundador" },
];

export default function Founders() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Los fundadores
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Tres Ingenieros en Electrónica y Telecomunicaciones que
            convirtieron su camaradería universitaria en una visión
            empresarial compartida.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {founders.map((f) => {
            const initials = f.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <div
                key={f.name}
                className="rounded-2xl shadow-sm p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-black"
                  style={{
                    background:
                      "linear-gradient(135deg, #185c88 0%, #0f3a57 100%)",
                  }}
                  aria-hidden
                >
                  {initials}
                </div>
                <h3 className="font-bold text-lg">{f.name}</h3>
                <p
                  className="text-sm font-semibold mt-1"
                  style={{ color: "#95c11f" }}
                >
                  {f.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
