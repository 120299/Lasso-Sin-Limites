"use client";
import { Category } from "@/types/strapi";
import { Section } from "./ui/Section";
import CategoryCard from "./ui/CategoryCard";

interface ServicesSectionProps {
  data: Category[];
  sectionId?: string;
  sectionTitle: string;
  sectionTitleColor?: string;
  sectionDescription: string;
  sectionBackground: string;
}
export default function ServicesSection({
  data,
  sectionId,
  sectionTitle,
  sectionTitleColor,
  sectionDescription,
  sectionBackground,
}: ServicesSectionProps) {
  return (
    <Section
      sectionId={sectionId}
      sectionTitle={sectionTitle}
      sectionTitleColor={sectionTitleColor}
      sectionDescription={sectionDescription}
      sectionBackground={sectionBackground}
    >
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((service, index) => (
          <CategoryCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </Section>
  );
}
