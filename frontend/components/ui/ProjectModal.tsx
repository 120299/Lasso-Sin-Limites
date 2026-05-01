"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Project } from "@/types/strapi";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-zinc-900 rounded-[2rem] max-w-2xl w-full max-h-[85vh] overflow-y-auto no-scrollbar shadow-2xl relative border border-zinc-200 dark:border-zinc-800"
          >
            {/* Botón de cierre flotante y fijo */}
            <div className="sticky top-0 z-50 w-full flex justify-end p-4 pointer-events-none">
              <button
                onClick={onClose}
                className="pointer-events-auto p-2 bg-black/50 hover:bg-red-500 backdrop-blur-xl rounded-full text-white transition-all shadow-lg"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenedor de Imagen con ajuste negativo para el header */}
            <div className="relative w-full overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full max-h-[300px] object-contain" // 'object-cover' llena el espacio sin dejar huecos
              />
            </div>

            {/* Contenido */}
            <div className="px-6 pb-10 pt-2 sm:px-12 sm:pb-12 relative">
              <header className="flex flex-col gap-2 my-6">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
                  {project.name}
                </h2>
              </header>

              <div className="space-y-6">
                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed line-clamp-4 text-justify">
                  {project.description}
                </p>

                {/* Tags / Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="pt-4">
                  <a
                    href="#" // Aquí iría project.url si existe
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] gap-2"
                  >
                    Ver Proyecto <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
