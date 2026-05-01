import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Testimonial } from "@/types/strapi";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export const TestimonialCard = ({
  testimonial,
  index,
}: TestimonialCardProps) => {
  return (
    <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
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

        <p className="text-muted-foreground leading-relaxed text-pretty hyphens-auto italic">
          "{testimonial.content}"
        </p>
      </motion.div>
    </div>
  );
};
