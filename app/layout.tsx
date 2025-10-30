import type { Metadata } from "next";
import { Cinzel_Decorative, Literata } from "next/font/google";
import "./globals.css";
import ClientCosmicBackground from "@/components/ClientCosmicBackground";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
});

const literata = Literata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-literata",
});

export const metadata: Metadata = {
  title: "Máxima La Pitonisa del Amor - Vidente Especializada en Amor",
  description:
    "20 años creando destinos de amor. Tarot, amarres de amor, hechizos y limpiezas energéticas. Tu destino sentimental comienza aquí.",
  keywords:
    "vidente, tarot, amarres de amor, hechizos, limpiezas energéticas, pitonisa, amor, destino",
  authors: [{ name: "Máxima La Pitonisa del Amor" }],
  openGraph: {
    title: "Máxima La Pitonisa del Amor",
    description:
      "20 años creando destinos de amor. Tu destino sentimental comienza aquí.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cinzelDecorative.variable} ${literata.variable}`}
    >
      <body className="min-h-screen font-body antialiased">
        <ClientCosmicBackground />
        {children}
      </body>
    </html>
  );
}
