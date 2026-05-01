import { motion } from "framer-motion";
import { Project } from "@/types/strapi";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      // Ajuste: Redondeado más moderado (2xl) y bordes más finos
      className="group cursor-pointer bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/60 dark:border-white/5 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
    >
      {/* 1. Contenedor de Imagen: Ajuste de padding de la imagen para que no ocupe tanto aire */}
      <div className="relative aspect-video sm:aspect-[4/3] bg-zinc-50/50 dark:bg-zinc-950/30 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-full object-contain p-6 sm:p-8 transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
            <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
          </div>
        </div>
      </div>

      {/* 2. Cuerpo de información: Padding responsivo (p-5 en móvil, p-7 en desktop) */}
      <div className="p-5 sm:p-7 border-t border-zinc-100 dark:border-white/5 flex flex-col gap-4">
        {/* Título: Tamaño fluido text-lg a text-xl */}
        <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.name}
        </h3>

        {/* Tags: Tamaño de fuente mínimo y espaciado ajustado */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag.id}
              className="text-[10px] sm:text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 px-2.5 py-0.5 rounded-md"
            >
              #{tag.name}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] text-zinc-400 self-center ml-1">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Categoría: Altura reducida y tracking optimizado */}
        <div className="w-full">
          <span className="flex items-center justify-center text-[9px] md:text-[10px] tracking-[0.25em] font-black uppercase bg-blue-600 text-white py-1.5 md:py-2 rounded-xl shadow-md">
            {project.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
