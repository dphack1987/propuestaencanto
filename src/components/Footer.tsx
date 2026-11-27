import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { InstagramIcon } from "./icons";
import { PHOTOS, SITE } from "@/lib/data";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-forest-950 text-cream">
      {/* CTA contacto */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold-400">
              06 — Contacto
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight lg:text-5xl">
              ¿Listo para despertar
              <br />
              <em className="font-light italic text-cream/70">
                entre cafetales?
              </em>
            </h2>
            <p className="mt-5 max-w-md text-cream/60">
              {SITE.address}. Reserva directa por WhatsApp y obtén la mejor
              tarifa garantizada.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:justify-self-end">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 rounded-full bg-[#25D366] px-10 py-5 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all hover:brightness-110 hover:shadow-xl"
            >
              <MessageCircle size={20} />
              Escribir por WhatsApp
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <p className="mt-4 flex items-center gap-2 text-sm text-cream/50">
              <Phone size={14} /> +57 313 696 3845
            </p>
          </Reveal>
        </div>
      </div>

      {/* Footer grid */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <Reveal>
          <p className="font-display text-3xl font-medium">
            Hotel <em className="font-light italic text-gold-400">Yanuba</em>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/50">
            {SITE.tagline}. {SITE.location}.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-all hover:border-gold-400 hover:text-gold-400"
            >
              <InstagramIcon size={17} />
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-all hover:border-[#25D366] hover:text-[#25D366]"
            >
              <MessageCircle size={17} />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-all hover:border-gold-400 hover:text-gold-400"
            >
              <Mail size={17} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/40">
            Navegación
          </p>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            {[
              ["Experiencias", "#experiencias"],
              ["Alojamiento", "#alojamiento"],
              ["Galería", "#galeria"],
              ["Reservas", "#reservas"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-gold-400">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/40">
            También estamos en
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 transition-colors hover:text-gold-400"
              >
                <ArrowUpRight size={14} /> Booking.com
              </a>
            </li>
            <li>
              <a
                href={SITE.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 transition-colors hover:text-gold-400"
              >
                <ArrowUpRight size={14} /> Airbnb
              </a>
            </li>
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 transition-colors hover:text-gold-400"
              >
                <ArrowUpRight size={14} /> Instagram @hotelyanuba
              </a>
            </li>
          </ul>
          <p className="mt-8 flex items-start gap-2 text-xs leading-relaxed text-cream/40">
            <MapPin size={14} className="mt-0.5 shrink-0" />
            {SITE.address}
          </p>
        </Reveal>
      </div>

      {/* Barra inferior con foto */}
      <div className="relative h-48 overflow-hidden lg:h-64">
        <Image
          src={PHOTOS.contacto}
          alt="Paisaje de Quimbaya"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 pb-6 text-[11px] uppercase tracking-[0.2em] text-cream/50 sm:flex-row lg:px-10">
          <span>© 2026 {SITE.name} — {SITE.descriptor}</span>
          <span>Quimbaya · Quindío · Colombia</span>
        </div>
      </div>
    </footer>
  );
}
