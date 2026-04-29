"use client";

import { animate, motion, useInView } from "framer-motion";
import { TitleSection } from "./TitleSection";
import { stats, type Stat, CounterProps } from "@/data/data";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

const Counter = ({
  from,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
}: CounterProps) => {
  const [value, setValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        onUpdate: (v) =>
          setValue(
            decimals > 0 ? parseFloat(v.toFixed(decimals)) : Math.floor(v),
          ),
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section
      id="stats"
      className="py-24 bg-slate-950 text-white overflow-hidden relative"
    >
      {/* Decoración de fondo (Opcional) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(112, 10, 10, 0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <TitleSection title="Disponibilidad y Soporte Real" />
          {/* Optimización de texto: justify con balanceo para evitar huecos en móviles */}
          <p className="mt-4 text-justify md:text-center text-balance hyphens-auto tracking-tight md:tracking-normal text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Nuestra plataforma procesa miles de transacciones diarias,
            garantizando seguridad y escalabilidad para cada usuario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat: Stat, index: number) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-primary/50 transition-colors"
            >
              {/* Icono con Efecto */}
              <div
                className={cn(
                  "size-12 rounded-xl flex items-center justify-center mb-6 ring-8 ring-white/5",
                  stat.bgColor,
                )}
              >
                <stat.icon className={cn("size-6", stat.color)} />
              </div>

              {/* Valor */}
              <div className="flex flex-col gap-1">
                <h3 className="text-4xl font-bold tracking-tight text-white">
                  <Counter
                    from={0}
                    to={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.isDecimal ? 1 : 0}
                  />
                </h3>

                {/* Título/Label - text-balance para evitar saltos de línea feos en pantallas pequeñas */}
                <p className="text-slate-400 font-medium uppercase tracking-wider text-xs text-balance">
                  {stat.label}
                </p>
              </div>

              {/* Línea decorativa de hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full group-hover:w-1/2 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
