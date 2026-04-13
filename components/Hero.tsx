"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import fondoK from "../public/fondoK.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={fondoK}
          alt="Barbería Komodo"
          fill
          priority
          className="object-cover"
        />
        {/* Simple dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow text */}
          <motion.p
            className="mb-6 text-sm font-medium tracking-[0.3em] uppercase text-white/70"
            initial={{ opacity: 0, y: 10 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Chuy, Uruguay
          </motion.p>

          {/* Main headline */}
          <motion.h1
            className="font-serif text-5xl font-normal tracking-tight text-white md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Barbería Komodo
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            className="mx-auto my-8 h-px w-24 bg-white/30"
            initial={{ scaleX: 0 }}
            animate={isLoaded ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Tagline */}
          <motion.p
            className="mx-auto max-w-xl text-lg font-light leading-relaxed text-white/80 md:text-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Cortes con precisión y estilo. Donde la tradición 
            se encuentra con el cuidado moderno.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="min-w-[200px] bg-white px-8 py-6 text-sm font-medium tracking-wide uppercase text-black transition-all duration-300 hover:bg-white/90"
              >
                Reservar cita
              </Button>
            </Link>
            <Link href="#services">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[200px] border border-white/30 bg-transparent px-8 py-6 text-sm font-medium tracking-wide uppercase text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                Ver servicios
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-white/50">
            Scroll
          </span>
          <div className="h-8 w-px bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
