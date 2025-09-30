import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import foto from "../public/fondoK.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
