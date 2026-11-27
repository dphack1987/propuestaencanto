import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Casa Yanuba — Hotel Boutique Quimbaya",
    short_name: "Casa Yanuba",
    description:
      "Hotel boutique en Quimbaya, Quindío. Seis suites, piscina, jacuzzis y reserva directa.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1510",
    theme_color: "#0b1510",
    lang: "es",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
