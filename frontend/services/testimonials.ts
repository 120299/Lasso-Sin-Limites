import qs from "qs";
import { strapiFetch } from "@/lib/strapi-client";

export async function getTestimonials() {
  const query = qs.stringify({
    fields: ["name", "date", "content", "avatar", "star"],
  });

  const res = await strapiFetch(`/api/testimonials?${query}`, "testimonials");

  return (res?.data || []).map((item: any) => ({
    id: item.id,
    name: item.name,
    date: item.date,
    star: item.star,
    content: item.content,
    avatar: item.avatar,
  }));
}
