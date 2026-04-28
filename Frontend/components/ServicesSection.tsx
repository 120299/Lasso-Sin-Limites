import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICES_DATA } from "@/data/data";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-primary mb-3 font-bold tracking-[0.2em] uppercase text-[10px]">
            <Sparkles size={14} />
            <span>Innovation Lab</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white leading-tight">
            Soluciones para el <br />
            <span className="text-primary italic font-serif">
              futuro digital.
            </span>
          </h2>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            // Asignamos la referencia a una constante en mayúsculas para renderizarla
            const Icon = service.icon;

            return (
              <a
                key={service.id}
                href={service.link}
                className="group relative block h-[350px] w-full overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-primary/20 border border-zinc-200/50 dark:border-white/5"
              >
                {/* Imagen y Fondo */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 dark:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                </div>

                {/* Contenido */}
                <div className="relative z-10 h-full flex flex-col justify-end p-7">
                  {/* Aquí renderizamos el componente dinámicamente */}
                  <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 group-hover:rotate-[360deg] transition-transform duration-700">
                    <Icon size={20} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 text-xs mb-5 line-clamp-2 group-hover:text-zinc-200 transition-colors">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                    <span>Explorar</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

                {/* Glow Border */}
                <div className="absolute inset-0 border-[1px] border-transparent group-hover:border-primary/40 rounded-[2rem] transition-colors duration-500" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
