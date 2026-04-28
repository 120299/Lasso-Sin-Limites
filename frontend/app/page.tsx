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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />

        <PartnertsSection />

        <ServicesModule />

        <FeaturesSection />

        <Portfolio />

        <StatsSection />

        <TestimonialsSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
