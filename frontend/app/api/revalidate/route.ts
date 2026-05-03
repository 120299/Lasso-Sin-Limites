import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const authToken = request.headers.get("Authorization");

  if (authToken !== process.env.STRAPI_REVALIDATE_TOKEN) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  // Esperar a que Strapi termine de guardar el video en disco[cite: 4]
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const body = await request.json();
  const model = body.model || body.entry?.model;

  const tagsMap: Record<string, string> = {
    stack: "stacks",
    category: "categories",
    project: "projects",
    testimonial: "testimonials",
    home_page: "home-page",
    partner: "partners",
  };

  const tagToInvalidate = tagsMap[model];

  if (tagToInvalidate) {
    // Usamos "max" para asegurar una limpieza total según tu versión de Next.js[cite: 4]
    revalidateTag(tagToInvalidate, "max");
    return NextResponse.json({ revalidated: true, tag: tagToInvalidate });
  }

  return NextResponse.json({ message: "Nada que revalidar" });
}
