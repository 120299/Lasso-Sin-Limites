import { cache } from "react";
import qs from "qs";
import { strapiFetch } from "@/lib/strapi-client";
import { formatAssetUrl } from "@/config/api";
import { Testimonial } from "@/types/strapi";

// Usamos cache para que Next.js 15 no repita la lógica en un mismo renderizado
export const getTestimonials = cache(async () => {
  const query = qs.stringify({
    fields: ["name", "date", "content", "avatar", "star"],
  });

  // El tag "stacks" es el que limpiará nuestro Webhook
  const res = await strapiFetch(`/api/testimonials?${query}`, "testimonials");

  // Al poner : Stack aquí, TypeScript sabe que devuelves una lista de Stacks
  return (res?.data || []).map(
    (item: any): Testimonial => ({
      name: item.name,
      date: item.date,
      star: item.star,
      content: item.content,
      avatar: item.avatar,
    }),
  );
});
