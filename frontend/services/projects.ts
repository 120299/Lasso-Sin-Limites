import qs from "qs";
import { strapiFetch } from "@/lib/strapi-client";
import { formatAssetUrl } from "@/config/api";

export async function getProjects() {
  const query = qs.stringify({
    fields: [
      "name",
      "slug",
      "create_date",
      "url",
      "description",
      "status_project",
    ],
    populate: {
      image: { fields: ["url"] },
      category: { fields: ["title"] },
      stacks: { fields: ["name"] },
    },
  });

  const res = await strapiFetch(`/api/projects?${query}`, "projects");

  return (res?.data || []).map((item: any) => ({
    id: item.id,
    name: item.name,
    slug: item.slug,
    createDate: item.create_date,
    url: item.url,
    description: item.description,
    statusProject: item.status_project,
    imageUrl: formatAssetUrl(item.image?.url) || "", // Usa formatAssetUrl[cite: 1]
    tags: item.stacks || [],
    category: item.category?.title || "",
  }));
}
