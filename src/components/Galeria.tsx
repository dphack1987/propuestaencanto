"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { GALLERY } from "@/lib/data";
import Reveal from "./Reveal";

export default function Galeria() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-terra-500">
              04 — Galería
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight text-forest-950 lg:text-6xl">
              Un vistazo a
              <br />
              <em className="font-light italic text-forest-700">la casa</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-forest-950/60">
              Toca cualquier imagen para verla en grande. Síguenos en Instagram
              para más momentos de la casa.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={(i % 4) * 0.08} className="break-inside-avoid">
              <button
                onClick={() => setActive(i)}
                className="img-zoom group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl"
                aria-label={g.alt}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  height={1000}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="h-auto w-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-forest-950/0 transition-colors duration-500 group-hover:bg-forest-950/40">
                  <Expand
                    size={28}
                    className="text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-950/95 p-6 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute right-6 top-6 text-cream/70 hover:text-cream"
              aria-label="Cerrar"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY[active].src}
                alt={GALLERY[active].alt}
                width={1400}
                height={900}
                sizes="90vw"
                className="max-h-[85vh] w-full rounded-2xl object-contain"
              />
              <p className="mt-4 text-center text-sm text-cream/60">
                {GALLERY[active].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
