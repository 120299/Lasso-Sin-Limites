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
import { getHomePage } from "@/services/page-home";
import { getPartners } from "@/services/partners";

export default async function Home() {
  const listStacks = await getStacks();
  const listCategoris = await getCategories();
  const listProjects = await getProjects();
  const listTestimonials = await getTestimonials();
  const listPartners = await getPartners();
  const dataHomePage = await getHomePage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LogosSection
          title="Empresas que han trabajado con nosotros"
          data={listPartners}
          backgorund="bg-gray-100"
        />
        <ServicesSection
          sectionTitle={dataHomePage.sections[0].title}
          sectionTitleColor="text-gradient"
          sectionDescription={dataHomePage.sections[0].content}
          sectionBackground="bg-white-100"
          data={listCategoris}
        />
        <LogosSection
          title="Nuestro Stack Tecnológico"
          data={listStacks}
          backgorund="bg-gray-100"
        />
        <FeaturesSection
          sectionTitle={dataHomePage.sections[1].title}
          sectionTitleColor="text-gradient"
          sectionDescription={dataHomePage.sections[1].content}
          sectionBackground="bg-white-100"
          data={dataHomePage.sections[2].items}
        />
        <StatsSection
          sectionTitle={dataHomePage.sections[3].title}
          sectionTitleColor="text-white"
          sectionDescription={dataHomePage.sections[3].content}
          sectionBackground="bg-slate-950"
          data={dataHomePage.sections[4].items}
        />
        <Portfolio
          sectionTitle={dataHomePage.sections[5].title}
          sectionTitleColor="text-gradient"
          sectionDescription={dataHomePage.sections[5].content}
          sectionBackground="bg-gray-100"
          data={listProjects}
        />
        <TestimonialsSection
          sectionTitle={dataHomePage.sections[6].title}
          sectionTitleColor="text-white"
          sectionDescription={dataHomePage.sections[6].content}
          sectionBackground="bg-slate-950"
          data={listTestimonials}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
