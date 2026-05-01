"use client";
import { Feature } from "@/types/strapi";
import { Section } from "./ui/Section";
import FeatureCard from "./ui/FeactureCard";

interface FeaturesSectionProps {
  data: Feature[];
  sectionTitle: string;
  sectionTitleColor?: string;
  sectionDescription: string;
  sectionBackground: string;
}
export default function FeaturesSection({
  data,
  sectionTitle,
  sectionTitleColor,
  sectionDescription,
  sectionBackground,
}: FeaturesSectionProps) {
  return (
    <Section
      sectionTitle={sectionTitle}
      sectionTitleColor={sectionTitleColor}
      sectionDescription={sectionDescription}
      sectionBackground={sectionBackground}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {data.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </Section>
  );
}
