"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Compass, X } from "lucide-react";

type Step = {
  selector: string;
  title: string;
  text: string;
};

const STEPS: Step[] = [
  {
    selector: "[data-tour='hero']",
    title: "Tu portada cinematográfica",
    text: "Foto de portada a pantalla completa, titular de impacto y botones de acción directa. Es lo primero que ve un huésped al llegar.",
  },
  {
    selector: "#alojamiento",
    title: "Tus suites y tarifas reales",
    text: "Aquí el huésped ve las dos formas de hospedarse —por suite o casa completa— con las tarifas reales de tu portafolio, organizadas por temporada.",
  },
  {
    selector: "[data-tour='reserva-widget']",
    title: "El motor de reservas",
    text: "El huésped elige modalidad, fechas y personas; el sistema calcula noches y valor estimado, y el mensaje de WhatsApp se arma solo. Cero fricción para vender.",
  },
  {
    selector: "[data-tour='chatbot']",
    title: "Tu concierge 24/7",
    text: "Un chatbot que responde al instante: precios, suites, mascotas, niños, beneficios y ubicación. A cualquier hora, sin que nadie del equipo tenga que estar disponible.",
  },
  {
    selector: "#funciones",
    title: "Catálogo de funciones",
    text: "Esta sección documenta todo lo que incluye tu sistema: funciones en vivo hoy y las que se activan en las siguientes etapas — pagos en línea, app móvil, panel del hotel y notificaciones.",
  },
  {
    selector: "#contacto",
    title: "Todos tus canales de venta",
    text: "WhatsApp directo, Instagram, Booking.com y Airbnb integrados. Cada consulta llega con el contexto completo de la reserva.",
  },
];

export default function TourGuide() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const tipRef = useRef<HTMLDivElement>(null);

  const current = STEPS[step];

  useEffect(() => {
    if (!open || !current) return;
    const el = document.querySelector(current.selector);
    if (!el) {
      setRect(null);
      return;
    }
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = setTimeout(() => {
      setRect(el.getBoundingClientRect());
    }, 650);
    const onResize = () => setRect(el.getBoundingClientRect());
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, [open, step, current]);

  useEffect(() => {
    if (!open) {
      setStep(0);
      setRect(null);
    }
  }, [open]);

  const last = step === STEPS.length - 1;

  return (
    <>
      {/* Botón flotante del tour */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-gold-500 px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-forest-950 shadow-2xl shadow-black/30 transition-all hover:bg-gold-400"
          >
            <Compass size={17} />
            Tour guiado de la propuesta
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            {/* Spotlight */}
            {rect && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pointer-events-none fixed z-[65] rounded-2xl ring-2 ring-gold-400"
                style={{
                  top: rect.top - 8,
                  left: rect.left - 8,
                  width: rect.width + 16,
                  height: rect.height + 16,
                  boxShadow: "0 0 0 9999px rgba(11,21,16,0.72)",
                }}
              />
            )}
            {!rect && (
              <div className="pointer-events-none fixed inset-0 z-[65] bg-forest-950/72" />
            )}

            {/* Tooltip */}
            <motion.div
              ref={tipRef}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-6 left-1/2 z-[70] w-[calc(100vw-2.5rem)] max-w-md -translate-x-1/2 rounded-3xl bg-white p-7 text-forest-950 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-terra-500">
                    Paso {step + 1} de {STEPS.length}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium leading-tight">
                    {current.title}
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar tour"
                  className="rounded-full p-2 text-forest-950/40 transition-colors hover:bg-forest-950/5 hover:text-forest-950"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-forest-950/70">
                {current.text}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {STEPS.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === step ? "w-6 bg-terra-500" : "w-1.5 bg-forest-950/15"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  {step > 0 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="rounded-full border border-forest-950/15 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-forest-950/60 transition-colors hover:border-forest-950/40"
                    >
                      Atrás
                    </button>
                  )}
                  <button
                    onClick={() => (last ? setOpen(false) : setStep(step + 1))}
                    className="rounded-full bg-forest-950 px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-gold-400 transition-colors hover:bg-forest-800"
                  >
                    {last ? "Finalizar" : "Siguiente"}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
