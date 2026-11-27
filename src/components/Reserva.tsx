"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
  Users,
} from "lucide-react";
import { PHOTOS, RATES, SITE, STAY_OPTIONS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Reserva() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [option, setOption] = useState(STAY_OPTIONS[0].id);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const a = new Date(checkIn).getTime();
    const b = new Date(checkOut).getTime();
    const d = Math.round((b - a) / 86400000);
    return d > 0 ? d : 0;
  }, [checkIn, checkOut]);

  const selected = STAY_OPTIONS.find((o) => o.id === option)!;

  const waMessage = useMemo(() => {
    return encodeURIComponent(
      `Hola, quiero hacer una reserva en Casa Yanuba.\n\n` +
        `Modalidad: ${selected.name}\n` +
        `Check-in: ${checkIn || "por definir"}\n` +
        `Check-out: ${checkOut || "por definir"}\n` +
        `Huéspedes: ${guests}\n` +
        `Noches: ${nights || "por definir"}\n\n` +
        `¿Me pueden confirmar disponibilidad y valor total?`
    );
  }, [selected, checkIn, checkOut, guests, nights]);

  return (
    <section id="reservas" className="relative overflow-hidden bg-forest-950 py-24 text-cream lg:py-32">
      {/* Imagen de fondo sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${PHOTOS.piscina})`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                05 — Reservas
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight lg:text-6xl">
                Reserva directa,
                <br />
                <em className="font-light italic text-cream/70">
                  mejor tarifa garantizada
                </em>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/60">
                Reserva por suite o la casa completa. Escríbenos por WhatsApp
                para confirmar disponibilidad — respondemos en minutos.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 space-y-4">
                {RATES.slice(0, 3).map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4"
                  >
                    <span className="text-sm text-cream/75">{r.label}</span>
                    <span className="font-display text-gold-400">
                      desde ${r.low!.toLocaleString("es-CO")}
                    </span>
                  </div>
                ))}
                <p className="pt-2 text-xs text-cream/45">
                  Tarifa baja y alta temporada · niños y adicionales con
                  condiciones especiales · precio final por cotización
                </p>
              </div>
            </Reveal>
          </div>

          {/* Widget */}
          <Reveal delay={0.15}>
            <div className="rounded-[2rem] bg-cream p-8 text-forest-950 shadow-2xl lg:p-10">
              <div className="flex items-center gap-3">
                <CalendarDays size={20} className="text-terra-500" />
                <h3 className="font-display text-2xl font-medium">
                  Consulta tu estadía
                </h3>
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <span className="field-label">Modalidad</span>
                  <div className="grid grid-cols-2 gap-3">
                    {STAY_OPTIONS.map((o) => (
                      <button
                        key={o.id}
                        onClick={() => setOption(o.id)}
                        className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all ${
                          option === o.id
                            ? "border-terra-500 bg-terra-500/10 text-forest-950"
                            : "border-forest-950/15 text-forest-950/60 hover:border-forest-950/30"
                        }`}
                      >
                        {o.name}
                        <span className="mt-1 block text-[11px] font-normal text-forest-950/50">
                          desde $
                          {o.priceFrom.toLocaleString("es-CO")}/noche
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="field-label" htmlFor="checkin">
                      Check-in
                    </label>
                    <input
                      id="checkin"
                      type="date"
                      className="field"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={today || undefined}
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="checkout">
                      Check-out
                    </label>
                    <input
                      id="checkout"
                      type="date"
                      className="field"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || today || undefined}
                    />
                  </div>
                </div>

                <div>
                  <label className="field-label" htmlFor="guests">
                    Huéspedes
                  </label>
                  <div className="relative">
                    <Users
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-forest-950/40"
                    />
                    <select
                      id="guests"
                      className="field appearance-none pl-11"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      {[2, 3, 4, 5, 6, 8, 10, 12, 15, 18].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "persona" : "personas"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {nights > 0 && (
                  <div className="rounded-xl bg-forest-950/5 px-5 py-4 text-sm">
                    <span className="text-forest-950/60">
                      {nights} {nights === 1 ? "noche" : "noches"} · tarifa
                      desde
                    </span>
                    <span className="float-right font-display text-xl font-semibold text-terra-500">
                      $
                      {(selected.priceFrom * nights).toLocaleString("es-CO")}
                    </span>
                    <p className="mt-1 text-[11px] text-forest-950/45">
                      Valor estimado por WhatsApp — el precio final depende de
                      temporada y disponibilidad.
                    </p>
                  </div>
                )}

                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all hover:brightness-110 hover:shadow-lg"
                >
                  <MessageCircle size={18} />
                  Reservar por WhatsApp
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <p className="text-center text-[11px] text-forest-950/45">
                  También disponible en Booking.com y Airbnb
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
