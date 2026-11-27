import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Historia from "@/components/Historia";
import Experiencias from "@/components/Experiencias";
import Alojamiento from "@/components/Alojamiento";
import Galeria from "@/components/Galeria";
import Reserva from "@/components/Reserva";
import Testimonios from "@/components/Testimonios";
import Funciones from "@/components/Funciones";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Historia />
        <Experiencias />
        <Alojamiento />
        <Galeria />
        <Reserva />
        <Testimonios />
        <Funciones />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </>
  );
}
