import { STRAPI_URL } from "@/config/api";

export async function strapiFetch(path: string, tag: string) {
  try {
    const response = await fetch(`${STRAPI_URL}${path}`, {
      next: {
        tags: [tag],
        // Forzamos a que no se considere "fresco" si el tag se invalida
        revalidate: 0,
      },
      headers: {
        "Content-Type": "application/json",
        // Evitamos que el navegador guarde una copia en su propia caché
        "Cache-Control": "no-store, no-cache, must-revalidate",
        Pragma: "no-cache",
      },
    });

    if (!response.ok) {
      console.error(`[Strapi Error]: ${response.status} en ${path}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`[Fetch Error]: ${error}`);
    return null;
  }
}
