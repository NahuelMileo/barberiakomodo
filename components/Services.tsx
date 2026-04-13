"use client";

import { Scissors, Crown, Sparkles, User } from "lucide-react";
import haircutImage from "../public/corte.jpg";
import beardImage from "../public/beard-service.jpg";
import mechas from "../public/mechas.jpg";
import global from "../public/global.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Corte de pelo",
      description: "Cortes personalizados adaptados a tu estilo y forma de rostro.",
      price: "$350",
      image: haircutImage,
    },
    {
      icon: User,
      title: "Barba",
      description: "Perfilado y modelado clásico para una barba impecable.",
      price: "$200",
      image: beardImage,
    },
    {
      icon: Crown,
      title: "Corte + Barba",
      description: "El servicio completo: corte y cuidado de barba en una sesión.",
      price: "$450",
      image: beardImage,
    },
    {
      icon: Sparkles,
      title: "Mechas",
      description: "Aplicamos mechas para dar luz y dimensión a tu cabello.",
      price: "$1800",
      image: mechas,
    },
  ];

  return (
    <section id="services" className="bg-background py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Nuestros servicios
          </p>
          <h2 className="font-serif text-4xl font-normal text-foreground md:text-5xl lg:text-6xl">
            Lo que ofrecemos
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden rounded-lg bg-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  fill
                  src={service.image.src || "/placeholder.svg"}
                  alt={service.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/30" />
                
                {/* Price badge */}
                <div className="absolute top-6 right-6">
                  <span className="bg-background/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground rounded-full">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <service.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { title: "Cejas", price: "$50" },
            { title: "Global", price: "$2500" },
            { title: "Lavado", price: "$100" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between border-b border-border pb-4"
            >
              <span className="text-lg text-foreground">{item.title}</span>
              <span className="text-muted-foreground">{item.price}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
