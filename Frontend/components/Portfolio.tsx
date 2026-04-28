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
  // Inicializamos con un valor fijo para evitar el error de hidratación
  const [visibleCount, setVisibleCount] = useState(ITEMS_DESKTOP);
  const [selectedProject, setSelectedProject] = useState<
    (typeof allProjects)[0] | null
  >(null);
  const [isMobile, setIsMobile] = useState(false);

  // 2. Categorías (se calculan una sola vez)
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
      // Solo ajustamos si el usuario no ha cargado más elementos manualmente
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
    <section id="portafolio" className="py-24 bg-gray-100 ">
      <div className="container mx-auto px-4 ">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TitleSection title="Proyectos que hablan por nosotros" />

          <p className="section-description">
            Cada proyecto es una oportunidad para crear algo excepcional.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer bg-muted"
              >
                {/* Overlays y Fondo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

                {/* Contenido de la Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <span className="text-xs font-medium text-white bg-primary/80 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80 mt-1 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags Visibles en la Card */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-white/10 backdrop-blur-md px-2 py-1 rounded text-white/90 border border-white/10"
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
            className="text-center mt-10"
          >
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 px-8 py-3 bg-card border border-border rounded-xl font-medium hover:border-primary hover:text-primary transition-all active:scale-95"
            >
              Ver más proyectos ({filteredProjects.length - visibleCount}{" "}
              restantes)
              <ChevronDown className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        <p className="text-center text-sm text-muted-foreground mt-6">
          Mostrando {visibleProjects.length} de {filteredProjects.length}{" "}
          proyectos
          {activeCategory !== "Todos" && ` en ${activeCategory}`}
        </p>
      </div>

      {/* Modal de Detalle */}
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
              className="bg-background rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold mt-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mt-4 text-lg">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
                    Ver proyecto
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 border border-border rounded-xl font-medium hover:bg-accent transition-colors"
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
