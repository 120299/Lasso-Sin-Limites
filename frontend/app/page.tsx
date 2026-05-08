import { ContactSection } from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
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
  const listStacks = await getStacks();
  const listCategoris = await getCategories();
  const listProjects = await getProjects();
  const listTestimonials = await getTestimonials();
  const listPartners = await getPartners();
  const dataHomePage = await getHomePage();

  return (
    <>
      <main>
        <HeroSection />
        <LogosSection
          title="Empresas que han trabajado con nosotros"
          data={listPartners}
          background="bg-gray-100"
        />
        <ServicesSection
          sectionId="servicios"
          sectionTitle={dataHomePage.sections[0].title}
          sectionTitleColor="text-gradient"
          sectionDescription={dataHomePage.sections[0].content}
          sectionBackground="bg-white-100"
          data={listCategoris}
        />
        <Portfolio
          sectionId="portfolio"
          sectionTitle={dataHomePage.sections[5].title}
          sectionTitleColor="text-white"
          sectionDescription={dataHomePage.sections[5].content}
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
          sectionTitle={dataHomePage.sections[3].title}
          sectionTitleColor="text-white"
          sectionDescription={dataHomePage.sections[3].content}
          sectionBackground="bg-slate-950"
          data={dataHomePage.sections[4].items}
        />
        <FeaturesSection
          sectionTitle={dataHomePage.sections[1].title}
          sectionTitleColor="text-gradient"
          sectionDescription={dataHomePage.sections[1].content}
          sectionBackground="bg-white-100"
          data={dataHomePage.sections[2].items}
        />

        <TestimonialsSection
          sectionId="testimonios"
          sectionTitle={dataHomePage.sections[6].title}
          sectionTitleColor="text-white"
          sectionDescription={dataHomePage.sections[6].content}
          sectionBackground="bg-slate-950"
          data={listTestimonials}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
