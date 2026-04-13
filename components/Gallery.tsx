"use client";

import haircutImage from "../public/corte.jpg";
import beardImage from "../public/beard-service.jpg";
import toolsImage from "../public/maquinas.jpg";
import interiorImage from "../public/fondoK.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const Gallery = () => {
  const galleryItems = [
    {
      image: haircutImage,
      title: "Cortes de Precisión",
      span: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
    },
    {
      image: toolsImage,
      title: "Herramientas Profesionales",
      span: "col-span-1 row-span-1",
    },
    {
      image: interiorImage,
      title: "Nuestro Espacio",
      span: "col-span-1 row-span-1",
    },
    {
      image: beardImage,
      title: "Cuidado Clásico",
      span: "col-span-1 row-span-1 md:col-span-2",
    },
  ];

  return (
    <section id="gallery" className="bg-background py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Galería
            </p>
            <h2 className="font-serif text-4xl font-normal text-foreground md:text-5xl">
              Nuestro trabajo
            </h2>
          </div>
          <p className="mt-6 max-w-md text-muted-foreground md:mt-0 md:text-right">
            Resultados reales de nuestra dedicación y experiencia.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${item.span}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-square h-full w-full overflow-hidden">
                <Image
                  fill
                  src={item.image}
                  alt={item.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />
                
                {/* Title on hover */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-medium text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 text-muted-foreground">
            <div className="h-px w-12 bg-border" />
            <span className="text-sm font-medium tracking-wider">
              Más en Instagram
            </span>
            <div className="h-px w-12 bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
