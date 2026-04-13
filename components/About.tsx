"use client";

import { Award, Users, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { icon: Award, value: "5+", label: "Años" },
    { icon: Users, value: "500+", label: "Clientes" },
    { icon: Star, value: "4.9", label: "Rating" },
  ];

  return (
    <section id="about" className="bg-card py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                fill
                src="/maquinas.jpg"
                alt="Herramientas de barbería profesional"
                className="object-cover"
              />
            </div>
            
            {/* Stats overlay */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-background p-8 rounded-lg shadow-2xl md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex gap-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-serif text-3xl font-normal text-foreground md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2 lg:pl-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Sobre nosotros
            </p>
            
            <h2 className="mb-8 font-serif text-4xl font-normal text-foreground md:text-5xl leading-tight">
              Cortes con experiencia y dedicación
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                En Komodo sabemos que un buen corte hace la diferencia. Con años de 
                experiencia y técnicas clásicas, nos aseguramos de que te vayas 
                contento y con un estilo que te quede bien.
              </p>
              <p>
                Cada corte y afeitada la hacemos con dedicación y cuidado. Queremos 
                que te sientas cómodo, como en casa, y que siempre quieras volver.
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                "Atención personalizada",
                "Técnicas clásicas",
                "Productos de calidad",
                "Ambiente relajado",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
