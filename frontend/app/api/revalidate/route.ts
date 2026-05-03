import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const authToken = request.headers.get("Authorization");

  if (authToken !== process.env.STRAPI_REVALIDATE_TOKEN) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  // PASO CLAVE: Esperar a que la base de datos de Strapi se asiente
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const body = await request.json();
  const model = body.model || body.entry?.model;

  const tagsMap: Record<string, string> = {
    category: "categories",
    project: "projects",
    // Agrega aquí los modelos que necesites
  };

  const tagToInvalidate = tagsMap[model];

  if (tagToInvalidate) {
    // Usamos "max" si tu versión de Next.js lo requiere según el error visto
    revalidateTag(tagToInvalidate, "max");
    console.log("funciona");
    return NextResponse.json({ revalidated: true, tag: tagToInvalidate });
  }

  return NextResponse.json({ message: "No hay tag para este modelo" });
}
