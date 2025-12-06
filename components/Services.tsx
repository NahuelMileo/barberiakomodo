"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Crown, Eye, User, Feather, Globe } from "lucide-react";
import haircutImage from "../public/corte.jpg";
import beardImage from "../public/beard-service.jpg";
import mechas from "../public/mechas.jpg";
import global from "../public/global.jpg";
import Image from "next/image";
import { Easing, motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Corte de pelo",
      description: "Cortes a mano, adaptados a tu estilo y forma de cara.",
      price: "$350",
      image: haircutImage,
      features: [
        "Lavado y peinado",
        "Consulta rápida de estilo",
        "Toques finales",
      ],
    },
    {
      icon: User,
      title: "Corte de barba",
      description: "Perfilado y modelado clásico, para dejarla prolija.",
      price: "$200",
      image: beardImage,
      features: ["Limpieza de bordes", "Perfilado preciso"],
    },
    {
      icon: Eye,
      title: "Cejas",
      description:
        "Damos forma y limpieza a tus cejas para que queden naturales y prolijas.",
      price: "$50",
      image: haircutImage,
      features: ["Limpieza y recorte", "Consulta rápida de forma"],
    },
    {
      icon: Crown,
      title: "Corte + barba",
      description:
        "Todo en uno: corte de pelo y cuidado de barba para salir listo.",
      price: "$450",
      image: beardImage,
      features: ["Corte y peinado", "Perfilado de barba"],
    },
    {
      icon: Feather,
      title: "Mechas",
      description: "Aplicamos mechas para dar luz y estilo a tu cabello.",
      price: "$1800",
      image: mechas,
      features: ["Aplicación de mechas", "Peinado incluido"],
    },
    {
      icon: Globe,
      title: "Global",
      description: "Corte completo para un cambio de look total.",
      price: "$2500",
      image: global,
      features: ["Corte y peinado completo", "Ajuste de estilo"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const easeOut: Easing = [0.33, 1, 0.68, 1];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="services" className="bg-gradient-hero py-24">
      <div className="container mx-auto to-red-950 px-6">
        <motion.div
          className="animate-fade-in mb-16 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="mb-6 text-4xl font-bold md:text-5xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            Servicios
          </motion.h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-3xl text-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
              },
            }}
          >
            Cada servicio se hace con precisión y cuidado, para que te vayas con
            el mejor look y sintiéndote bien.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card
                className="group hover:shadow-elegant border-border/50 bg-card/50 animate-slide-up overflow-hidden backdrop-blur-sm transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <motion.div
                  className="relative h-48 overflow-hidden"
                  variants={cardHoverVariants}
                >
                  <Image
                    fill={true}
                    src={service.image.src || "/placeholder.svg"}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="from-background/80 absolute inset-0 bg-gradient-to-t to-transparent" />
                  <motion.div
                    className="bg-primary/90 absolute top-4 left-4 rounded-lg p-3 backdrop-blur-sm"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <service.icon className="text-primary-foreground h-6 w-6" />
                  </motion.div>
                </motion.div>

                <CardContent className="p-6">
                  <motion.div
                    className="mb-4 flex items-start justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <motion.span
                      className="text-primary text-lg font-semibold"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {service.price}
                    </motion.span>
                  </motion.div>

                  <motion.p
                    className="text-muted-foreground mb-4 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>

                  <motion.ul
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="text-foreground/80 flex items-center text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + 0.5 + featureIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="bg-primary mr-3 h-1.5 w-1.5 rounded-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: index * 0.1 + 0.6 + featureIndex * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          viewport={{ once: true }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
