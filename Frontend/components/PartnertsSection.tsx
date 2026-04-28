"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partners } from "@/data/data";

export const PartnertsSection = () => {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-gray-100 dark:bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <p className="text-center text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
          Nuestras Alianzas Estratégicas
        </p>
      </div>

      <div className="relative flex w-full">
        <div
          className="flex overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <motion.div
            className="flex flex-nowrap gap-16 md:gap-24 items-center py-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{ scale: 1.05 }} // Pequeño efecto de zoom al pasar el mouse
                className="relative w-36 h-14 flex-shrink-0 cursor-pointer"
              >
                <Image
                  src={partner.logoUrl}
                  alt={`Logo de ${partner.name}`}
                  fill
                  className="object-contain" // Mantiene la proporción y colores originales
                  sizes="150px"
                  unoptimized={partner.logoUrl.endsWith(".svg")}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
