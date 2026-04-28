"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import { phoneMockup1, phoneMockup2, phoneMockup3 } from "@/assets";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden gradient-hero">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 size-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-40 right-40 size-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100dvh-120px)]">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Tag de experiencia real */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full"
            >
              8 Años de Experiencia y Ejecución Directa
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
            >
              Desarrollamos Tu App y {""}
              <span className="text-gradient">Gestionamos Todo el Resto</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="section-description md:text-xl max-w-xl mx-auto lg:mx-0"
            >
              Expertos en aplicaciones móviles y plataformas web a medida.
              Además, cubrimos el soporte técnico, diseño y merchandising que tu
              empresa necesita. 8 años simplificando la tecnología para que tú
              solo te ocupes de crecer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant={"coral"} size={"lg"} className="px-8 font-bold">
                Iniciar Proyecto
              </Button>
              <Button
                variant={"outline"}
                size={"lg"}
                className="px-8 border-foreground/20 hover:bg-foreground hover:text-background font-bold"
              >
                Servicios 360
              </Button>
            </motion.div>
          </motion.div>

          <div className="relative h-125 md:h-150 lg:h-175">
            {/* Imagen Central: El Producto (App/Web) */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 animate-float"
            >
              <Image
                src={phoneMockup1.src}
                alt="Desarrollo de Software a medida"
                width={192}
                height={192}
                className="w-48 md:w-56 lg:w-64 drop-shadow-2xl"
              />
            </motion.div>

            {/* Imagen Izquierda: Soporte y Gestión */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 animate-float-delayed"
            >
              <Image
                src={phoneMockup2.src}
                alt="Soporte Técnico y Sistemas"
                width={192}
                height={192}
                className="w-40 md:w-48 lg:w-52 opacity-90 drop-shadow-xl"
              />
            </motion.div>

            {/* Imagen Derecha: Diseño y Branding */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 animate-float-slow"
            >
              <Image
                src={phoneMockup3.src}
                alt="Diseño y Merchandising"
                width={192}
                height={192}
                className="w-40 md:w-48 lg:w-52 opacity-90 drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
