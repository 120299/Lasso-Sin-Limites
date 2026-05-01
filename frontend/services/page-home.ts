import { cache } from "react";
import qs from "qs";
import { strapiFetch } from "@/lib/strapi-client";

// Usamos cache para que Next.js 15 no repita la lógica en un mismo renderizado
export const getHomePage = cache(async () => {
  const query = qs.stringify(
    {
      populate: {
        sections: {
          on: {
            "layout.title-section": {
              populate: "*",
            },
            "elemets.list-feature": {
              populate: {
                items: "*",
              },
            },
            "elemets.list-stats": {
              populate: {
                items: "*",
              },
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  // El tag "home-page" es el que limpiará nuestro Webhook
  const res = await strapiFetch(`/api/home-page?${query}`, "home-page");

  // Al poner : Stack aquí, TypeScript sabe que devuelves una lista de Stacks
  return res?.data;
});
