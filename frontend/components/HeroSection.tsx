"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { phoneMockup1, phoneMockup2, phoneMockup3 } from "@/assets";

const PROJECT_SETS = [
  {
    id: 1,
    images: [phoneMockup1, phoneMockup2, phoneMockup3],
  },
];

export const HeroSection = () => {
  const [viewIndex, setViewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getPos = (offset: number) => (viewIndex + offset) % 3;

  return (
    <section className="relative min-h-[100dvh] pt-14 lg:pt-0 overflow-hidden gradiente-mixto flex items-center">
      <div className="container relative z-10 mx-auto px-4">
        {/* Grid principal: Jerarquía visual corregida */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* COLUMNA IZQUIERDA: Texto responsivo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-center lg:text-left items-center lg:items-start z-30"
          >
            <motion.span className="inline-block px-3 py-1 mb-4 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase bg-primary/10 text-primary rounded-full">
              8 Años Impulsando Ideas
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-foreground text-balance">
              Tu visión hecha <br className="hidden sm:block" />
              <span className="text-gradient">software de impacto.</span>
            </h1>

            {/* IMAGEN MÓVIL/TABLET: Espacio compactado */}
            <div className="lg:hidden w-full max-w-md sm:max-w-lg h-[280px] sm:h-[350px] relative flex items-center justify-center my-4 sm:my-8">
              <div className="relative w-full h-full flex items-center justify-center scale-90 sm:scale-100">
                <motion.div
                  key={`m-main-${getPos(0)}`}
                  transition={{ duration: 0.8 }}
                  className="relative z-20 animate-float"
                >
                  <Image
                    src={PROJECT_SETS[0].images[getPos(0)]}
                    alt="App"
                    width={180}
                    height={180}
                    className="w-36 sm:w-48 drop-shadow-2xl"
                  />
                </motion.div>
                <div className="absolute left-2 sm:left-4 opacity-70 z-10 animate-float-delayed scale-75">
                  <Image
                    src={PROJECT_SETS[0].images[getPos(1)]}
                    alt="Side"
                    width={150}
                    height={150}
                    className="w-28 sm:w-36"
                  />
                </div>
                <div className="absolute right-2 sm:right-4 opacity-70 z-10 animate-float-slow scale-75">
                  <Image
                    src={PROJECT_SETS[0].images[getPos(2)]}
                    alt="Side"
                    width={150}
                    height={150}
                    className="w-28 sm:w-36"
                  />
                </div>
              </div>
            </div>

            {/* Descripción optimizada con text-pretty */}
            <p className="mt-2 lg:mt-8 text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg lg:max-w-xl text-pretty leading-relaxed mx-auto lg:mx-0">
              No solo escribimos código; diseñamos soluciones rentables. Nos
              encargamos de la tecnología para que tú lideres tu negocio.
            </p>

            <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                variant={"coral"}
                className="px-10 h-14 rounded-2xl font-bold text-lg shadow-xl shadow-coral/20"
              >
                Cotizar Proyecto
              </Button>
              <Button
                variant={"outline"}
                className="px-10 h-14 rounded-2xl border-foreground/10 font-bold text-lg"
              >
                Ver Portafolio
              </Button>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Desktop */}
          <div className="hidden lg:flex relative h-[600px] w-full max-w-2xl mx-auto items-center justify-center overflow-visible">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`d-main-${getPos(0)}`}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 animate-float"
              >
                <Image
                  src={PROJECT_SETS[0].images[getPos(0)]}
                  alt="Main"
                  width={280}
                  height={280}
                  className="w-64 lg:w-72 drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] object-contain"
                />
              </motion.div>
              <motion.div
                key={`d-left-${getPos(1)}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                className="absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-10 animate-float-delayed"
              >
                <Image
                  src={PROJECT_SETS[0].images[getPos(1)]}
                  alt="Left"
                  width={220}
                  height={220}
                  className="w-48 xl:w-56 opacity-90"
                />
              </motion.div>
              <motion.div
                key={`d-right-${getPos(2)}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                className="absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-10 animate-float-slow"
              >
                <Image
                  src={PROJECT_SETS[0].images[getPos(2)]}
                  alt="Right"
                  width={220}
                  height={220}
                  className="w-48 xl:w-56 opacity-90"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
