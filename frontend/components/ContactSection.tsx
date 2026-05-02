"use client";

import { motion } from "framer-motion";
import { TitleSection } from "./ui/SectionTitle";
import { ContactInfo } from "./ui/ContactInfo";
import { DynamicForm } from "./ui/DynamicForm";

export const ContactSection = () => {
  const misCampos = [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      placeholder: "Ej: Juan Pérez",
      required: true,
    },
    {
      name: "phone",
      label: "Teléfono",
      type: "text",
      placeholder: "Ej: 634-96-52-32",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Ej: juan@empresa.com",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Ej: juan@empresa.com",
      required: true,
    },
    {
      name: "message",
      label: "Tu mensaje",
      type: "textarea",
      placeholder: "Cuéntanos...",
      required: true,
    },
  ];

  return (
    <section id="contact" className="section-padding py-20">
      <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <TitleSection title="Hablemos de tu idea" />
          <ContactInfo />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <DynamicForm fields={misCampos} buttonText="Enviar Ahora" />
        </motion.div>
      </div>
    </section>
  );
};
