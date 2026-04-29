"use client";

import { motion } from "framer-motion";
import { TitleSection } from "./TitleSection";
import { contactInfo } from "../data/data";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30 scroll-mt-24">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-header-wrapper"
          >
            <TitleSection title="Contáctanos" className="text-left" />
            {/* Texto optimizado: Justificado suave en móvil, natural en desktop */}
            <p className="section-description mt-4 text-justify lg:text-left text-pretty hyphens-auto max-w-md">
              ¿Tienes preguntas? Nos encantaría saber de ti. Envíanos un mensaje
              y te responderemos lo antes posible.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="size-12 rounded-xl icon-container-base bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="size-5" />
                  </div>
                  <span className="text-foreground font-semibold tracking-tight break-all">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="bg-card rounded-[2.5rem] p-8 md:p-10 border border-border shadow-2xl relative overflow-hidden">
              {/* Decoración sutil dentro del formulario */}
              <div className="absolute -top-24 -right-24 size-48 bg-primary/5 rounded-full blur-3xl" />

              <div className="space-y-6 relative z-10">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2 ml-1">
                    Nombre completo
                  </label>
                  <Input
                    type="text"
                    placeholder="Escribe tu nombre"
                    className="h-14 rounded-2xl bg-muted/50 border-border focus:bg-background transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2 ml-1">
                    Correo electrónico
                  </label>
                  <Input
                    type="email"
                    placeholder="ejemplo@correo.com"
                    className="h-14 rounded-2xl bg-muted/50 border-border focus:bg-background transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2 ml-1">
                    ¿En qué podemos ayudarte?
                  </label>
                  <Textarea
                    placeholder="Cuéntanos brevemente tu idea o consulta..."
                    rows={4}
                    className="rounded-2xl bg-muted/50 border-border focus:bg-background resize-none transition-all p-4"
                  />
                </div>

                <Button
                  variant={"default"}
                  size={"lg"}
                  className="w-full h-14 rounded-2xl gap-3 font-bold text-lg hover:scale-[0.98] active:scale-95 cursor-pointer transition-all shadow-lg shadow-primary/20"
                >
                  <Send className="size-5" />
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
