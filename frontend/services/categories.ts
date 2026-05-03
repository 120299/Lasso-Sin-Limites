import qs from "qs";
import { strapiFetch } from "@/lib/strapi-client";
import { formatAssetUrl } from "@/config/api";

export async function getCategories() {
  const query = qs.stringify({
    fields: ["title", "description", "slug"],
    populate: {
      image: { fields: ["url"] },
      video: { fields: ["url"] },
    },
  });

  const res = await strapiFetch(`/api/categories?${query}`, "categories");

  // Si no hay datos, devolvemos una lista vacía
  if (!res?.data) return [];

  // Limpiamos los datos para que el componente los use fácil
  return res.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    slug: item.slug,
    imageUrl: formatAssetUrl(item.image?.url) || "",
    videoUrl: formatAssetUrl(item.video?.url) || "",
  }));
}
