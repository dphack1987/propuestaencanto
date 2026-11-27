import {
  ArrowRight,
  BadgeCheck,
  Check,
  Code2,
  Database,
  Gauge,
  LineChart,
  Lock,
  SearchCheck,
  Smartphone,
  Wallet,
  Zap,
} from "lucide-react";
import Reveal from "./Reveal";

const PHASES = [
  {
    icon: BadgeCheck,
    phase: "Fase 1",
    title: "Web luxury + reservas",
    text: "Página de lujo, reservas directas por WhatsApp y chatbot concierge funcionando hoy.",
    status: "Incluido en esta maqueta",
  },
  {
    icon: Wallet,
    phase: "Fase 2",
    title: "Pagos en línea",
    text: "Pasarela de pagos (Mercado Pago/ePayco), confirmación automática por email y disponibilidad en tiempo real.",
    status: "Siguiente etapa",
  },
  {
    icon: Smartphone,
    phase: "Fase 3",
    title: "App móvil",
    text: "La misma experiencia en iOS y Android: reservas, check-in digital con QR, notificaciones y modo offline.",
    status: "Siguiente etapa",
  },
  {
    icon: Database,
    phase: "Fase 4",
    title: "Panel de administración",
    text: "Calendario de ocupación, gestión de reservas, reportes de ingresos y edición de tarifas sin programador.",
    status: "Siguiente etapa",
  },
  {
    icon: LineChart,
    phase: "Fase 5",
    title: "Integración de canales",
    text: "Sincronización de disponibilidad con Booking.com y Airbnb — ninguna reserva se pierde ni se duplica.",
    status: "Siguiente etapa",
  },
];

const WHY_US = [
  {
    title: "Conocemos tu negocio",
    text: "Esta maqueta usa tus datos reales: tarifas, suites, beneficios y WhatsApp. Nada de plantillas genéricas.",
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
    title: "Desarrollo 100% propio",
    text: "Sin maquetas ni terceros: frontend de última generación y backend en Python puro, con las técnicas más avanzadas de ingeniería de software.",
  },
];

const CAPABILITIES = [
  {
    icon: Zap,
    title: "Rendimiento extremo",
    text: "Carga en milisegundos: generación estática, imágenes optimizadas automáticas y animaciones por GPU.",
  },
  {
    icon: Code2,
    title: "Código de grado enterprise",
    text: "TypeScript estricto, arquitectura escalable y componentes reutilizables — mantenible por años.",
  },
  {
    icon: Lock,
    title: "Seguridad real",
    text: "HTTPS, validación de datos en servidor, protección anti fraude en pagos y webhooks idempotentes.",
  },
  {
    icon: Gauge,
    title: "Listo para crecer",
    text: "API REST desde el día uno: app móvil, panel admin e integraciones se conectan sin rehacer nada.",
  },
];

export default function Propuesta() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Encabezado de la propuesta */}
        <Reveal className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-terra-500">
            Tu propuesta digital
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-forest-950 lg:text-6xl">
            No estás comprando una página web.
            <br />
            <em className="font-light italic text-forest-700">
              Estás invirtiendo en un sistema que vende por ti
            </em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-forest-950/60">
            Todo lo que ves en esta maqueta es funcional y está diseñado con la
            experiencia del viajero y los datos de tu negocio. Abajo te
            explicamos cada etapa del proyecto y por qué trabajar con nosotros
            marca la diferencia.
          </p>
        </Reveal>

        {/* Por qué nosotros — primero */}
        <Reveal delay={0.1}>
          <div className="mt-16">
            <h3 className="text-center font-display text-2xl font-medium text-forest-950 lg:text-3xl">
              Por qué trabajar con nosotros
            </h3>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_US.map((v, i) => (
                <div
                  key={v.title}
                  className="lift rounded-3xl border border-forest-950/10 bg-white p-7 shadow-sm"
                >
                  <span className="font-display text-3xl font-light text-terra-500/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-3 font-semibold text-forest-950">
                    {v.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-forest-950/60">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* SEO diferenciador */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start gap-5 rounded-[2rem] border border-forest-950/10 bg-forest-950 p-8 text-cream sm:p-10 lg:flex-row lg:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-500/20">
              <SearchCheck size={26} className="text-gold-400" />
            </div>
            <div className="flex-1">
              <h4 className="font-display text-xl font-medium lg:text-2xl">
                Nuestro SEO es diferente al de todos
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">
                No nos quedamos en &quot;poner palabras clave&quot;. Trabajamos
                el posicionamiento desde la parte técnica — Core Web Vitals,
                datos estructurados de hotel, SEO local y contenido con
                intención de búsqueda real — como una solución digital
                práctica, efectiva y adaptable a las necesidades de tu negocio.
              </p>
            </div>
            <a
              href="#funciones"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-gold-400/50 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-gold-400 transition-all hover:bg-gold-500 hover:text-forest-950"
            >
              Ver detalle
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>

        {/* Desarrollo propio */}
        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-col items-start gap-5 rounded-[2rem] border border-gold-500/40 bg-gradient-to-r from-gold-500/10 to-transparent p-8 sm:p-10 lg:flex-row lg:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-500/20">
              <Code2 size={26} className="text-coffee-700" />
            </div>
            <div>
              <h4 className="font-display text-xl font-medium text-forest-950 lg:text-2xl">
                Desarrollo 100% propio, desde cero
              </h4>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-forest-950/60">
                No usamos maquetas ni plantillas de terceros ni
                subcontratamos servicios: todo el sistema se programa a medida
                con las técnicas más avanzadas de ingeniería de software —
                frontend de última generación y backend en Python puro — para
                que cada función sea exactamente lo que tu negocio necesita.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Las 5 fases */}
        <Reveal delay={0.1}>
          <div className="mt-20">
            <div className="text-center">
              <h3 className="font-display text-2xl font-medium text-forest-950 lg:text-3xl">
                El proyecto completo, por etapas
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm text-forest-950/55">
                Cada fase se activa sobre la misma base — nada se rehace y cada
                entrega genera valor desde el día uno.
              </p>
            </div>
            <div className="mt-12 space-y-4">
              {PHASES.map((p, i) => (
                <div
                  key={p.phase}
                  className="lift flex flex-col gap-5 rounded-3xl border border-forest-950/10 bg-white p-7 shadow-sm sm:flex-row sm:items-center lg:p-8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-950">
                    <p.icon size={22} className="text-gold-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-terra-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-terra-600">
                        {p.phase}
                      </span>
                      <h4 className="font-display text-xl font-medium text-forest-950">
                        {p.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-forest-950/60">
                      {p.text}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] ${
                      i === 0
                        ? "bg-[#25D366]/15 text-[#128C4B]"
                        : "bg-forest-950/5 text-forest-950/50"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Capacidades técnicas */}
        <Reveal delay={0.1}>
          <div className="mt-16">
            <div className="text-center">
              <h3 className="font-display text-2xl font-medium text-forest-950 lg:text-3xl">
                Bajo el capó: capacidades de ingeniería reales
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm text-forest-950/55">
                Esto no es una maqueta visual — es software funcionando con
                estándares de producción.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CAPABILITIES.map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl border border-forest-950/10 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-950">
                    <c.icon size={20} className="text-gold-400" />
                  </div>
                  <h4 className="mt-4 font-semibold text-forest-950">
                    {c.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-forest-950/60">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                "TypeScript estricto",
                "Next.js 16 + Turbopack",
                "Python puro (backend)",
                "PWA instalable",
                "Schema.org / SEO técnico",
                "API REST",
                "Deploy automático en Vercel",
                "Git + CI/CD",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest-950/55"
                >
                  <Check size={13} className="text-forest-600" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Transición a la maqueta */}
        <Reveal delay={0.1}>
          <div className="mt-16 text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-forest-950/45">
              Ahora explora la maqueta
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-forest-950/55">
              Desliza para ver cómo se verá tu página y prueba cada función en
              vivo. Usa el botón dorado de abajo para el tour guiado paso a
              paso.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
