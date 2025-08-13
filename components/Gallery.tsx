"use client";
import haircutImage from "../public/corte.jpg";
import beardImage from "../public/beard-service.jpg";
import toolsImage from "../public/maquinas.jpg";
import interiorImage from "../public/fondoK.jpg";
import Image from "next/image";
import { Easing, motion } from "framer-motion";

const Gallery = () => {
  const galleryItems = [
    {
      image: haircutImage,
      title: "Cortes de Precisión",
      category: "Cortes de Pelo",
    },
    // {
    //   image: beardImage,
    //   title: "Arte en Barbas",
    //   category: "Cuidado de Barba",
    // },
    {
      image: toolsImage,
      title: "Herramientas Profesionales",
      category: "Equipamiento",
    },
    {
      image: interiorImage,
      title: "Nuestro Espacio",
      category: "Ambiente",
    },
    {
      image: haircutImage,
      title: "Transformación de Estilo",
      category: "Antes y Después",
    },
    {
      image: beardImage,
      title: "Cuidado Clásico",
      category: "Tradicional",
    },
  ];
  const easeOut: Easing = [0.33, 1, 0.68, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
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

  return (
    <section id="gallery" className="bg-gradient-hero py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="mb-6 text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Galería
          </motion.h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-3xl text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Mira algunos de los cortes, estilos y trabajos que hacemos en
            Komodo. Aquí vas a ver el resultado real de nuestra dedicación y
            experiencia, para que te inspires y veas que acá siempre vas a salir
            bien.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-card shadow-elegant hover:shadow-glow relative overflow-hidden rounded-2xl transition-all duration-500"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="aspect-square overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative h-full w-full"
                >
                  <Image
                    fill={true}
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="relative h-full w-full object-cover"
                  />
                </motion.div>
              </div>

              <motion.div
                className="from-background/90 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute right-6 bottom-6 left-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <motion.div
                    className="text-primary mb-1 text-sm font-medium"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    {item.category}
                  </motion.div>
                  <motion.h3
                    className="text-foreground text-xl font-bold"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>
              </motion.div>

              <motion.div
                className="bg-primary/90 text-primary-foreground absolute top-4 left-4 rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05 }}
              >
                {item.category}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="text-muted-foreground inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-primary h-px w-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            ></motion.div>
            <span className="text-sm font-medium">
              Siguenos para más transformaciones
            </span>
            <motion.div
              className="bg-primary h-px w-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
