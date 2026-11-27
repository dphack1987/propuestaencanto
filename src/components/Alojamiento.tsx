import Image from "next/image";
import {
  ArrowUpRight,
  BedDouble,
  Crown,
  Heart,
  MapPin,
  Star,
  Users,
} from "lucide-react";
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
              <article className="group lift flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-forest-950/5">
                {/* Imagen estilo Booking/Airbnb */}
                <div className="img-zoom relative h-72 overflow-hidden">
                  <Image
                    src={opt.image}
                    alt={opt.name}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <button
                    aria-label="Guardar"
                    className="absolute right-4 top-4 rounded-full bg-white/90 p-2.5 shadow-md backdrop-blur transition-colors hover:text-terra-500"
                  >
                    <Heart size={17} className="text-forest-950/60" />
                  </button>
                  {opt.guestFavorite && (
                    <span className="absolute left-4 top-4 rounded-full bg-terra-500 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-md">
                      Favorito de huéspedes
                    </span>
                  )}
                  {opt.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-forest-950 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-gold-400 shadow-md">
                      {opt.badge}
                    </span>
                  )}
                  {/* Badge de rating estilo Booking */}
                  {opt.rating && (
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1.5 shadow-md backdrop-blur">
                      <Star size={13} className="fill-gold-500 text-gold-500" />
                      <span className="text-sm font-bold text-forest-950">
                        {opt.rating.toFixed(1)}
                      </span>
                      <span className="text-xs text-forest-950/50">
                        ({opt.reviews})
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-medium text-forest-950">
                    {opt.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-forest-950/50">
                    <MapPin size={12} />
                    {SITE.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-forest-950/65">
                    {opt.description}
                  </p>

                  {/* Amenidades rápidas */}
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                    {opt.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="flex items-center gap-1.5 text-xs text-forest-950/60"
                      >
                        <BedDouble size={12} className="text-forest-600" />
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-end justify-between border-t border-forest-950/10 pt-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-forest-950/45">
                        Desde
                      </p>
                      <p className="font-display text-2xl font-semibold text-forest-950">
                        ${opt.priceFrom.toLocaleString("es-CO")}
                        <span className="ml-1 text-xs font-normal text-forest-950/45">
                          / noche
                        </span>
                      </p>
                      <p className="mt-0.5 flex items-center gap-1 text-[11px] text-forest-950/45">
                        <Users size={11} /> {opt.capacity}
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hola, quiero reservar: ${opt.name} en Casa Yanuba`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.15em] text-gold-400 transition-all hover:bg-forest-800"
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
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-forest-950/5 px-3 py-1 text-xs text-forest-950/70">
                        {s.capacity}
                      </span>
                      <span className="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold text-coffee-700">
                        Ideal para {s.ideal}
                      </span>
                      {s.rating && (
                        <span className="flex items-center gap-1 rounded-full bg-forest-950/5 px-3 py-1 text-xs font-semibold text-forest-950">
                          <Star
                            size={11}
                            className="fill-gold-500 text-gold-500"
                          />
                          {s.rating} ({s.reviews})
                        </span>
                      )}
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
