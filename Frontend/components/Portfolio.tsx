"use client";
import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Project } from "@/types/strapi";
import { ProjectCard } from "./ui/ProjectCard";
import { ProjectModal } from "./ui/ProjectModal";

export default function Portfolio({ data }: { data: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(data.map((p) => p.category)))],
    [data],
  );

  const filtered = useMemo(() => {
    const res =
      activeCategory === "Todos"
        ? data
        : data.filter((p) => p.category === activeCategory);
    return res;
  }, [activeCategory, data]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header con Texto Responsivo */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-zinc-900 leading-tight mb-4">
            Proyectos de Impacto
          </h2>
          <p className="text-zinc-500 text-[clamp(0.9rem,2vw,1.1rem)]">
            Soluciones digitales diseñadas para escalar tu negocio.
          </p>
        </div>

        {/* Filtros Estilo "Pill" */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-500/30"
                  : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid adaptable */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.slice(0, visibleCount).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Botón Ver Más */}
        {visibleCount < filtered.length && (
          <div className="mt-20 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="group inline-flex items-center gap-3 px-12 py-5 bg-zinc-950 text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-xl"
            >
              Ver más proyectos
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
