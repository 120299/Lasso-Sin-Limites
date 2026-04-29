// services/stacks.ts
import qs from "qs";

export const STRAPI_API_URL = "http://localhost:1337";

const QUERY_STACKS = {
  fields: ["name"],
  populate: {
    logo: { fields: ["url"] },
  },
};

const QUERY_CATEGORIES = {
  fields: ["title", "description", "link"], // Campos de texto
  populate: {
    video: {
      fields: ["url"], // Trae la URL del video webm/mp4
    },
    image: {
      fields: ["url"], // Trae la URL de la imagen
    },
  },
};

// 1. Función base genérica (se mantiene privada o interna)
async function fetchFromStrapi(path: string) {
  try {
    const response = await fetch(`${STRAPI_API_URL}${path}`);
    if (!response.ok) throw new Error(`HTTP Error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching:`, error);
    return null;
  }
}

// 2. Función específica con transformación (La que exportas)
export async function getStacks() {
  const query = qs.stringify(QUERY_STACKS);
  const response = await fetchFromStrapi(`/api/stacks?${query}`);

  if (!response?.data) return [];

  // Transformamos aquí mismo
  return response.data.map((item: any) => ({
    id: item.id,
    name: item.name,
    logoUrl: item.logo?.url ? `${STRAPI_API_URL}${item.logo.url}` : null,
  }));
}

export async function getCategories() {
  const query = qs.stringify(QUERY_CATEGORIES);
  const response = await fetchFromStrapi(`/api/categories?${query}`);

  if (!response?.data) return [];

  return response.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    link: item.link,
    // Convertimos las rutas relativas en URLs completas
    image: item.image?.url ? `${STRAPI_API_URL}${item.image.url}` : null,
    video: item.video?.[0]?.url
      ? `${STRAPI_API_URL}${item.video[0].url}`
      : item.video?.url
        ? `${STRAPI_API_URL}${item.video.url}`
        : null,
  }));
}
