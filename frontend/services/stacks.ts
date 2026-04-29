import qs from "qs";
import { strapiFetch } from "@/lib/strapi-client";
import { formatAssetUrl } from "@/config/api";
import { Stack } from "@/types/strapi";

export async function getStacks() {
  const query = qs.stringify({
    fields: ["name"],
    populate: { logo: { fields: ["url"] } },
  });
  const res = await strapiFetch(`/api/stacks?${query}`, "stacks");

  // Al poner : Stack aquí, TypeScript ya sabe qué devuelve la función
  return (res?.data || []).map(
    (item: any): Stack => ({
      id: item.id,
      name: item.name,
      logoUrl: formatAssetUrl(item.logo?.url),
    }),
  );
}
