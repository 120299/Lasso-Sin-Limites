import { cache } from "react";
import qs from "qs";
import { strapiFetch } from "@/lib/strapi-client";
import { formatAssetUrl } from "@/config/api";
import { Stack } from "@/types/strapi";

// Usamos cache para que Next.js 15 no repita la lógica en un mismo renderizado
export const getPartners = cache(async () => {
  const query = qs.stringify({
    fields: ["name"],
    populate: {
      logo: { fields: ["url"] },
    },
  });

  // El tag "stacks" es el que limpiará nuestro Webhook
  const res = await strapiFetch(`/api/partners?${query}`, "partners");

  // Al poner : Stack aquí, TypeScript sabe que devuelves una lista de Stacks
  return (res?.data || []).map(
    (item: any): Stack => ({
      id: item.id,
      name: item.name,
      logoUrl: formatAssetUrl(item.logo?.url) || "",
    }),
  );
});
