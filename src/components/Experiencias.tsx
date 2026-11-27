import Image from "next/image";
import { Check, ChefHat, Gift, Percent } from "lucide-react";
import {
  BENEFITS,
  EXTRA_SERVICES,
  HOUSE_AMENITIES,
  SITE,
} from "@/lib/data";
import Reveal from "./Reveal";

export default function Experiencias() {
  return (
    <section id="experiencias" className="bg-forest-950 py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Encabezado */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold-400">
              02 — Experiencias
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight lg:text-6xl">
              La casa lo incluye
              <br />
              <em className="font-light italic text-cream/70">
                todo está resuelto
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-md text-cream/60">
              Servicio de aseo diario, chef privado bajo reserva y beneficios
              exclusivos en los principales atractivos de la zona.
            </p>
          </Reveal>
        </div>

        {/* Amenities */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
            {HOUSE_AMENITIES.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 bg-forest-950 px-6 py-5"
              >
                <Check size={16} className="shrink-0 text-gold-400" />
                <span className="text-sm text-cream/80">{a}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Chef privado */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="img-zoom relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={EXTRA_SERVICES[0].image}
              alt="Chef privado preparando asado"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3">
              <ChefHat size={22} className="text-gold-400" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                Servicio adicional
              </span>
            </div>
            <h3 className="mt-4 font-display text-3xl font-medium lg:text-4xl">
              Chef privado
            </h3>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/65">
              {EXTRA_SERVICES[0].description}{" "}
              <span className="text-gold-400">{EXTRA_SERVICES[0].note}</span>
            </p>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola, me interesa el servicio de chef privado en Casa Yanuba")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold-500/50 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-gold-400 transition-all hover:bg-gold-500 hover:text-forest-950"
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>

        {/* Beneficios */}
        <div className="mt-24">
          <Reveal>
            <div className="flex items-center gap-3">
              <Gift size={22} className="text-gold-400" />
              <h3 className="font-display text-2xl font-medium lg:text-3xl">
                Beneficios para huéspedes
              </h3>
            </div>
            <p className="mt-3 text-cream/55">
              Por hospedarse en Casa Yanuba obtiene descuento en los
              principales atractivos de la zona. Pregunte al hacer su reserva.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.place} delay={i * 0.12}>
                <div className="group relative h-72 overflow-hidden rounded-3xl">
                  <Image
                    src={b.image}
                    alt={b.place}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-4xl font-light text-gold-400">
                      {b.discount}
                    </p>
                    <p className="mt-1 font-semibold text-cream">{b.place}</p>
                    <p className="text-sm text-cream/60">{b.detail}</p>
                  </div>
                  <Percent
                    size={90}
                    className="absolute -right-6 -top-6 text-white/10"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
