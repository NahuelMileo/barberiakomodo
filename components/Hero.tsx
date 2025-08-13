"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import fondoK from "../public/fondoK.png";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image using next/image with priority */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={fondoK}
          alt="Fondo Komodo"
          fill
          priority
          className={`object-cover transition-all duration-1000 ease-out ${
            isLoaded ? "scale-100" : "scale-110"
          }`}
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px) scale(1.05)`,
          }}
        />

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="animate-pulse-slow absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-8">
            <h1 className="relative text-5xl font-bold tracking-wider text-white md:text-7xl lg:text-9xl">
              Komodo
            </h1>

            <p
              className={`mt-4 text-xl font-light tracking-wide text-gray-300 transition-all duration-700 ease-out md:text-2xl ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "0.9s" }}
            >
              Barbería
            </p>
          </div>

          <div
            className={`flex flex-col items-center justify-center gap-6 transition-all duration-700 ease-out sm:flex-row ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "1.1s" }}
          >
            <Button
              size="lg"
              className="group relative transform overflow-hidden bg-red-800 px-12 py-6 text-lg transition-all duration-300 ease-out hover:scale-105 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-500/30 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="relative z-10">Reservar ahora</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group relative transform overflow-hidden border-2 border-white/70 bg-transparent px-12 py-6 text-lg text-white backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:bg-white hover:text-black hover:shadow-xl hover:shadow-white/20 active:scale-95"
            >
              <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
              <span className="relative z-10">Ver galería</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
