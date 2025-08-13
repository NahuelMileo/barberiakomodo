"use client";

import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { Easing, motion } from "framer-motion";
const easeOut: Easing = [0.33, 1, 0.68, 1];

const Footer = () => {
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

  const itemVariants = {
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

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.footer
      className="bg-muted border-border/50 border-t py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-4"
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <motion.h3
              className="bg-gradient-primary mb-4 bg-clip-text text-3xl font-bold text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              KOMODO
            </motion.h3>
            <motion.div
              className="flex space-x-4"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              <motion.a
                href="#"
                className="bg-card hover:bg-primary/10 group rounded-lg p-2 transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <SiWhatsapp className="text-muted-foreground group-hover:text-primary h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-card hover:bg-primary/10 group rounded-lg p-2 transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <SiInstagram className="text-muted-foreground group-hover:text-primary h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-foreground mb-4 font-semibold"
              variants={linkVariants}
            >
              Links
            </motion.h4>
            <motion.ul
              className="space-y-2"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {[
                "Inicio",
                "Servicios",
                "Sobre nosotros",
                "Galería",
                "Contactanos",
              ].map((link) => (
                <motion.li key={link} variants={linkVariants}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    whileHover={{
                      x: 5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-foreground mb-4 font-semibold"
              variants={linkVariants}
            >
              Información de contacto
            </motion.h4>
            <motion.div
              className="text-muted-foreground space-y-2"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <motion.p variants={linkVariants}>Madrid 4030</motion.p>
              <motion.p variants={linkVariants}>Chuy, Uruguay</motion.p>
              <motion.p
                className="mt-4"
                variants={linkVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                +598 99 483 830
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-border/50 mt-12 flex flex-col items-center justify-center border-t pt-8 md:flex-row"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="text-muted-foreground text-sm"
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            © 2025 Barbería Komodo. Todos los derechos reservados.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
