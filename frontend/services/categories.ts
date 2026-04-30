import qs from "qs";
import { strapiFetch } from "@/lib/strapi-client";
import { formatAssetUrl, STRAPI_URL } from "@/config/api";
import { Category } from "@/types/strapi";
import { cache } from "react";

export const getCategories = cache(async () => {
  const query = qs.stringify({
    fields: ["title", "description", "slug"],
    populate: { image: { fields: ["url"] }, video: { fields: ["url"] } },
  });
  const res = await strapiFetch(`/api/categories?${query}`, "categories");

  return (res?.data || []).map(
    (item: any): Category => ({
      id: item.id,
      title: item.title,
      description: item.description,
      imageUrl: STRAPI_URL + (item.image?.url || ""),
      videoUrl: STRAPI_URL + (item.video?.url || ""),
      slug: item.slug,
    }),
  );
});
