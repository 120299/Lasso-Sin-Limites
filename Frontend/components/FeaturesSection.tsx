"use client";

import { motion } from "framer-motion";
import { TitleSection } from "./TitleSection";
import { features } from "@/data/data";

export const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding scroll-mt-24 py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TitleSection title="¿Por Qué Elegirnos?" />
          <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Fusionamos compromiso técnico y visión estratégica para impulsar tu
            marca hacia resultados tangibles. Sin fórmulas mágicas, solo
            software real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-[2rem] p-8 hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="size-14 rounded-2xl icon-container-base mb-6 group-hover:bg-primary group-hover:scale-110 transition-all flex items-center justify-center">
                <feature.icon className="size-7 group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 text-balance tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
