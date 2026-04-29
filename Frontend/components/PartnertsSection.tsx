"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Partner } from "@/data/interface";
import { useEffect, useRef } from "react";

interface PartnertsSectionProps {
  title: string;
  data: Partner[];
  backgorund: string;
}

export const PartnertsSection = ({
  title,
  data,
  backgorund,
}: PartnertsSectionProps) => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  // Duplicamos los datos para que el scroll sea infinito y fluido
  const duplicatedData = [...data, ...data, ...data];

  // Función para iniciar la animación infinita
  const startAnimation = async () => {
    await controls.start({
      x: ["0%", "-33.33%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, [controls]);

  return (
    <section
      className={`py-14 md:py-20 ${backgorund} bg-zinc-50 dark:bg-zinc-950 overflow-hidden`}
    >
      <div className="container mx-auto px-4 mb-12">
        <p className="text-center text-md md:text-xl font-bold text-zinc-500 uppercase">
          {title}
        </p>
      </div>

      <div className="relative flex w-full" ref={containerRef}>
        <div
          className="flex overflow-hidden cursor-grab active:cursor-grabbing"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <motion.div
            className="flex flex-nowrap gap-6 md:gap-10 items-center py-4" // Logos más juntos
            animate={controls}
            drag="x"
            // Evita que se salga demasiado de los límites al arrastrar
            dragConstraints={{ left: -2000, right: 0 }}
            onDragStart={() => {
              // Detenemos la animación actual cuando el usuario empieza a arrastrar
              controls.stop();
            }}
            onDragEnd={() => {
              // Al soltar, reiniciamos la animación suavemente
              startAnimation();
            }}
          >
            {duplicatedData.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="relative w-28 h-12 md:w-36 md:h-14 flex-shrink-0"
              >
                <Image
                  src={partner.logoUrl}
                  alt={`Logo de ${partner.name}`}
                  fill
                  className="object-contain pointer-events-none"
                  sizes="150px"
                  unoptimized={partner.logoUrl.endsWith(".svg")}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
