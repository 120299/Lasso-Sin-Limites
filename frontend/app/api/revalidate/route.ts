import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const authToken = request.headers.get("Authorization");

  // Seguridad: comparamos con tu .env.local
  if (authToken !== process.env.STRAPI_REVALIDATE_TOKEN) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  const body = await request.json();
  const model = body.model || body.entry?.model;

  // Mapa: Si Strapi dice "stack", Next.js limpia el tag "stacks"
  const tagsMap: Record<string, string> = {
    stack: "stacks", // <--- Aquí conectas Strapi con tu código
    category: "categories",
    project: "projects",
    testimonial: "testimonials",
    home_page: "home-page",
    partner: "partners",
  };

  const tagToInvalidate = tagsMap[model];

  if (tagToInvalidate) {
    // Usamos "max" para cumplir con Next.js 15 y evitar el aviso amarillo
    revalidateTag(tagToInvalidate, "max");
    return NextResponse.json({ revalidated: true });
  }

  return NextResponse.json({ message: "Nada que revalidar" });
}
