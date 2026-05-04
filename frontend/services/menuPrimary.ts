import qs from "qs";
import { strapiFetch } from "@/lib/strapi-client";
import { MenuPrimary } from "@/types/strapi";

export async function getMenuPrimary() {
  const query = qs.stringify(
    {
      populate: {
        Menuitems: {
          fields: ["key", "label", "href"],
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const res = await strapiFetch(`/api/menu-primary?${query}`, "menu-primary");

  // Si no hay datos, devolvemos una lista vacía
  if (!res?.data) return [];

  // Limpiamos los datos para que el componente los use fácil
  return res.data.Menuitems.map((item: MenuPrimary) => ({
    key: item.key,
    label: item.label,
    href: item.href,
  }));
}
