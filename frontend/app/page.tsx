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
import { partners } from "@/data/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PartnertsSection
          title="Nuestras Alianzas Estratégicas"
          data={partners}
          backgorund="bg-gray-100"
        />
        <ServicesModule />
        <PartnertsSection
          title="Nuestro Stack Tecnológico"
          data={partners}
          backgorund="bg-gray-100"
        />
        <StatsSection />
        <FeaturesSection />
        <Portfolio />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
