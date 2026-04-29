"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects as allProjects } from "@/data/data";
import { ChevronDown, X, ExternalLink } from "lucide-react";
import { TitleSection } from "./TitleSection";

const ITEMS_DESKTOP = 6;
const ITEMS_MOBILE = 3;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(ITEMS_DESKTOP);
  const [selectedProject, setSelectedProject] = useState<
    (typeof allProjects)[0] | null
  >(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleCount((prev) =>
        prev <= ITEMS_DESKTOP ? (mobile ? ITEMS_MOBILE : ITEMS_DESKTOP) : prev,
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const allCategories = useMemo(
    () => ["Todos", ...Array.from(new Set(allProjects.map((p) => p.category)))],
    [],
  );

  const filteredProjects = useMemo(() => {
    return activeCategory === "Todos"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <section
      id="portafolio"
      className="py-24 bg-gray-100 dark:bg-zinc-950 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TitleSection title="Proyectos que hablan por nosotros" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Cada proyecto es una oportunidad para crear algo excepcional.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(isMobile ? ITEMS_MOBILE : ITEMS_DESKTOP);
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-white dark:bg-zinc-900 border border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : visibleProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedProject(project)}
                    className="group relative overflow-hidden rounded-[2rem] aspect-[4/3] cursor-pointer bg-zinc-200 shadow-sm border border-black/5"
                  >
                    {/* IMG Estándar con soporte para cualquier URL */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-10" />

                    <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                      <h3 className="text-xl font-bold text-white mb-1 truncate">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white/70 line-clamp-2 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 overflow-hidden">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] bg-white/10 backdrop-blur-md px-2.5 py-1 rounded text-white/90 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="text-[9px] bg-white/20 px-2 py-1 rounded text-white font-bold">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                        <span className="text-[9px] font-bold uppercase bg-blue-600 text-white px-3 py-1.5 rounded-lg truncate max-w-[100px] shrink-0 text-center">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>

        {hasMore && !isLoading && (
          <div className="text-center mt-16">
            <button
              onClick={() =>
                setVisibleCount(
                  (p) => p + (isMobile ? ITEMS_MOBILE : ITEMS_DESKTOP),
                )
              }
              className="px-10 py-4 bg-white dark:bg-zinc-900 border border-border rounded-2xl font-bold text-sm hover:border-primary transition-all active:scale-95 shadow-sm inline-flex items-center gap-2"
            >
              Ver más proyectos <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-zinc-900 rounded-[2.5rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-[2.5rem]"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {selectedProject.title}
                  </h2>
                  <span className="text-xs font-bold bg-blue-600 text-white px-4 py-2 rounded-xl">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-muted-foreground md:text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-semibold bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    className="flex-1 py-4 bg-blue-600 text-white text-center rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  >
                    Visitar Proyecto <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-bold"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-[2rem] aspect-[4/3] bg-white dark:bg-zinc-900 border border-border p-6 flex flex-col justify-end gap-3 animate-pulse">
      <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-md w-3/4"></div>
      <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-full"></div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-2">
          <div className="h-5 w-10 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
          <div className="h-5 w-10 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
        </div>
        <div className="h-7 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-lg"></div>
      </div>
    </div>
  );
}
