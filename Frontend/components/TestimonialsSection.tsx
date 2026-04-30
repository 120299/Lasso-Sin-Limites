"use client";

import React from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { TitleSection } from "./TitleSection";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/types/strapi";

interface TestimonialsSection {
  data: Testimonial[];
}

export const TestimonialsSection = ({ data }: TestimonialsSection) => {
  const testimonials = data;

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
    <section
      id="testimonials"
      className="section-padding bg-muted/30 scroll-mt-24 overflow-hidden"
    >
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header-wrapper mb-16"
        >
          <TitleSection title="Lo Que Dicen Nuestros Usuarios" />
          {/* Optimización de texto: balanceo y justificado suave */}
          <p className="section-description mt-4 text-justify md:text-center text-pretty hyphens-auto max-w-2xl mx-auto">
            Únete a miles de usuarios satisfechos que han transformado su vida
            financiera con Finova.
          </p>
        </motion.div>

        {/* Viewport del Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full bg-card rounded-[2rem] p-8 border border-border hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-primary/5">
                      <span className="text-sm font-bold text-primary">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground leading-tight">
                        {testimonial.name}
                      </p>
                      <p className="text-xs font-medium text-muted-foreground mt-1 uppercase tracking-wider">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.star)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 fill-primary text-primary transition-transform group-hover:scale-110"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Texto del testimonio optimizado para lectura en móvil */}
                  <p className="text-muted-foreground leading-relaxed text-justify text-pretty hyphens-auto italic">
                    "{testimonial.content}"
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores (Dots) */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "size-2.5 rounded-full transition-all duration-500",
                selectedIndex === index
                  ? "bg-primary w-8 shadow-lg shadow-primary/20"
                  : "bg-border hover:bg-primary/30",
              )}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
