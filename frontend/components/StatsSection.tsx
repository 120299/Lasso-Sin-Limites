"use client";
import { Stat } from "@/types/strapi";
import { Section } from "./ui/Section";
import { StatCard } from "./ui/StatCard";

interface StatsSectionProps {
  data: Stat[];
  sectionId?: string;
  sectionTitle: string;
  sectionTitleColor?: string;
  sectionDescription: string;
  sectionBackground: string;
}
export default function StatsSection({
  data,
  sectionId,
  sectionTitle,
  sectionTitleColor,
  sectionDescription,
  sectionBackground,
}: StatsSectionProps) {
  return (
    <Section
      sectionId={sectionId}
      sectionTitle={sectionTitle}
      sectionTitleColor={sectionTitleColor}
      sectionDescription={sectionDescription}
      sectionBackground={sectionBackground}
    >
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((stat, index) => (
          <StatCard key={stat.id} stat={stat} index={index} />
        ))}
      </div>
    </Section>
  );
}
