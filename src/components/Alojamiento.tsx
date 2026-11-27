import Image from "next/image";
import { ArrowUpRight, BedDouble, Crown, Users } from "lucide-react";
import { RATES, SITE, STAY_OPTIONS, SUITE_TYPES } from "@/lib/data";
import Reveal from "./Reveal";

const fmt = (n: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);

export default function Alojamiento() {
  return (
    <section id="alojamiento" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Encabezado */}
        <Reveal className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-terra-500">
            03 — Alojamiento
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-forest-950 lg:text-6xl">
            Dos formas de quedarse
            <br />
            <em className="font-light italic text-forest-700">
              en Casa Yanuba
            </em>
          </h2>
        </Reveal>

        {/* Opciones principales */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {STAY_OPTIONS.map((opt, i) => (
            <Reveal key={opt.id} delay={i * 0.15}>
              <article className="group lift relative overflow-hidden rounded-[2rem] bg-forest-950 text-cream">
                <div className="img-zoom relative h-80 overflow-hidden">
                  <Image
                    src={opt.image}
                    alt={opt.name}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                  {opt.badge && (
                    <span className="absolute left-6 top-6 rounded-full bg-gold-500 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-forest-950">
                      {opt.badge}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400">
                      Desde {fmt(opt.priceFrom)} / noche
                    </p>
                    <h3 className="mt-2 font-display text-4xl font-medium">
                      {opt.name}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="leading-relaxed text-cream/65">
                    {opt.description}
                  </p>
                  <ul className="mt-6 grid grid-cols-2 gap-3">
                    {opt.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-cream/75"
                      >
                        <BedDouble size={14} className="text-gold-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="flex items-center gap-2 text-sm text-cream/60">
                      <Users size={16} className="text-gold-400" />
                      {opt.capacity}
                    </span>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hola, quiero reservar: ${opt.name} en Casa Yanuba`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.15em] text-forest-950 transition-all hover:bg-gold-400"
                    >
                      Reservar
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Tipos de suite */}
        <div className="mt-24">
          <Reveal>
            <h3 className="font-display text-3xl font-medium text-forest-950 lg:text-4xl">
              Las seis suites
            </h3>
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {SUITE_TYPES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.15}>
                <div className="group lift flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-forest-950/5 sm:flex-row">
                  <div className="img-zoom relative h-56 w-full shrink-0 overflow-hidden sm:h-auto sm:w-2/5">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terra-500">
                      {s.floor}
                    </p>
                    <h4 className="mt-2 font-display text-2xl font-medium text-forest-950">
                      {s.name}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-forest-950/65">
                      {s.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-forest-950/5 px-3 py-1 text-xs text-forest-950/70">
                        {s.capacity}
                      </span>
                      <span className="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold text-coffee-700">
                        Ideal para {s.ideal}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Tabla de tarifas */}
        <Reveal delay={0.1}>
          <div className="mt-24 overflow-hidden rounded-[2rem] bg-forest-950 text-cream">
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-white/10 px-8 py-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/50 lg:px-12">
              <span>Tarifa por noche · 2026</span>
              <span className="text-right">Temporada baja</span>
              <span className="text-right">Temporada alta</span>
            </div>
            {RATES.map((r) => (
              <div
                key={r.label}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-white/5 px-8 py-4 last:border-0 lg:px-12"
              >
                <span className="text-sm text-cream/80 lg:text-base">
                  {r.label}
                </span>
                <span className="text-right font-display text-lg text-gold-400">
                  {r.low ? fmt(r.low) : "—"}
                </span>
                <span className="text-right font-display text-lg text-cream/50">
                  {r.high ? fmt(r.high) : "—"}
                </span>
              </div>
            ))}
            <div className="bg-white/5 px-8 py-5 text-xs leading-relaxed text-cream/50 lg:px-12">
              <p>
                <Crown size={12} className="mr-1 inline text-gold-400" />
                Casa completa (6 suites · hasta 18 personas):{" "}
                <strong className="text-cream/80">
                  {fmt(3400000)} baja · {fmt(4100000)} alta por noche
                </strong>
              </p>
              <p className="mt-1">
                Desayuno incluido. Niños hasta 2 años no pagan; de 3 a 4 años
                pagan el 50%. Persona adicional desde 5 años:{" "}
                {fmt(90000)} / {fmt(110000)}. Tarifas sujetas a cambios y
                disponibilidad.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
