"use client";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/data";

export const ContactInfo = () => {
  return (
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
          <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <item.icon className="size-5" />
          </div>
          <span className="text-foreground font-semibold tracking-tight break-all">
            {item.value}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
