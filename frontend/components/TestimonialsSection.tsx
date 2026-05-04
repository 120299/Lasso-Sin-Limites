"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Testimonial } from "@/types/strapi";
import { TestimonialCard } from "./ui/TestimonialCard";
import { CarouselDots } from "./ui/CarouselDots";
import { Section } from "./ui/Section";

interface TestimonialsSectionProps {
  data: Testimonial[];
  sectionId?: string;
  sectionTitle: string;
  sectionTitleColor?: string;
  sectionDescription: string;
  sectionBackground: string;
}

export const TestimonialsSection = ({
  data,
  sectionId,
  sectionTitle,
  sectionTitleColor,
  sectionDescription,
  sectionBackground,
}: TestimonialsSectionProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Section
      sectionId={sectionId}
      sectionTitle={sectionTitle}
      sectionTitleColor={sectionTitleColor}
      sectionDescription={sectionDescription}
      sectionBackground={sectionBackground}
    >
      <div className="overflow-hidden my-4" ref={emblaRef}>
        <div className="flex -ml-4">
          {data.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id || index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>

      <CarouselDots
        count={data.length}
        selectedIndex={selectedIndex}
        scrollTo={(index) => emblaApi?.scrollTo(index)}
      />
    </Section>
  );
};
