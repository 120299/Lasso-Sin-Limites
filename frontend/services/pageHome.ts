import qs from "qs";
import { strapiFetch } from "@/lib/strapi-client";

// Usamos cache para que Next.js 15 no repita la lógica en un mismo renderizado
export async function getHomePage() {
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

  const res = await strapiFetch(`/api/home-page?${query}`, "home-page");

  return res?.data;
}
