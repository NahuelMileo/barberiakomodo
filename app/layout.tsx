import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import foto from "../public/fondoK.jpg";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barbería Komodo | Barbería en Chuy, Uruguay",
  description:
    "Barbería Komodo en Chuy, Uruguay. Cortes de cabello, arreglos de barba y estilo moderno para hombres. ¡Visítanos hoy mismo!",
  openGraph: {
    title: "Barbería Komodo | Chuy, Uruguay",
    description: "Cortes modernos y barbería de confianza en Chuy.",
    url: "https://barberiakomodo.com",
    siteName: "Barbería Komodo",
    images: [
      {
        url: foto.src,
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_UY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
