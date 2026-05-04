"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Stack } from "@/types/strapi";

interface LogosSectionProps {
  title: string;
  data: Stack[];
  background: string; // Corregido typo de 'backgorund'
}

export const LogosSection = ({
  title,
  data,
  background,
}: LogosSectionProps) => {
  // Duplicamos los datos para crear el efecto de scroll infinito sin saltos
  const duplicatedData = [...data];

  return (
    <section className={`py-16 ${background} overflow-hidden`}>
      <div className="container mx-auto px-4 mb-10">
        <p className="text-center text-sm md:text-base font-semibold text-zinc-500 uppercase tracking-[0.2em]">
          {title}
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Gradientes laterales para suavizar la entrada y salida */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 z-10 bg-gradient-to-r from-inherit to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 z-10 bg-gradient-to-l from-inherit to-transparent pointer-events-none" />

        <motion.div
          className="flex flex-nowrap gap-12 md:gap-20 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          // Pausa la animación cuando el usuario pone el mouse encima
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedData.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="relative w-10 sm:w-10 md:w-14 lg:w-30 h-12  md:h-16 flex-shrink-0"
            >
              {partner.logoUrl && (
                <Image
                  src={partner.logoUrl}
                  alt={`Logo de ${partner.name}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
