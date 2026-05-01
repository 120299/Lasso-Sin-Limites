import { STRAPI_URL } from "@/config/api";

export async function strapiFetch(path: string, tag: string) {
  try {
    const response = await fetch(`${STRAPI_URL}${path}`, {
      next: { tags: [tag] },
      // Es buena práctica añadir headers para asegurar que recibes JSON
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Manejo de errores de respuesta (404, 500, etc.)
    if (!response.ok) {
      console.error(
        `[Strapi Error]: ${response.status} - ${response.statusText} en ${path}`,
      );
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Manejo de errores de red o errores de ejecución del código
    console.error(
      `[Fetch Error]: Fallo al conectar con Strapi en ${path}`,
      error,
    );

    // Retornamos null para que el componente que llama a esta función
    // pueda manejar la ausencia de datos sin colapsar.
    return null;
  }
}
