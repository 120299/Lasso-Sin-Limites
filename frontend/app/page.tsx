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
import { getStacks, getCategories, getProjects } from "@/data/strapiData";
export default async function Home() {
  const listStacks = await getStacks();
  const listCategoris = await getCategories();
  const listProjects = await getProjects();

  console.log(listProjects);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PartnertsSection
          title="Empresas que han trabajado con nosotros"
          data={listStacks}
          backgorund="bg-gray-100"
        />
        <ServicesModule data={listCategoris} />
        <PartnertsSection
          title="Nuestro Stack Tecnológico"
          data={listStacks}
          backgorund="bg-gray-100"
        />
        <FeaturesSection />
        <StatsSection />
        <Portfolio />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
function useState(arg0: never[]): [any, any] {
  throw new Error("Function not implemented.");
}
