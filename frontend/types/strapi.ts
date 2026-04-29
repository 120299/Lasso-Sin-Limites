export interface Stack {
  id: number;
  name: string;
  logoUrl: string | null;
}

export interface Category {
  id: number;
  title: string;
  description: string;
  videoUrl: string | "";
  imageUrl: string | "";
  slug: string;
}
