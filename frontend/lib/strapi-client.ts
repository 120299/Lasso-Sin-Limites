import { STRAPI_URL } from "@/config/api";

export async function strapiFetch(path: string, tag: string) {
  try {
    const response = await fetch(`${STRAPI_URL}${path}`, {
      next: { tags: [tag] },
    });

    if (!response.ok) {
      console.error(`[Strapi Error]: ${response.status} en ${path}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`[Fetch Error]: Fallo al conectar con Strapi`, error);
    return null;
  }
}
