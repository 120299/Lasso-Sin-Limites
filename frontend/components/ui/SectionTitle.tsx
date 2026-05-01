"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description?: string; // Añadimos soporte para el párrafo
  className?: string;
}

export const TitleSection = ({ title, description, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      // px-4 evita que el texto toque los bordes en móviles
      className={cn("text-center mx-auto px-2")}
    >
      <h2
        className={cn(
          "font-bold tracking-tight",
          "text-3xl sm:text-4xl md:text-5xl lg:text-5xl", // Escala fluida
          "text-balance", // Evita huérfanos y mejora la lectura
          className,
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "my-2 text-base md:text-lg text-muted-foreground text-pretty ", // Mejora la distribución de líneas
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
