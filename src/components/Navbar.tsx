"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { InstagramIcon } from "./icons";
import { SITE } from "@/lib/data";

const LINKS = [
  { href: "#experiencias", label: "Experiencias" },
  { href: "#alojamiento", label: "Alojamiento" },
  { href: "#galeria", label: "Galería" },
  { href: "#reservas", label: "Reservas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest-950/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      {!scrolled && (
        <div className="flex items-center justify-center gap-2.5 bg-terra-500 px-4 py-2.5 text-center">
          <Sparkles size={13} className="shrink-0 text-white" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-[11px]">
            Maqueta interactiva de propuesta — explora cómo se verá tu página y
            qué funciones incluirá
          </p>
          <Sparkles size={13} className="shrink-0 text-white" />
        </div>
      )}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-cream">
            Hotel <em className="text-gold-400 not-italic font-light">Yanuba</em>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link text-[13px] font-medium uppercase tracking-[0.18em] text-cream/80 hover:text-cream transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-cream/70 hover:text-gold-400 transition-colors"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="#reservas"
            className="rounded-full bg-gold-500 px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-forest-950 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
          >
            Reservar
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-cream lg:hidden"
          aria-label="Menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-forest-950/95 backdrop-blur-md border-b border-white/10 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-2xl text-cream/90 hover:text-gold-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#reservas"
                  onClick={() => setOpen(false)}
                  className="inline-block rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-forest-950"
                >
                  Reservar ahora
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
