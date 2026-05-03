import { strapiFetch } from "@/lib/strapi-client";
import { formatAssetUrl } from "@/config/api";
import qs from "qs";

export async function getCategories() {
  const query = qs.stringify({
    fields: ["title", "slug"],
    populate: { image: { fields: ["url"] } },
  });

  const res = await strapiFetch(`/api/categories?${query}`, "categories");

  if (!res?.data) return [];

  return res.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    imageUrl: formatAssetUrl(item.image?.url),
    slug: item.slug,
  }));
}
