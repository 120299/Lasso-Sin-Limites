import { ContactSection } from "@/components/ContactSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PartnertsSection } from "@/components/PartnertsSection";
import Portfolio from "@/components/Portfolio";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import ServicesModule from "@/components/ServicesSection";
import { getStacks } from "@/services/stacks";
import { getCategories } from "@/services/categories";
import { getProjects } from "@/services/projects";
import { getTestimonials } from "@/services/testimonials";
import { getHomePage } from "@/services/page-home";
import { Section } from "@/components/ui/Section";
import ServiceCard from "@/components/ui/CategoryCard";
import { Category } from "@/types/strapi";

export default async function Home() {
  const listStacks = await getStacks();
  const listCategoris = await getCategories();
  const datos: Category[] = listCategoris;
  const listProjects = await getProjects();
  const listTestimonials = await getTestimonials();
  const dataHomePage = await getHomePage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Section
          sectionTitle={dataHomePage.sections[0].title}
          sectionTitleColor="text-gradient"
          sectionDescription={dataHomePage.sections[0].content}
          sectionBackground="bg-gray-100"
        >
          <h1></h1>
        </Section>

        <PartnertsSection
          title="Empresas que han trabajado con nosotros"
          data={listStacks}
          backgorund="bg-gray-100"
        />

        <ServicesModule
          sectionTitle="Soluciones Digitales a Medida"
          sectionTitleColor="text-gradient"
          sectionDescription="Transformamos procesos complejos en herramientas fluidas, escalables y orientadas al retorno de inversión."
          sectionBackground="bg-gray-100"
          data={listCategoris}
        />
        <PartnertsSection
          title="Nuestro Stack Tecnológico"
          data={listStacks}
          backgorund="bg-gray-100"
        />
        <FeaturesSection />
        <StatsSection />
        <Portfolio data={listProjects} />
        <TestimonialsSection data={listTestimonials} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
