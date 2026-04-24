import PlanCard, { Plan } from "./PlanCard";

const plans: Plan[] = [
  {
    name: "Básico",
    speed: "150",
    unit: "MB",
    price: "19.99",
    features: [
      "Instalación gratis",
      "Ideal para hogares pequeños",
      "Navegación fluida y estable",
      "Soporte técnico local",
    ],
  },
  {
    name: "Home",
    speed: "200",
    unit: "MB",
    price: "25.00",
    features: [
      "Instalación gratis",
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
    price: "30.00",
    features: [
      "Instalación gratis",
      "Soporte técnico",
      "Máxima velocidad para toda la familia",
      "Ideal para gamers y creadores",
      "Atención personalizada",
    ],
  },
];

export default function Plans() {
  return (
    <section id="planes" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Planes diseñados para ti
          </h2>
          <p className="mt-3 sm:mt-4 text-zinc-600 text-sm sm:text-base">
            Elige la velocidad perfecta para tu hogar o negocio.
          </p>
        </div>
        <div className="mt-10 sm:mt-12 md:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
