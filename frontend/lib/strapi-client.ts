import { STRAPI_URL } from "@/config/api";

export async function strapiFetch(path: string, tag: string) {
  const response = await fetch(`${STRAPI_URL}${path}`, {
    next: { tags: [tag] },
  });
  if (!response.ok) return null;
  return response.json();
}
