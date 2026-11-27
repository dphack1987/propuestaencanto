import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonios() {
  return (
    <section className="bg-sand py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <Quote size={32} className="mx-auto text-terra-500" />
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-forest-950 lg:text-5xl">
            Lo que dicen <em className="font-light italic">nuestros huéspedes</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.12}>
              <figure className="lift flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-forest-950/5">
                <div className="flex gap-1 text-gold-500">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={15} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-forest-950/75">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-forest-950/10 pt-4">
                  <p className="font-semibold text-forest-950">{t.author}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-forest-950/45">
                    {t.origin}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
