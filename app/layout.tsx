import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barbería Komodo | Cortes y Estilos Profesionales",
  description:
    "Barbería Komodo: Experiencia en cortes de pelo, cuidado de barba y estilo personalizado. Salí siempre listo y con confianza.",
  keywords: [
    "barbería",
    "cortes de pelo",
    "cuidado de barba",
    "Komodo",
    "estilo masculino",
  ],
  authors: [{ name: "Barbería Komodo" }],
  creator: "Barbería Komodo",
  publisher: "Barbería Komodo",
  metadataBase: new URL("https://tusitio.com"), // reemplaza con tu dominio real
  openGraph: {
    title: "Barbería Komodo | Cortes y Estilos Profesionales",
    description:
      "Descubre nuestros cortes de pelo y cuidado de barba en Barbería Komodo. Estilo y calidad en cada visita.",
    url: "https://tusitio.com",
    siteName: "Barbería Komodo",
    images: [
      {
        url: "/og-image.jpg", // crea una imagen OG atractiva
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbería Komodo | Cortes y Estilos Profesionales",
    description:
      "Descubre nuestros cortes de pelo y cuidado de barba en Barbería Komodo. Estilo y calidad en cada visita.",
    images: ["/og-image.jpg"],
    creator: "@BarberiaKomodo", // opcional, si tienen cuenta de Twitter
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
