import { TitleSection } from "./SectionTitle";

interface SectionProps {
  children: React.ReactNode;
  sectionTitle: string;
  sectionTitleColor?: string;
  sectionDescription: string;
  sectionBackground: string;
}

export const Section = ({
  children,
  sectionTitle,
  sectionTitleColor,
  sectionDescription,
  sectionBackground,
}: SectionProps) => {
  return (
    <section
      className={`py-20 relative overflow-hidden transition-colors duration-500 ${sectionBackground}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <TitleSection
          title={sectionTitle}
          description={sectionDescription}
          className={sectionTitleColor}
        />
        {children}
      </div>
    </section>
  );
};
