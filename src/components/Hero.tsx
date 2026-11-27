"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { PHOTOS, SITE } from "@/lib/data";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-forest-950">
      {/* Imagen de fondo con parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={PHOTOS.cover}
          alt="Valle cafetalero del Quindío"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Degradados */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/45 to-forest-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-transparent to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <span className="gold-rule w-12" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold-400">
            Finca Hotel Luxury · {SITE.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-cream sm:text-7xl lg:text-8xl"
        >
          Donde el lujo
          <br />
          se encuentra con{" "}
          <em className="font-light italic text-gold-400">la naturaleza</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75"
        >
          Despierta entre cafetales centenarios en Quimbaya. Descanso, confort
          y experiencias auténticas en el corazón del Eje Cafetero colombiano.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#reservas"
            className="group inline-flex items-center gap-3 rounded-full bg-gold-500 px-9 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-forest-950 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
          >
            Reservar ahora
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#experiencias"
            className="inline-flex items-center gap-3 rounded-full border border-cream/25 px-9 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-cream transition-all hover:border-gold-400 hover:text-gold-400"
          >
            Explorar
          </a>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 flex items-center gap-3 text-cream/50"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={18} />
          </motion.span>
          <span className="text-[11px] uppercase tracking-[0.3em]">
            Desliza para descubrir
          </span>
          <MapPin size={14} className="ml-4 text-gold-500" />
        </motion.div>
      </motion.div>

      {/* Texto vertical decorativo */}
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
        <span className="text-[10px] uppercase tracking-[0.5em] text-cream/40">
          Quimbaya · Quindío · Colombia
        </span>
      </div>
    </section>
  );
}
