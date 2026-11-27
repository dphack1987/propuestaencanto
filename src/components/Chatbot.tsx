"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { SITE } from "@/lib/data";

type Msg = { from: "bot" | "user"; text: string };

const QUICK = [
  "Precios y tarifas",
  "Suites disponibles",
  "Piscina y jacuzzis",
  "Hacer una reserva",
  "¿Aceptan mascotas?",
];

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

function answer(input: string): string {
  const t = normalize(input);

  if (/precio|tarifa|cuanto|costo|valor|noche/.test(t))
    return `Nuestras tarifas por noche (COP, 2026):\n• Suite boutique 2p: desde $550.000 baja / $660.000 alta\n• Suite familiar hasta 6p: desde $750.000 baja\n• Casa completa (18 personas): desde $3.400.000 baja\nTodos incluyen desayuno y aseo. ¿Quieres que te pase el detalle por WhatsApp?`;

  if (/suite|habitacion|cuarto|cama|capacidad|personas/.test(t))
    return `Tenemos 6 suites boutique: 4 en el segundo piso (cama king + sofá cama, ideales para parejas, 2-4 personas) y 2 familiares en el primer piso (hasta 6 personas). También puedes reservar la casa completa para hasta 18 personas.`;

  if (/piscina|jacuzzi|alberca|spa/.test(t))
    return `¡Sí! La casa incluye piscina, tres jacuzzis y zona BBQ, todo de uso exclusivo para los huéspedes. El acceso está incluido en todas las tarifas.`;

  if (/mascota|perro|gato|animal/.test(t))
    return `Por el momento no aceptamos mascotas, pero escríbenos por WhatsApp para consultar excepciones según la temporada.`;

  if (/nino|bebe|menor|hijo/.test(t))
    return `¡Los niños son bienvenidos! Menores de 2 años no pagan; de 3 a 4 años pagan el 50% de la tarifa por persona. Hay suites familiares perfectas para ellos.`;

  if (/desayuno|comida|restaurante|cena|chef|paella|asado/.test(t))
    return `El desayuno está incluido todas las noches. Además ofrecemos chef privado bajo reserva para asados o paellas preparados en la casa. Cocina equipada disponible en todas las suites.`;

  if (/wifi|internet|tv|television/.test(t))
    return `Todas las suites tienen TV e internet WiFi incluido. También hay juegos de mesa y parqueadero privado con seguridad.`;

  if (/ubicacion|donde|como llego|direccion|mapa|panaca|filandia/.test(t))
    return `Estamos en Vereda Kerman, km 5 vía Panaca, Quimbaya, Quindío — a 10 minutos del Parque Panaca y a 45 minutos de Filandia. Te comparto la ubicación exacta por WhatsApp.`;

  if (/beneficio|descuento|mirador|encanto|quimbaya/.test(t))
    return `Huéspedes Casa Yanuba obtienen: 15% en Mirador Encanto (Filandia), 10% en Parque Panaca y 15% en Mirador Quimbaya. ¡Pregunta por estos beneficios al reservar!`;

  if (/reserva|reservar|disponibilidad|booking|airbnb|check/.test(t))
    return `Puedes reservar directo por WhatsApp (+57 313 696 3845) — respondemos en minutos — o consultarnos disponibilidad aquí mismo. También estamos en Booking.com y Airbnb. ¿Qué fechas tienes en mente?`;

  if (/hola|buenas|hello|hey/.test(t))
    return `¡Hola! Bienvenido a Casa Yanuba, un hotel boutique en Quimbaya, Quindío. ¿En qué puedo ayudarte hoy?`;

  if (/gracias|genial|perfecto/.test(t))
    return `¡Con gusto! Si necesitas algo más, aquí estoy. Y si quieres hablar con nuestro equipo, te paso con WhatsApp.`;

  return `Buena pregunta. Para darte información precisa, te recomiendo escribirnos por WhatsApp — respondemos rapidísimo. Mientras tanto, dime si te interesa: precios, suites, reservas, servicios o ubicación.`;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      from: "bot",
      text: "¡Hola! Soy el concierge de Casa Yanuba 🏡 Puedo ayudarte con precios, suites, reservas y más. ¿Qué necesitas?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("open-chatbot", openChat);
    return () => window.removeEventListener("open-chatbot", openChat);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing, open]);

  function send(text: string) {
    const clean = text.trim();
    if (!clean) return;
    setMsgs((m) => [...m, { from: "user", text: clean }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "bot", text: answer(clean) }]);
      setTyping(false);
    }, 900 + Math.random() * 600);
  }

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest-950 text-gold-400 shadow-2xl shadow-black/30 ring-1 ring-white/15 transition-colors hover:bg-forest-800"
      >
        {open ? <X size={24} /> : <Bot size={24} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 left-6 z-50 flex h-[480px] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-forest-950/10"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-forest-950 px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20">
                <Bot size={20} className="text-gold-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-cream">Concierge Yanuba</p>
                <p className="flex items-center gap-1.5 text-[11px] text-cream/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  En línea · responde al instante
                </p>
              </div>
            </div>

            {/* Mensajes */}
            <div className="flex-1 space-y-3 overflow-y-auto bg-cream/60 px-4 py-4">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-sm bg-forest-950 text-cream"
                        : "rounded-bl-sm bg-white text-forest-950 shadow-sm ring-1 ring-forest-950/5"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm ring-1 ring-forest-950/5">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 1, delay: d * 0.15 }}
                        className="h-1.5 w-1.5 rounded-full bg-forest-950/30"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Respuestas rápidas */}
            <div className="flex gap-2 overflow-x-auto border-t border-forest-950/5 bg-white px-4 py-2.5 [scrollbar-width:none]">
              {QUICK.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="shrink-0 rounded-full border border-forest-950/15 px-3 py-1.5 text-[11px] font-medium text-forest-950/70 transition-colors hover:border-terra-500 hover:text-terra-500"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-forest-950/5 bg-white p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta..."
                className="flex-1 rounded-full bg-cream px-4 py-2.5 text-sm outline-none ring-1 ring-forest-950/10 focus:ring-terra-500"
              />
              <button
                type="submit"
                aria-label="Enviar"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-950 text-gold-400 transition-colors hover:bg-forest-800"
              >
                <Send size={16} />
              </button>
            </form>

            {/* Handoff WhatsApp */}
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366]/10 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#128C4B] transition-colors hover:bg-[#25D366]/20"
            >
              <MessageCircle size={13} />
              Hablar con el equipo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
