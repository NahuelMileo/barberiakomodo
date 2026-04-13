"use client";

import { SiWhatsapp, SiInstagram } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Nosotros", href: "#about" },
    { name: "Galería", href: "#gallery" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link href="#home" className="mb-8">
            <span className="font-serif text-3xl font-normal tracking-wide text-foreground">
              KOMODO
            </span>
          </Link>

          {/* Navigation */}
          <nav className="mb-8 flex flex-wrap justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="mb-12 flex gap-4">
            <a
              href="https://wa.me/+59899483830"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              <SiWhatsapp className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              <SiInstagram className="h-4 w-4" />
            </a>
          </div>

          {/* Divider */}
          <div className="mb-8 h-px w-24 bg-border" />

          {/* Contact Info */}
          <div className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">
              Madrid 4030, Chuy, Uruguay
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              +598 99 483 830
            </p>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Barbería Komodo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
