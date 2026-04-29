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
          {/* Ajuste de justificado suave y balanceo de líneas para el header */}
          <p className="section-description text-justify md:text-center text-pretty hyphens-auto tracking-tight md:tracking-normal">
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

              {/* text-balance evita que el título de la feature se rompa de forma irregular */}
              <h3 className="text-xl font-semibold text-foreground mb-3 text-balance">
                {feature.title}
              </h3>

              {/* Justificado optimizado para las descripciones de las tarjetas */}
              <p className="text-muted-foreground text-justify text-pretty hyphens-auto leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
