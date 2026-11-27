import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel Yanuba — Finca Hotel Luxury en Quimbaya, Quindío",
  description:
    "Finca Hotel Luxury en Quimbaya, Quindío. Donde el lujo se encuentra con la naturaleza: descanso, confort y experiencias en medio del cafetal.",
  keywords: [
    "hotel quimbaya",
    "finca hotel quindio",
    "hotel luxury eje cafetero",
    "hotel rural quindio",
    "hotel yanuba",
  ],
  openGraph: {
    title: "Hotel Yanuba — Finca Hotel Luxury en Quimbaya, Quindío",
    description:
      "Donde el lujo se encuentra con la naturaleza: descanso, confort y experiencias en el cafetal.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col">{children}</body>
    </html>
  );
}
