import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(5, "El nombre es muy corto"),
  phone: z.string().min(9, "Teléfono inválido"),
  email: z.string().email("Email no válido"),
  message: z.string().min(10, "Mensaje demasiado corto"),
  honeypot: z.string().max(0).optional(), // Bloqueo de spam[cite: 5]
});

export type ContactFormData = z.infer<typeof contactSchema>;
