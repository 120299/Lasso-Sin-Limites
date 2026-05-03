import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";

/**
 * FUNCIÓN AUXILIAR: getIcon
 * Convierte un string (de Strapi) en un componente de Lucide.
 * Si el icono no existe, devuelve el icono 'HelpCircle' por defecto.
 */
export const getIcon = (iconName: string): Icons.LucideIcon => {
  const Icon = (Icons as any)[iconName];
  return Icon || Icons.HelpCircle;
};

/* ********************************** */
/* HEADER              */
/* ********************************** */

type NavItem = {
  key: string;
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { key: "nav.home", href: "#", label: "Inicio" },
  { key: "nav.services", href: "/blog", label: "Blog" },
  { key: "nav.features", href: "#features", label: "Por qué nosotros" },
  { key: "nav.stats", href: "#stats", label: "Impacto" },
  { key: "nav.testimonials", href: "#testimonials", label: "Testimonios" },
  { key: "nav.contact", href: "#contact", label: "Contacto" },
];

/* ********************************** */
/* STATS              */
/* ********************************** */

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  isDecimal?: boolean;
}

export // Simulamos que estos nombres vienen de Strapi como strings
const rawStats = [
  {
    icon: "History",
    value: 60,
    prefix: "+ ",
    label: "Proyectos Internacionales",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: "Globe",
    value: 5,
    suffix: "",
    label: "Países con nuestra huella",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: "Palette",
    value: 20,
    suffix: "+",
    label: "Diseños de Experiencia",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: "ShieldCheck",
    value: 24,
    suffix: "/7",
    label: "Soporte y Disponibilidad",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export const stats: Stat[] = rawStats.map((s) => ({
  ...s,
  icon: getIcon(s.icon), // Mapeo dinámico aquí
  bgColor: s.bg,
}));

/* ********************************** */
/* FEATURES             */
/* ********************************** */

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const rawFeatures = [
  {
    icon: "Award",
    title: "Calidad Internacional",
    description:
      "Experiencia probada en múltiples países, adaptándonos a estándares globales de diseño y desarrollo.",
  },
  {
    icon: "Zap",
    title: "Agilidad 360º",
    description:
      "Desde el concepto hasta el soporte post-lanzamiento. Un solo equipo responsable de todo el ciclo.",
  },
  {
    icon: "Users",
    title: "Más que código: Aliados",
    description:
      "Nos involucramos en tu visión. Tu éxito es nuestra métrica de desempeño más importante.",
  },
  {
    icon: "Sparkles",
    title: "Diseño con Propósito",
    description:
      "No solo creamos interfaces bonitas; diseñamos experiencias que convierten y fidelizan usuarios.",
  },
];

export const features: Feature[] = rawFeatures.map((f) => ({
  ...f,
  icon: getIcon(f.icon), // Mapeo dinámico aquí
}));

/* ********************************** */
/* PROJECTS             */
/* ********************************** */

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "TechStart Rebrand",
    category: "Branding",
    description:
      "Renovación completa de imagen corporativa para startup tecnológica.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925892157-abf1f7a23d16?w=800&q=80",
    tags: ["Branding", "Web", "UI/UX"],
  },
  {
    id: "p2",
    title: "Gastro Gourmet",
    category: "Marketing Digital",
    description: "Estrategia integral de posicionamiento para alta cocina.",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["SEO", "Social Media", "Ads"],
  },
  // ... añadir los demás aquí siguiendo el mismo formato
];

/* ********************************** */
/* TESTIMONIALS           */
/* ********************************** */

type Testimonial = {
  name: string;
  date: string;
  star: number;
  content: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "María García",
    date: "24 Jul 2024",
    star: 5,
    content:
      "Lasso Sin Límites transformó nuestra visión en una realidad digital. El soporte 360 nos dio la tranquilidad que necesitábamos para escalar.",
    avatar: "MG",
  },
  {
    name: "Carlos Rodríguez",
    date: "18 Ago 2024",
    star: 4,
    content:
      "Su capacidad para gestionar proyectos en diferentes países con tanta fluidez es impresionante. Un socio tecnológico de confianza.",
    avatar: "CR",
  },
];

/* ********************************** */
/* CONTACT             */
/* ********************************** */

type ContactInfo = {
  icon: LucideIcon;
  value: string;
};

const rawContact = [
  { icon: "Mail", value: "hello@lassosinlimites.com" },
  { icon: "Phone", value: "+1 (555) 123-4567" },
  { icon: "MapPin", value: "Soporte Global" },
];

export const contactInfo: ContactInfo[] = rawContact.map((c) => ({
  ...c,
  icon: getIcon(c.icon),
}));

/* ********************************** */
/* FOOTER              */
/* ********************************** */

export const socialIcons: Record<string, LucideIcon> = {
  youtube: getIcon("Youtube"),
  linkedin: getIcon("Linkedin"),
  instagram: getIcon("Instagram"),
  facebook: getIcon("Facebook"),
};

export const footerLinks: Record<string, string[]> = {
  product: ["Experiencias", "Data Intelligence", "Seguridad", "Cloud"],
  company: ["Nosotros", "Portafolio", "Blog", "Contacto"],
  legal: ["Privacidad", "Términos", "Cookies"],
};
