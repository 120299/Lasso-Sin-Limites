"use client";

import { motion } from "framer-motion";
import { TitleSection } from "./TitleSection";
import { Category } from "@/types/strapi";

interface ServicesGridProps {
  data: Category[];
}

export default function ServicesGrid({ data }: ServicesGridProps) {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 relative overflow-hidden">
      {/* Decoración de fondo sutil para mantener coherencia */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Encabezado con TitleSection y animación similar a Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <TitleSection
            title="Soluciones Digitales a Medida"
            className="text-gradient"
          />
          <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">
            Transformamos procesos complejos en herramientas fluidas, escalables
            y orientadas al retorno de inversión.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((service, index) => (
            <motion.a
              key={service.id}
              href={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex aspect-video w-full flex-col justify-end overflow-hidden rounded-3xl bg-zinc-900 shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/5"
              style={{ aspectRatio: "16 / 9" }}
            >
              {/* Contenedor de Video/Imagen */}
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={service.imageUrl}
                  className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-110"
                >
                  <source src={service.videoUrl} type="video/webm" />
                </video>

                {/* Capas de Overlay */}
                <div className="absolute inset-0 bg-zinc-950/60 transition-colors duration-500 group-hover:bg-zinc-950/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="relative z-10 p-6 md:p-8">
                {/* text-balance ayuda a que el título del servicio no deje palabras sueltas en tarjetas pequeñas */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight text-balance">
                  {service.title}
                </h3>
                {/* Línea decorativa similar a StatsSection */}
                <div className="mt-5 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Efecto de brillo en borde */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-3xl transition-colors duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
