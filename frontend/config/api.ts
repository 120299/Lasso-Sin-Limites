export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export function formatAssetUrl(url: string | null) {
  if (!url) return null;
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}
