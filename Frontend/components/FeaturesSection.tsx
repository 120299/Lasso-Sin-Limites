"use client";

import { motion } from "framer-motion";
import { TitleSection } from "./TitleSection";
import { features } from "@/data/data";

export const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding scroll-mt-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header-wrapper"
        >
          <TitleSection title="¿Por Qué Elegirnos?" />
          <p className="section-description">
            Sabemos que tu marca es el resultado de mucho esfuerzo. No traemos
            fórmulas mágicas, sino la experiencia y el compromiso técnico para
            impulsar tu visión hasta donde merece llegar
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="size-14 rounded-2xl icon-container-base mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <feature.icon className="size-7 group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-justify">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
