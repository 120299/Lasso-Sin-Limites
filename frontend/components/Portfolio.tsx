"use client";

import { useState, useMemo, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TitleSection } from "./TitleSection";
import { Project } from "@/types/strapi";
import { ProjectCard } from "./ui/ProjectCard";
import { ProjectModal } from "./ui/ProjectModal";
import { Section } from "./ui/Section";

const ITEMS_DESKTOP = 6;
const ITEMS_MOBILE = 3;

interface PortfolioProps {
  data: Project[];
  sectionId?: string;
  sectionTitle: string;
  sectionTitleColor?: string;
  sectionDescription: string;
  sectionBackground: string;
}

export default function Portfolio({
  data: allProjects,
  sectionId,
  sectionTitle,
  sectionTitleColor,
  sectionDescription,
  sectionBackground,
}: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(ITEMS_DESKTOP);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Efectos de carga y responsive
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleCount((prev) =>
        prev <= ITEMS_DESKTOP ? (mobile ? ITEMS_MOBILE : ITEMS_DESKTOP) : prev,
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const allCategories = useMemo(
    () => ["Todos", ...Array.from(new Set(allProjects.map((p) => p.category)))],
    [allProjects],
  );

  const filteredProjects = useMemo(() => {
    return activeCategory === "Todos"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory, allProjects]);

  const hasMore = visibleCount < filteredProjects.length;

  return (
    <Section
      sectionId={sectionId}
      sectionTitle={sectionTitle}
      sectionTitleColor={sectionTitleColor}
      sectionDescription={sectionDescription}
      sectionBackground={sectionBackground}
    >
      <div className="container mx-auto p-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : filteredProjects
                  .slice(0, visibleCount)
                  .map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
          </AnimatePresence>
        </div>

        {/* Botón Ver Más */}
        {hasMore && !isLoading && (
          <div className="text-center mt-16">
            <button
              onClick={() =>
                setVisibleCount(
                  (v) => v + (isMobile ? ITEMS_MOBILE : ITEMS_DESKTOP),
                )
              }
              className="px-10 py-4 bg-white dark:bg-zinc-900 border border-border rounded-2xl font-bold text-sm hover:border-primary transition-all active:scale-95 shadow-sm inline-flex items-center gap-2"
            >
              Descubrir más proyectos <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
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
