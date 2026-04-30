import qs from "qs";
import { strapiFetch } from "@/lib/strapi-client";
import { STRAPI_URL } from "@/config/api";
import { Project } from "@/types/strapi";
import { cache } from "react";

export const getProjects = cache(async () => {
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

  return (res?.data || []).map(
    (item: any): Project => ({
      id: item.id,
      name: item.name,
      slug: item.slug,
      createDate: item.create_date,
      url: item.url,
      description: item.description,
      statusProject: item.status_project,
      imageUrl: STRAPI_URL + (item.image?.url || ""),
      tags: item.stacks || [],
      category: item.category.title,
    }),
  );
});
