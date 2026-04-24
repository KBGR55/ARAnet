import { Check } from "lucide-react";

export type Plan = {
  name: string;
  speed: string;
  unit: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

export default function PlanCard({ plan }: { plan: Plan }) {
  const { name, speed, unit, price, features, highlight } = plan;
  return (
    <div
      className="rounded-3xl p-8 border-2 bg-white transition flex flex-col hover:-translate-y-1"
      style={{
        borderColor: highlight ? "#95c11f" : "#e4e4e7",
        boxShadow: highlight ? "0 20px 40px -15px rgba(149,193,31,0.35)" : undefined,
      }}
    >
      {highlight && (
        <span
          className="self-start inline-block px-3 py-1 text-xs font-bold rounded-full mb-4"
          style={{ backgroundColor: "#95c11f", color: "#1d1d1b" }}
        >
          Más popular
        </span>
      )}
      <h3 className="font-bold text-2xl" style={{ color: "#1d1d1b" }}>
        {name}
      </h3>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-5xl font-black" style={{ color: "#185c88" }}>
          {speed}
        </span>
        <span className="text-xl font-bold text-zinc-700">{unit}</span>
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold" style={{ color: "#1d1d1b" }}>
          ${price}
        </span>
        <span className="text-sm font-medium text-zinc-500">/mes</span>
      </div>
      <ul className="mt-6 space-y-3 text-sm flex-1 text-zinc-600">
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-2">
            <Check
              className="w-4 h-4 mt-0.5 shrink-0"
              style={{ color: "#95c11f" }}
            />
            <span>{feat}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/+593980992866"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block text-center rounded-full py-3 font-semibold transition text-white hover:opacity-90"
        style={{ backgroundColor: highlight ? "#95c11f" : "#185c88" }}
      >
        Descubrir
      </a>
    </div>
  );
}
