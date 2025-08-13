"use client";

import { Button } from "@/components/ui/button";
import { Award, Users, Star } from "lucide-react";
import Image from "next/image";
// <CHANGE> Added framer-motion imports for animations
import { Easing, motion } from "framer-motion";

const About = () => {
  const stats = [
    { icon: Award, value: "5+", label: "Años de experiencia" },
    { icon: Users, value: "500+", label: "Clientes felices" },
    { icon: Star, value: "4.9", label: "Puntuación" },
  ];

  // <CHANGE> Added animation variants for different elements
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
  const easeOut: Easing = [0.33, 1, 0.68, 1];
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="about" className="bg-background py-24">
      <div className="container mx-auto px-6">
        {/* <CHANGE> Wrapped grid in motion.div with staggered animations */}
        <motion.div
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Content */}
          <motion.div variants={textVariants}>
            <motion.h2
              className="mb-6 text-4xl font-bold md:text-5xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Cortes con experiencia
            </motion.h2>

            {/* <CHANGE> Added staggered animation to paragraphs */}
            <motion.p
              className="text-muted-foreground mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              En Komodo sé que un buen corte hace la diferencia. Con años de
              experiencia y técnicas clásicas, me aseguro de que te vayas
              contento y con un estilo que te quede bien
            </motion.p>

            <motion.p
              className="text-muted-foreground mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Cada corte y afeitada la hacemos con dedicación y cuidado.
              Queremos que te sientas cómodo, como en casa, y que siempre
              quieras volver.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                // <CHANGE> Added individual stat animations with hover effects
                <motion.div
                  key={stat.label}
                  className="text-center"
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="mb-2 flex justify-center">
                    {/* <CHANGE> Added rotation animation to stat icons */}
                    <motion.div
                      className="bg-primary/10 rounded-lg p-3"
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <stat.icon className="text-primary h-6 w-6" />
                    </motion.div>
                  </div>
                  {/* <CHANGE> Added counter animation to stat values */}
                  <motion.div
                    className="text-primary text-2xl font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* <CHANGE> Added button hover animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="hero" size="lg" className="px-8">
                  Meet Our Team
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div className="relative" variants={imageVariants}>
            <motion.div
              className="relative h-[600px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                fill={true}
                src="/maquinas.jpg"
                alt="Professional barber tools"
                className="shadow-elegant w-full rounded-2xl object-cover"
              />
              <div className="from-primary/20 absolute inset-0 rounded-2xl bg-gradient-to-tr to-transparent" />

              {/* Floating Elements */}
              {/* <CHANGE> Added floating animation to award badge */}
              <motion.div
                className="bg-primary/20 absolute -top-4 -right-4 flex h-24 w-24 items-center justify-center rounded-full backdrop-blur-sm"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 15,
                  transition: { duration: 0.3 },
                }}
              >
                <Award className="text-primary h-12 w-12" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
