import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const authToken = request.headers.get("Authorization");

  if (authToken !== process.env.STRAPI_REVALIDATE_TOKEN) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  const body = await request.json();
  const model = body.model || body.entry?.model;
  console.log("¡Webhook recibido! Modelo:", model);

  const tagsMap: Record<string, string> = {
    stack: "stacks",
    category: "categories",
    project: "projects",
  };

  if (tagsMap[model]) {
    (revalidateTag as any)(tagsMap[model]);
    return NextResponse.json({ revalidated: true });
  }

  return NextResponse.json({ message: "Nada que revalidar" });
}
