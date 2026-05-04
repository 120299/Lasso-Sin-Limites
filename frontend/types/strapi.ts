export interface Stack {
  id: number;
  name: string;
  logoUrl: string | "";
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
  id: number;
  name: string;
  date: string;
  star: number;
  content: string;
  avatar: string;
}

export interface Feature {
  id: number;
  icon: string | "";
  title: string;
  content: string;
}

export interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export interface Stat {
  id: number;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: string | "";
  color: string;
  bgColor: string;
  isDecimal?: boolean;
}

export interface MenuPrimary {
  key: string;
  href: string;
  label: string;
}
