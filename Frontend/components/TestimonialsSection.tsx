"use client";

import React from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { TitleSection } from "./TitleSection";
import { testimonials } from "@/data/data";
import { cn } from "@/lib/utils";

export const TestimonialsSection = () => {
  // Ajustamos el slider para que en escritorio también funcione
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
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header-wrapper mb-12"
        >
          <TitleSection title="Lo Que Dicen Nuestros Usuarios" />
          <p className="section-description">
            Únete a miles de usuarios satisfechos que han transformado su vida
            financiera con Finova.
          </p>
        </motion.div>

        {/* Viewport del Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                /* Móvil: 100% del ancho (1 card)
                   Tablet: 50% del ancho (2 cards)
                   Desktop: 33.33% del ancho (3 cards)
                */
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full bg-card rounded-3xl p-8 border border-border hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores (Dots) - Ahora funcionales para todas las resoluciones */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "size-2.5 rounded-full transition-all duration-300",
                selectedIndex === index ? "bg-primary w-6" : "bg-border",
                // Si tienes muchos testimonios, podrías querer ocultar algunos en desktop
                // pero por ahora esto mostrará un punto por cada uno.
              )}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
