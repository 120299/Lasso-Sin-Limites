import { TitleSection } from "./SectionTitle";

interface SectionProps {
  children: React.ReactNode;
  sectionId?: string;
  sectionTitle: string;
  sectionTitleColor?: string;
  sectionDescription: string;
  sectionBackground: string;
}

export const Section = ({
  children,
  sectionId,
  sectionTitle,
  sectionTitleColor,
  sectionDescription,
  sectionBackground,
}: SectionProps) => {
  return (
    <section
      id={sectionId}
      className={`py-20 relative overflow-hidden transition-colors duration-500 ${sectionBackground}`}
    >
      <div className="container mx-auto px-6 relative">
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
