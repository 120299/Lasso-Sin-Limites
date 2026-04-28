import React from "react";
import { SERVICES_DATA } from "@/data/data";

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        {/* Grid de 3 columnas con formato horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <a
              key={service.id}
              href={service.link}
              className="group relative flex aspect-video (16/9) w-full flex-col justify-end overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/5"
              style={{ aspectRatio: "16 / 9" }}
            >
              {/* Contenedor de Video */}
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={service.image}
                  className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-110"
                >
                  <source src={service.video} type="video/webm" />
                </video>

                {/* Capa de fondo oscurecido (Overlay) */}
                {/* 'bg-black/40' da ese toque oscuro constante, 'group-hover:bg-black/20' lo aclara un poco al pasar el ratón */}
                <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/30" />

                {/* Degradado extra en la base para el texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="relative z-10 p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-300 text-xs md:text-sm line-clamp-2 font-light leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>

                {/* Línea decorativa que crece al hacer hover */}
                <div className="mt-4 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Brillo sutil en el borde al hacer hover */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-2xl transition-colors duration-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
