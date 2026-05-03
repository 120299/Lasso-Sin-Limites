import qs from "qs";
import { strapiFetch } from "@/lib/strapi-client";
import { formatAssetUrl } from "@/config/api";

export async function getpartners() {
  const query = qs.stringify({
    fields: ["name"],
    populate: { logo: { fields: ["url"] } },
  });

  const res = await strapiFetch(`/api/partners?${query}`, "partners");

  return (res?.data || []).map((item: any) => ({
    id: item.id,
    name: item.name,
    logoUrl: formatAssetUrl(item.logo?.url) || "",
  }));
}
