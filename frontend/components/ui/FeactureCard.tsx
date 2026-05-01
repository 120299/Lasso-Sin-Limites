import { Feature } from "@/types/strapi";
import { motion } from "framer-motion";
import DynamicIcon from "./DynamicIcon";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card border border-border rounded-[2rem] p-8 hover:shadow-xl transition-all hover:-translate-y-2 group"
    >
      <div className="size-14 rounded-2xl icon-container-base mb-6 group-hover:bg-primary group-hover:scale-110 transition-all flex items-center justify-center">
        <DynamicIcon
          name={feature.icon}
          className="size-7 group-hover:text-primary-foreground transition-colors"
        />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 text-balance tracking-tight">
        {feature.title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">
        {feature.content}
      </p>
    </motion.div>
  );
}
