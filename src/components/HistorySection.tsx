import HistoryTimeline from "./HistoryTimeline";

export default function HistorySection() {
  return (
    <section className="py-20 md:py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Nuestra historia
          </h2>
          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
            De una conversación entre amigos a iluminar la red de fibra
            óptica en El Pangui.
          </p>
        </div>
        <HistoryTimeline />
      </div>
    </section>
  );
}
