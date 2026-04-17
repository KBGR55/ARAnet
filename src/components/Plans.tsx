import PlanCard, { Plan } from "./PlanCard";

const plans: Plan[] = [
  {
    name: "Básico",
    speed: "150",
    unit: "MB",
    features: [
      "Ideal para hogares pequeños",
      "Navegación fluida y estable",
      "Soporte técnico local",
    ],
  },
  {
    name: "Home",
    speed: "200",
    unit: "MB",
    features: [
      "Perfecto para streaming y trabajo remoto",
      "Wi-Fi de alto rendimiento",
      "Soporte prioritario",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    speed: "300",
    unit: "MB",
    features: [
      "Máxima velocidad para toda la familia",
      "Ideal para gamers y creadores",
      "Atención personalizada",
    ],
  },
];

export default function Plans() {
  return (
    <section id="planes" className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Planes diseñados para ti
          </h2>
          <p className="mt-4 text-zinc-600">
            Elige la velocidad perfecta para tu hogar o negocio.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
