import { Sparkle } from "lucide-react";

const ITEMS = [
  "Café de origen",
  "Naturaleza virgen",
  "Arquitectura colonial",
  "Gastronomía local",
  "Relajación total",
  "Eje Cafetero",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-forest-950/10 bg-cream py-5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-xl italic text-forest-800/70"
          >
            {item}
            <Sparkle size={14} className="text-gold-500" fill="currentColor" />
          </span>
        ))}
      </div>
    </div>
  );
}
