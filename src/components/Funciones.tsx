"use client";

import { useState } from "react";
import {
  ArrowRight,
  BadgePercent,
  Bell,
  Bot,
  CalendarCheck,
  ChefHat,
  CreditCard,
  LayoutDashboard,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import { SITE } from "@/lib/data";
import Reveal from "./Reveal";

type Feature = {
  icon: typeof Bot;
  title: string;
  description: string;
  demo: string;
  action: string;
  live?: boolean;
  href?: string;
  external?: boolean;
  chatbot?: boolean;
};

const FEATURES: Feature[] = [
  {
    icon: CalendarCheck,
    title: "Reserva directa",
    description:
      "El huésped elige modalidad, fechas y personas. El sistema calcula noches y tarifa estimada al instante.",
    demo: "Prueba el widget de reservas arriba y verás el mensaje de WhatsApp armarse solo.",
    action: "Ir a reservas",
    href: "#reservas",
    live: true,
  },
  {
    icon: Bot,
    title: "Concierge inteligente",
    description:
      "Chatbot que responde precios, suites, mascotas, niños y beneficios al instante, a cualquier hora.",
    demo: "Escribe '¿cuánto cuesta una suite?' y mira la respuesta automática.",
    action: "Abrir chatbot",
    live: true,
    chatbot: true,
  },
  {
    icon: MessageCircle,
    title: "Cierre por WhatsApp",
    description:
      "Cada consulta llega al equipo con todo el contexto: fechas, huéspedes y modalidad. Cero fricción.",
    demo: "El botón verde de abajo a la derecha abre WhatsApp con mensaje listo.",
    action: "Abrir WhatsApp",
    href: `https://wa.me/${SITE.whatsapp}`,
    external: true,
    live: true,
  },
  {
    icon: BadgePercent,
    title: "Beneficios automáticos",
    description:
      "Descuentos en Mirador Encanto, Parque Panaca y Mirador Quimbaya aplicados según la reserva.",
    demo: "Sección 'Experiencias' — los 3 beneficios con sus descuentos reales.",
    action: "Ver beneficios",
    href: "#experiencias",
    live: true,
  },
  {
    icon: ChefHat,
    title: "Servicios extra",
    description:
      "Chef privado para asados y paellas, coordinado directamente desde la web o el chat.",
    demo: "En Experiencias hay botón directo para consultar el chef por WhatsApp.",
    action: "Consultar chef",
    href: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola, me interesa el servicio de chef privado en Casa Yanuba")}`,
    external: true,
  },
  {
    icon: CreditCard,
    title: "Pago en línea",
    description:
      "Próximamente: pasarela de pagos (PSE, tarjetas, Nequi) con confirmación automática por email.",
    demo: "Fase 2 del proyecto — listo para integrar Mercado Pago o ePayco.",
    action: "Próximamente",
  },
  {
    icon: Smartphone,
    title: "App móvil",
    description:
      "Próximamente: la misma experiencia en iOS y Android con check-in digital y notificaciones.",
    demo: "Fase 3 — el sitio ya es instalable como PWA mientras tanto.",
    action: "Próximamente",
  },
  {
    icon: LayoutDashboard,
    title: "Panel del hotel",
    description:
      "Próximamente: calendario de ocupación, gestión de reservas y reportes de ingresos.",
    demo: "Fase 4 — administración completa sin programador.",
    action: "Próximamente",
  },
  {
    icon: Bell,
    title: "Notificaciones",
    description:
      "Recordatorios de reserva, check-in digital con QR y ofertas para huéspedes frecuentes.",
    demo: "Parte de la app y el sistema de correos transaccionales.",
    action: "Próximamente",
  },
];

const FLOW = [
  {
    step: "01",
    title: "Elige tu estadía",
    text: "Suite o casa completa, fechas y huéspedes en el widget de la página.",
  },
  {
    step: "02",
    title: "Confirma por WhatsApp",
    text: "Un clic abre WhatsApp con tu solicitud lista. Respondemos en minutos.",
  },
  {
    step: "03",
    title: "Pago seguro",
    text: "Próximamente pago en línea con tarjeta, PSE o Nequi y confirmación por email.",
  },
  {
    step: "04",
    title: "Disfruta",
    text: "Check-in digital, beneficios aplicados y concierge disponible 24/7.",
  },
];

export default function Funciones() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section className="bg-forest-950 py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold-400">
            Sistema integral
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight lg:text-6xl">
            Todo conectado,
            <br />
            <em className="font-light italic text-cream/70">
              una sola experiencia
            </em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-cream/55">
            Cada función de la maqueta es real y funciona hoy. Las marcadas como
            &quot;próximamente&quot; son las fases 2 a 4 del proyecto.
          </p>
        </Reveal>

        {/* Grid de funciones */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.1}>
              <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:border-gold-500/40 hover:bg-white/[0.06]">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15">
                    <f.icon size={20} className="text-gold-400" />
                  </div>
                  {f.live ? (
                    <span className="rounded-full bg-[#25D366]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4ade80]">
                      En vivo
                    </span>
                  ) : (
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream/50">
                      Fase {i < 5 ? 2 : 3}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-xl font-medium">{f.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/55">
                  {f.description}
                </p>
                <p className="mt-3 border-l-2 border-gold-500/40 pl-3 text-xs italic text-cream/45">
                  {f.demo}
                </p>
                {f.chatbot ? (
                  <button
                    onClick={() =>
                      window.dispatchEvent(new Event("open-chatbot"))
                    }
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/40 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-gold-400 transition-all hover:bg-gold-500 hover:text-forest-950"
                  >
                    {f.action}
                    <ArrowRight size={14} />
                  </button>
                ) : f.href ? (
                  <a
                    href={f.href}
                    {...(f.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/40 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-gold-400 transition-all hover:bg-gold-500 hover:text-forest-950"
                  >
                    {f.action}
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <span className="mt-6 inline-flex w-fit cursor-default items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-cream/40">
                    {f.action}
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        {/* Flujo de reserva */}
        <Reveal delay={0.1}>
          <div className="mt-24">
            <h3 className="text-center font-display text-2xl font-medium lg:text-3xl">
              Así funciona una reserva hoy
            </h3>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FLOW.map((s, i) => (
                <div
                  key={s.step}
                  className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <span className="font-display text-4xl font-light text-gold-500/60">
                    {s.step}
                  </span>
                  <h4 className="mt-3 font-semibold text-cream">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-cream/55">
                    {s.text}
                  </p>
                  {i < FLOW.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-gold-500/50 lg:block"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
