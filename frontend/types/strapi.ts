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

export interface TagStacks {
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
  tags: TagStacks[];
  category: string;
}

export interface Testimonial {
  name: string;
  date: string;
  star: number;
  content: string;
  avatar: string;
}
