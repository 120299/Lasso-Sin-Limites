"use client";
import { motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { Project } from "@/types/strapi";

export const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-zinc-950/40 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        <div className="relative aspect-[16/10] bg-zinc-50 border-b">
          <img
            src={project.imageUrl}
            className="w-full h-full object-contain p-12"
          />
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-white rounded-full shadow-lg hover:text-red-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-8 md:p-12 text-center">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
            {project.category}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mt-3 mb-5 tracking-tight">
            {project.name}
          </h2>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto">
            {project.description}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-zinc-900 text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
          >
            Ver proyecto en vivo <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
