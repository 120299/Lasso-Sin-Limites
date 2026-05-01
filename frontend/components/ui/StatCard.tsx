"use client";

import { animate, motion, useInView } from "framer-motion";
import { Stat, CounterProps } from "@/types/strapi";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import DynamicIcon from "./DynamicIcon";

export const Counter = ({
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

// --- 2. COMPONENTE MOLECULAR: StatCard ---
// Exportado individualmente por si quieres mostrar una sola card fuera de la sección
interface StatCardProps {
  stat: Stat;
  index: number;
}

export const StatCard = ({ stat, index }: StatCardProps) => (
  <motion.div
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
      <DynamicIcon name={stat.icon} className={cn("size-6", stat.color)} />
    </div>

    {/* Valor y Label */}
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
      <p className="text-slate-400 font-medium uppercase tracking-wider text-xs text-balance">
        {stat.label}
      </p>
    </div>

    {/* Línea decorativa */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full group-hover:w-1/2 transition-all duration-300" />
  </motion.div>
);
