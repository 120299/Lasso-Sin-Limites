import { ContactSection } from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LogosSection } from "@/components/LogosSection";
import Portfolio from "@/components/Portfolio";
import StatsSection from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";

// Strapi Data
import { getStacks } from "@/services/stacks";
import { getCategories } from "@/services/categories";
import { getProjects } from "@/services/projects";
import { getTestimonials } from "@/services/testimonials";
import { getHomePage } from "@/services/pageHome";
import { getPartners } from "@/services/partners";
import { getMenuPrimary } from "@/services/menuPrimary";

export default async function Home() {
  // Ejecutar promesas en paralelo para mejor rendimiento
  const [
    listStacks,
    listCategoris,
    listProjects,
    listTestimonials,
    listPartners,
    menuPrimary,
    dataHomePage,
  ] = await Promise.all([
    getStacks(),
    getCategories(),
    getProjects(),
    getTestimonials(),
    getPartners(),
    getMenuPrimary(),
    getHomePage(),
  ]);

  // 1. Validación crítica: Si no hay dataHomePage o sections, mostramos un fallback
  if (!dataHomePage || !dataHomePage.sections) {
    console.error("Error: dataHomePage o dataHomePage.sections es undefined");
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Error cargando la configuración de la página.</p>
      </div>
    );
  }

  // Función auxiliar para obtener secciones de forma segura
  const getSection = (index: number) => {
    return (
      dataHomePage.sections[index] || { title: "", content: "", items: [] }
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header data={menuPrimary} />
      <main>
        <HeroSection />

        <LogosSection
          title="Empresas que han trabajado con nosotros"
          data={listPartners}
          background="bg-gray-100"
        />

        <ServicesSection
          sectionId="servicios"
          sectionTitle={getSection(0).title}
          sectionTitleColor="text-gradient"
          sectionDescription={getSection(0).content}
          sectionBackground="bg-white-100"
          data={listCategoris}
        />

        <Portfolio
          sectionId="portfolio"
          sectionTitle={getSection(5).title}
          sectionTitleColor="text-white"
          sectionDescription={getSection(5).content}
          sectionBackground="bg-slate-950"
          data={listProjects}
        />

        <LogosSection
          title="Nuestro Stack Tecnológico"
          data={listStacks}
          background="bg-gray-100"
        />

        <StatsSection
          sectionId="experiencia"
          sectionTitle={getSection(3).title}
          sectionTitleColor="text-white"
          sectionDescription={getSection(3).content}
          sectionBackground="bg-slate-950"
          data={getSection(4).items}
        />

        <FeaturesSection
          sectionTitle={getSection(1).title}
          sectionTitleColor="text-gradient"
          sectionDescription={getSection(1).content}
          sectionBackground="bg-white-100"
          data={getSection(2).items}
        />

        <TestimonialsSection
          sectionId="testimonios"
          sectionTitle={getSection(6).title}
          sectionTitleColor="text-white"
          sectionDescription={getSection(6).content}
          sectionBackground="bg-slate-950"
          data={listTestimonials}
        />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
