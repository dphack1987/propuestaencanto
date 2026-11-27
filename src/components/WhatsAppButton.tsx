import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola, tengo una consulta sobre Casa Yanuba")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-4 pl-5 pr-6 text-white shadow-2xl shadow-black/30 transition-all hover:pr-8 hover:shadow-[#25D366]/40"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <MessageCircle size={22} className="relative" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all duration-300 group-hover:max-w-40">
        WhatsApp
      </span>
    </a>
  );
}
