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

export interface Tag {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  name: string;
  slug: string;
  createDate: string;
  url: string;
  description: string;
  statusProject: string;
  imageUrl: string;
  tags: Tag[];
  category: string;
}
