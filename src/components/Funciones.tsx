"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgePercent,
  Bell,
  Bot,
  CalendarCheck,
  ChefHat,
  Code2,
  CreditCard,
  Globe,
  LayoutDashboard,
  MessageCircle,
  SearchCheck,
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
  analytics?: boolean;
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
      "Pago en línea con tarjeta, PSE o Nequi, confirmación automática por email y recibo digital.",
    demo: "Se activa con la pasarela de pagos — Mercado Pago o ePayco.",
    action: "Próximamente",
  },
  {
    icon: Smartphone,
    title: "App móvil",
    description:
      "La misma experiencia en iOS y Android: reservas, check-in digital con QR y notificaciones push.",
    demo: "El sitio ya es instalable como app (PWA) mientras llega la versión nativa.",
    action: "Próximamente",
  },
  {
    icon: LayoutDashboard,
    title: "Panel del hotel",
    description:
      "Administración completa: calendario de ocupación, gestión de reservas y reportes de ingresos.",
    demo: "Edición de tarifas y contenido sin necesidad de programador.",
    action: "Próximamente",
  },
  {
    icon: Bell,
    title: "Notificaciones",
    description:
      "Recordatorios de reserva, check-in digital con QR y ofertas exclusivas para huéspedes.",
    demo: "Parte del sistema de correos transaccionales y la app móvil.",
    action: "Próximamente",
  },
  {
    icon: Globe,
    title: "Analítica de visitantes",
    description:
      "Sabes quién visita tu página: países de origen, fuentes de tráfico (Google, Instagram, Booking), páginas más vistas y en qué punto abandonan la reserva.",
    demo: "Con estos datos decides dónde invertir en publicidad y qué contenido convierte más.",
    action: "Ver ejemplo",
    live: true,
    analytics: true,
  },
  {
    icon: SearchCheck,
    title: "SEO técnico avanzado",
    description:
      "Posicionamiento real en Google: velocidad extrema, datos estructurados de hotel, SEO local y estrategia de contenido por intención de búsqueda.",
    demo: "A diferencia de la mayoría, nuestro enfoque es técnico y de resultados medibles — no solo 'poner palabras clave'.",
    action: "Ver detalle",
    live: true,
    href: "#seo",
  },
];

const ANALYTICS_MOCK = {
  stats: [
    { label: "Visitantes este mes", value: "12.480" },
    { label: "Países de origen", value: "34" },
    { label: "Conversión a reserva", value: "4.2%" },
    { label: "Consultas por WhatsApp", value: "386" },
    { label: "Chats atendidos por bot", value: "1.204" },
    { label: "Ingresos atribuidos", value: "$18.4M" },
  ],
  countries: [
    { name: "Colombia", pct: 42 },
    { name: "Estados Unidos", pct: 23 },
    { name: "España", pct: 14 },
    { name: "México", pct: 9 },
    { name: "Otros", pct: 12 },
  ],
  sources: [
    { name: "Google (búsqueda)", pct: 34 },
    { name: "Instagram", pct: 27 },
    { name: "Booking.com", pct: 15 },
    { name: "Referidos / WhatsApp", pct: 14 },
    { name: "Directo", pct: 10 },
  ],
  funnel: [
    { label: "Visitas a la página", value: 100, count: "12.480" },
    { label: "Vieron tarifas", value: 68, count: "8.486" },
    { label: "Iniciaron reserva", value: 31, count: "3.869" },
    { label: "Escribieron por WhatsApp", value: 12, count: "1.497" },
    { label: "Reserva confirmada", value: 4.2, count: "524" },
  ],
  topContent: [
    { name: "Casa completa", views: "3.912" },
    { name: "Suite boutique", views: "3.204" },
    { name: "Chef privado", views: "1.847" },
    { name: "Beneficios / descuentos", views: "1.203" },
  ],
  devices: [
    { name: "Móvil", pct: 71 },
    { name: "Escritorio", pct: 22 },
    { name: "Tablet", pct: 7 },
  ],
  chatbotTopics: [
    { topic: "Precios y tarifas", queries: 342 },
    { topic: "Disponibilidad", queries: 287 },
    { topic: "Mascotas", queries: 96 },
    { topic: "Beneficios", queries: 88 },
  ],
};

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
  const [showAnalytics, setShowAnalytics] = useState(false);

  return (
    <section id="funciones" className="bg-forest-950 py-24 text-cream lg:py-32">
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
            &quot;próximamente&quot; se activan con las siguientes etapas del
            sistema.
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
                      Próximamente
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
                ) : f.analytics ? (
                  <button
                    onClick={() => setShowAnalytics((v) => !v)}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/40 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-gold-400 transition-all hover:bg-gold-500 hover:text-forest-950"
                  >
                    {showAnalytics ? "Ocultar panel" : f.action}
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

        {/* Panel de analítica — vista previa */}
        {showAnalytics && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 overflow-hidden rounded-[2rem] border border-gold-500/30 bg-white/[0.04]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-8 py-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-400">
                  Panel de inteligencia del negocio
                </p>
                <h3 className="mt-1 font-display text-2xl font-medium">
                  Métricas de mercadeo
                </h3>
              </div>
              <span className="rounded-full bg-terra-500/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-terra-400">
                Datos de ejemplo
              </span>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
              {ANALYTICS_MOCK.stats.map((s) => (
                <div key={s.label} className="bg-forest-950 px-5 py-4">
                  <p className="font-display text-2xl font-medium text-gold-400">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-cream/50">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-px bg-white/10 lg:grid-cols-2">
              {/* Países */}
              <div className="bg-forest-950 p-8">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-cream/60">
                  Visitantes por país
                </h4>
                <div className="mt-5 space-y-3">
                  {ANALYTICS_MOCK.countries.map((c) => (
                    <div key={c.name}>
                      <div className="flex justify-between text-xs">
                        <span className="text-cream/80">{c.name}</span>
                        <span className="text-gold-400">{c.pct}%</span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${c.pct}%` }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-forest-600 to-gold-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fuentes */}
              <div className="bg-forest-950 p-8">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-cream/60">
                  Fuentes de tráfico
                </h4>
                <div className="mt-5 space-y-3">
                  {ANALYTICS_MOCK.sources.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-xs">
                        <span className="text-cream/80">{s.name}</span>
                        <span className="text-gold-400">{s.pct}%</span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${s.pct}%` }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-terra-500 to-terra-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Embudo */}
              <div className="bg-forest-950 p-8">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-cream/60">
                  Embudo de conversión
                </h4>
                <div className="mt-5 space-y-3">
                  {ANALYTICS_MOCK.funnel.map((f, i) => (
                    <div key={f.label} className="flex items-center gap-4">
                      <span className="w-44 shrink-0 text-xs text-cream/70">
                        {f.label}
                      </span>
                      <div className="h-5 flex-1 overflow-hidden rounded-md bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.max(f.value, 2)}%` }}
                          transition={{
                            duration: 0.9,
                            delay: i * 0.1,
                            ease: "easeOut",
                          }}
                          className="flex h-full items-center justify-end rounded-md bg-gradient-to-r from-forest-600 to-forest-500 px-2"
                        >
                          <span className="text-[10px] font-bold text-cream/80">
                            {f.count}
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenido + dispositivos + chatbot */}
              <div className="space-y-px bg-white/10">
                <div className="bg-forest-950 p-8">
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-cream/60">
                    Contenido más visto
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {ANALYTICS_MOCK.topContent.map((c, i) => (
                      <li
                        key={c.name}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="flex items-center gap-3 text-cream/75">
                          <span className="font-display text-gold-500/60">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {c.name}
                        </span>
                        <span className="text-xs text-cream/45">
                          {c.views} vistas
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-px bg-white/10">
                  <div className="bg-forest-950 p-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/60">
                      Dispositivos
                    </h4>
                    <div className="mt-4 space-y-2.5">
                      {ANALYTICS_MOCK.devices.map((d) => (
                        <div
                          key={d.name}
                          className="flex justify-between text-xs text-cream/75"
                        >
                          <span>{d.name}</span>
                          <span className="text-gold-400">{d.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-forest-950 p-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/60">
                      Chatbot: temas
                    </h4>
                    <ul className="mt-4 space-y-2">
                      {ANALYTICS_MOCK.chatbotTopics.map((t) => (
                        <li
                          key={t.topic}
                          className="flex justify-between text-xs text-cream/75"
                        >
                          <span className="truncate pr-2">{t.topic}</span>
                          <span className="text-gold-400">{t.queries}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="border-t border-white/10 px-8 py-4 text-center text-[11px] text-cream/40">
              Vista previa con datos de ejemplo — en producción cada métrica se
              alimenta en tiempo real desde la página.
            </p>
          </motion.div>
        )}

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

        {/* SEO avanzado */}
        <Reveal delay={0.1}>
          <div id="seo" className="mt-24 scroll-mt-28">
            <div className="text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                Ventaja competitiva
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium lg:text-3xl">
                Un SEO que sí posiciona — y que puedes medir
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-cream/55">
                La mayoría de las páginas solo 'ponen palabras clave'. Nosotros
                trabajamos el posicionamiento desde la parte técnica, la
                estructura de datos y la intención de búsqueda real del
                viajero.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "SEO técnico de alto nivel",
                  items: [
                    "Core Web Vitals perfectos — carga en milisegundos",
                    "Datos estructurados schema.org/Hotel para Google",
                    "Sitemap, canonical, robots y metadatos OG optimizados",
                    "Arquitectura de URLs y enlazado interno inteligente",
                  ],
                },
                {
                  title: "SEO local que vende",
                  items: [
                    "Optimización para 'hotel cerca de mí' y búsquedas por zona",
                    "Google Business Profile + mapas integrados",
                    "Reseñas y calificaciones visibles en los resultados",
                    "Presencia en búsquedas de Quimbaya, Filandia y Panaca",
                  ],
                },
                {
                  title: "Contenido con intención",
                  items: [
                    "Guías y blog del Eje Cafetero que atraen viajeros",
                    "Keywords por etapa del viaje: soñar → comparar → reservar",
                    "Estrategia de enlaces (backlinks) locales y de turismo",
                    "Medición en Search Console: posiciones, CTR y conversión",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <h4 className="font-semibold text-cream">{col.title}</h4>
                  <ul className="mt-4 space-y-2.5">
                    {col.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-cream/60"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-cream/50">
              Una solución digital práctica y adaptable: medimos cada resultado
              y ajustamos la estrategia según lo que funcione para tu negocio.
            </p>
          </div>
        </Reveal>

        {/* Por qué trabajar con nosotros */}
        <Reveal delay={0.1}>
          <div className="mt-24">
            <div className="text-center">
              <h3 className="font-display text-2xl font-medium lg:text-3xl">
                Por qué trabajar con nosotros
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm text-cream/55">
                No entregamos una página y nos vamos — construimos un sistema
                que trabaja para tu negocio todos los días.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Conocemos tu negocio",
                  text: "La maqueta usa tus datos reales: tarifas, suites, beneficios y WhatsApp. Nada de plantillas genéricas.",
                },
                {
                  title: "Ventas 24/7 sin personal extra",
                  text: "El chatbot y las reservas automáticas atienden huéspedes de cualquier país a cualquier hora.",
                },
                {
                  title: "Datos que valen dinero",
                  text: "Cada visita, consulta y reserva queda registrada: sabes qué países te visitan, qué servicios buscan y dónde se pierde la venta.",
                },
                {
                  title: "Crece contigo",
                  text: "Empieza con la web y escala a pagos en línea, app móvil y panel administrativo sin rehacer nada.",
                },
              ].map((v, i) => (
                <div
                  key={v.title}
                  className="rounded-3xl border border-gold-500/25 bg-gradient-to-b from-gold-500/[0.08] to-transparent p-7"
                >
                  <span className="font-display text-3xl font-light text-gold-500/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-3 font-semibold text-cream">{v.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-cream/55">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Desarrollo propio */}
            <div className="mt-8 flex flex-col items-center gap-4 rounded-[2rem] border border-gold-500/40 bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-transparent px-8 py-10 text-center lg:flex-row lg:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-500/20">
                <Code2 size={26} className="text-gold-400" />
              </div>
              <div>
                <h4 className="font-display text-xl font-medium text-cream lg:text-2xl">
                  Desarrollo 100% propio, desde cero
                </h4>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cream/60">
                  No usamos maquetas ni plantillas de terceros: todo el sistema
                  se programa a medida con las técnicas más avanzadas de
                  ingeniería de software — frontend de última generación y
                  backend en Python puro — para que cada función sea exactamente
                  lo que tu negocio necesita.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
