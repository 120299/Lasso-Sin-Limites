"use client";
import { motion } from "framer-motion";
import { Project } from "@/types/strapi";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05 }}
      onClick={() => onClick(project)}
      className="group relative flex flex-col bg-white border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all cursor-pointer h-full"
    >
      {/* Contenedor Imagen: Forzado a Cuadrado y Limpio */}
      <div className="relative aspect-square bg-zinc-50 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay sutil al hover */}
        <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Textos Cortos y Responsivos */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
            {project.category}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-zinc-900 mt-1 line-clamp-1">
            {project.name}
          </h3>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-zinc-50 pt-4">
          <div className="flex gap-1.5 overflow-hidden">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag.id} className="text-[10px] text-zinc-400">
                #{tag.name}
              </span>
            ))}
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors">
            <PlusIcon />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
