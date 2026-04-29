"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects as allProjects } from "@/data/data";
import { ChevronDown, X, ExternalLink } from "lucide-react";
import { TitleSection } from "./TitleSection";

const ITEMS_DESKTOP = 6;
const ITEMS_MOBILE = 3;

export default function Portfolio() {
  // 1. Estados
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(ITEMS_DESKTOP);
  const [selectedProject, setSelectedProject] = useState<
    (typeof allProjects)[0] | null
  >(null);
  const [isMobile, setIsMobile] = useState(false);

  // 2. Categorías
  const allCategories = useMemo(() => {
    return [
      "Todos",
      ...Array.from(new Set(allProjects.map((p) => p.category))),
    ];
  }, []);

  // 3. Manejo de Responsive y Corrección de Hidratación
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

  // 4. Lógica de Filtrado
  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") return allProjects;
    return allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  // 5. Handlers
  const loadMore = () => {
    const increment = isMobile ? ITEMS_MOBILE : ITEMS_DESKTOP;
    setVisibleCount((prev) => prev + increment);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(isMobile ? ITEMS_MOBILE : ITEMS_DESKTOP);
  };

  return (
    <section
      id="portafolio"
      className="py-24 bg-gray-100 dark:bg-zinc-950 transition-colors"
    >
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TitleSection title="Proyectos que hablan por nosotros" />

          <p className="section-description mt-4 text-justify md:text-center text-pretty hyphens-auto max-w-2xl mx-auto">
            Cada proyecto es una oportunidad para crear algo excepcional.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.03, 0.15),
                }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer bg-muted shadow-md hover:shadow-xl transition-all"
              >
                {/* Overlays y Fondo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

                {/* Contenido de la Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white bg-primary/90 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-3 text-white text-balance">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80 mt-2 line-clamp-2 text-pretty">
                    {project.description}
                  </p>

                  {/* Tags Visibles en la Card */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg text-white/90 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Botón Cargar Más */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-14"
          >
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-2xl font-bold hover:border-primary hover:text-primary transition-all active:scale-95 shadow-sm"
            >
              Ver más proyectos ({filteredProjects.length - visibleCount}{" "}
              restantes)
              <ChevronDown className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        <p className="text-center text-xs font-medium text-muted-foreground mt-8 tracking-wide">
          Mostrando {visibleProjects.length} de {filteredProjects.length}{" "}
          proyectos
          {activeCategory !== "Todos" && ` en la categoría ${activeCategory}`}
        </p>
      </div>

      {/* Modal de Detalle */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background dark:bg-zinc-900 rounded-[2.5rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/5"
            >
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-[2.5rem]"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center text-white hover:bg-primary transition-all active:scale-90"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-10">
                <span className="text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-6 leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mt-6 text-lg leading-relaxed text-justify md:text-left text-pretty hyphens-auto">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-accent/50 text-accent-foreground px-4 py-1.5 rounded-xl border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <button className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    Ver proyecto en vivo
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-4 border border-border rounded-2xl font-bold hover:bg-accent transition-all"
                  >
                    Cerrar galería
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
