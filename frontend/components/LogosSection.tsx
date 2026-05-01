"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import { useEffect, useRef } from "react";
import { Stack } from "@/types/strapi";

interface LogosSectionProps {
  title: string;
  data: Stack[];
  backgorund: string;
}

export const LogosSection = ({
  title,
  data,
  backgorund,
}: LogosSectionProps) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const startAnimation = async () => {
    await controls.start({
      x: ["0%", "-33.33%"],
      transition: {
        duration: 20, // Un poco más lento para mejor lectura
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (data.length > 0) {
      startAnimation();
    }
  }, [controls, data]); // 2. Añadido data a dependencias

  return (
    <section className={`py-14 ${backgorund} overflow-hidden`}>
      <div className="container mx-auto px-4 my-2">
        <p className="text-center text-md md:text-xl font-bold text-zinc-500 uppercase tracking-widest">
          {title}
        </p>
      </div>

      <div className="relative flex w-full" ref={containerRef}>
        <div
          className="flex overflow-hidden cursor-grab active:cursor-grabbing w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <motion.div
            className="flex flex-nowrap gap-1 md:gap-10 lg:gap-16 items-center py-10"
            animate={controls}
            drag="x"
            dragConstraints={containerRef}
            onDragStart={() => controls.stop()}
            onDragEnd={() => startAnimation()}
          >
            {data.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="relative w-28 h-12 md:w-36 md:h-14 flex-shrink-0"
              >
                <Image
                  src={partner.logoUrl}
                  alt={`Logo de ${partner.name}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 144px"
                  unoptimized={partner.logoUrl}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
