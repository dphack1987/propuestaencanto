import Image from "next/image";
import { PHOTOS, SITE, STATS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Historia() {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal className="relative">
          <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src={PHOTOS.portada2}
              alt="Casa Yanuba en el paisaje cafetalero"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden rounded-3xl bg-forest-950 px-10 py-8 text-cream shadow-2xl sm:block lg:-right-8">
            <p className="font-display text-5xl font-light text-gold-400">6</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cream/70">
              Suites boutique
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-terra-500">
              01 — La Casa
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight text-forest-950 lg:text-6xl">
              Un refugio exclusivo
              <br />
              <em className="font-light italic text-forest-700">
                en el paisaje cafetero
              </em>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-forest-950/70">
              {SITE.name} es un hotel boutique de seis suites pensado para
              quienes buscan privacidad, tranquilidad y el encanto del campo
              quindiano. Piscina, tres jacuzzis, desayuno incluido y un
              servicio de aseo que convierte cada día en una experiencia sin
              preocupaciones.
            </p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-forest-950/70">
              Dos formas de quedarse: reserve por suite o tome la casa
              completa con uso exclusivo para su grupo, hasta 18 personas.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="gold-rule my-10 w-24" />
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-medium text-forest-950 lg:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-forest-950/50">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
