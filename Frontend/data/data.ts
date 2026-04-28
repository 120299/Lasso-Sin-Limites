import {
  Shield,
  Headphones,
  Zap,
  Lock,
  Mail,
  Phone,
  MapPin,
  Download,
  Users,
  Star,
  X,
  Globe,
  CreditCard,
  TrendingUp,
  type LucideIcon,
  ArrowRight,
  Sparkles,
  Code,
  Cpu,
  Rocket,
  Target,
  Award,
  CalendarCheck,
  LayoutDashboard,
  Repeat,
  ShieldCheck,
} from "lucide-react";

export const SERVICES_DATA = [
  {
    id: "desarrollo",
    title: "Desarrollo High-End",
    description: "Interfaces ultra rápidas con arquitectura modular escalable.",
    icon: Code, // Solo la referencia
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    link: "#desarrollo",
  },
  {
    id: "ia",
    title: "Integración de IA",
    description:
      "Automatizamos procesos complejos mediante modelos de aprendizaje.",
    icon: Cpu, // Solo la referencia
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    link: "#ia",
  },
  {
    id: "global",
    title: "Expansión Digital",
    description:
      "Llevamos tu marca a mercados internacionales con SEO localizado.",
    icon: Globe, // Solo la referencia
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    link: "#global",
  },
];

/* ********************************** */
/*               HEADER               */
/* ********************************** */

type NavItem = {
  key: string;
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  {
    key: "nav.home",
    href: "#",
    label: "Inicio",
  },
  {
    key: "nav.services",
    href: "/blog",
    label: "Blog",
  },

  {
    key: "nav.features",
    href: "#features",
    label: "Características",
  },
  { key: "nav.stats", href: "#stats", label: "Estadísticas" },
  {
    key: "nav.testimonials",
    href: "#testimonials",
    label: "Testimonios",
  },
  { key: "nav.contact", href: "#contact", label: "Contacto" },
];

/* ********************************** */
/*              PARTNERS              */
/* ********************************** */

export interface Partner {
  name: string;
  logoUrl: string; // URL completa de internet
}

export const partners: Partner[] = [
  {
    name: "Logitech",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg",
  },
  {
    name: "Spotify",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/spotify-logo.svg",
  },
  {
    name: "Airbnb",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  },
  {
    name: "Slack",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  {
    name: "Discord",
    logoUrl:
      "https://1000logos.net/wp-content/uploads/2021/06/Discord-logo.svg",
  },
];
/* ********************************** */
/*                STATS               */
/* ********************************** */
// 1. Interfaz mejorada
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

export interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}
export const stats: Stat[] = [
  {
    icon: Download,
    value: 1200000,
    suffix: "+",
    label: "Descargas",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    value: 40000,
    suffix: "+",
    label: "Usuarios Activos",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Star,
    value: 4.8,
    suffix: "",
    label: "Calificación",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    isDecimal: true,
  },
  {
    icon: Globe,
    value: 200,
    suffix: "+",
    label: "Países",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: CreditCard,
    value: 50,
    suffix: "M+",
    label: "Transacciones",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: TrendingUp,
    value: 99.9,
    suffix: "%",
    label: "Disponibilidad",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    isDecimal: true,
  },
];

/* ********************************** */
/*              FEATURES              */
/* ********************************** */
type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "8 Años de Éxito",
    description:
      "Casi una década impulsando marcas. Experiencia probada que elimina errores y maximiza tu inversión.",
  },
  {
    icon: Zap,
    title: "Agilidad Real (Agile)",
    description:
      "Entregas rápidas y sin burocracia. Nos adaptamos a tu ritmo para que nunca dejes de crecer.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilidad 360º",
    description:
      "Nos adueñamos de tus objetivos. Resultados garantizados con un equipo que responde siempre.",
  },
  {
    icon: ShieldCheck,
    title: "Lasso Sin Límites",
    description:
      "Creatividad y estrategia unidas. Conectamos tu marca con el mercado de forma imparable.",
  },
];

/* ********************************** */
/*               PROJECTS              */
/* ********************************** */
type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "TechStart Rebrand",
    category: "Branding",
    description:
      "Renovación completa de imagen corporativa para startup tecnológica.",
    image:
      "https://images.unsplash.com/photo-1460925892157-abf1f7a23d16?w=800&q=80",
    tags: ["Branding", "Web", "Social Media"],
  },
  {
    id: "p2",
    title: "Gastro Gourmet",
    category: "Marketing Digital",
    description: "Campaña digital para restaurante de alta cocina.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["SEO", "Social Media", "Publicidad"],
  },
  {
    id: "p3",
    title: "FitLife App",
    category: "Desarrollo Web",
    description: "Aplicación web para gestión de entrenamientos y nutrición.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Web App", "UI/UX", "Desarrollo"],
  },
  {
    id: "p4",
    title: "Moda Urbana",
    category: "Producción Audiovisual",
    description: "Sesión fotográfica y vídeo para colección de moda.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["Foto", "Vídeo", "Reels"],
  },
  {
    id: "p5",
    title: "EcoTravel",
    category: "E-commerce",
    description: "Tienda online para agencia de turismo ecológico.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    tags: ["E-commerce", "Web", "Marketing"],
  },
  {
    id: "p6",
    title: "EcoTravel",
    category: "E-commerce",
    description: "Tienda online para agencia de turismo ecológico.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    tags: ["E-commerce", "Web", "Marketing"],
  },
  {
    id: "p7",
    title: "EcoTravel",
    category: "E-commerce",
    description: "Tienda online para agencia de turismo ecológico.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    tags: ["E-commerce", "Web", "Marketing"],
  },
  {
    id: "p8",
    title: "EcoTravel",
    category: "E-commerce",
    description: "Tienda online para agencia de turismo ecológico.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    tags: ["E-commerce", "Web", "Marketing"],
  },
  {
    id: "p9",
    title: "EcoTravel",
    category: "E-commerce",
    description: "Tienda online para agencia de turismo ecológico.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    tags: ["E-commerce", "Web", "Marketing"],
  },
  {
    id: "p56",
    title: "EcoTravel",
    category: "E-commerce",
    description: "Tienda online para agencia de turismo ecológico.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    tags: ["E-commerce", "Web", "Marketing"],
  },
  {
    id: "p533",
    title: "EcoTravel",
    category: "E-commerce",
    description: "Tienda online para agencia de turismo ecológico.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    tags: ["E-commerce", "Web", "Marketing"],
  },
  {
    id: "p6",
    title: "SmartHome",
    category: "Branding",
    description: "Identidad visual para empresa de domótica.",
    image:
      "https://images.unsplash.com/photo-1558618047-f4e80f3e7f2b?w=800&q=80",
    tags: ["Logo", "Branding", "Packaging"],
  },
  {
    id: "p7",
    title: "HealthPlus",
    category: "Desarrollo Web",
    description: "Plataforma de telemedicina con citas online.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    tags: ["Web App", "Healthcare", "React"],
  },
  {
    id: "p8",
    title: "FoodBox",
    category: "E-commerce",
    description: "App de delivery de comida saludable.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    tags: ["Mobile App", "E-commerce", "Flutter"],
  },
  {
    id: "p9",
    title: "CryptoWallet",
    category: "Desarrollo Web",
    description: "Billetera digital con criptomonedas.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["Fintech", "Web3", "Blockchain"],
  },
  {
    id: "p10",
    title: "Urban Fitness",
    category: "Marketing Digital",
    description: "Campaña de lanzamiento para cadena de gimnasios.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    tags: ["Google Ads", "Facebook Ads", "SEO"],
  },
  {
    id: "p11",
    title: "Zen Spa",
    category: "Branding",
    description: "Identidad completa para centro de bienestar.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    tags: ["Branding", "Packaging", "Web"],
  },
  {
    id: "p12",
    title: "TechConf 2024",
    category: "Producción Audiovisual",
    description: "Cobertura audiovisual para conferencia tecnológica.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    tags: ["Vídeo", "Streaming", "Fotografía"],
  },
  {
    id: "p13",
    title: "AutoZone",
    category: "E-commerce",
    description: "Tienda online de autopartes con catálogo dinámico.",
    image:
      "https://images.unsplash.com/photo-1487754180477-5af8c4b0d325?w=800&q=80",
    tags: ["E-commerce", " Shopify", "API"],
  },
  {
    id: "p14",
    title: "PureSkin",
    category: "Marketing Digital",
    description: "Estrategia digital para marca de skincare.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    tags: ["Influencers", "Contenido", "Ads"],
  },
  {
    id: "p15",
    title: "BookWorm",
    category: "Desarrollo Web",
    description: "Plataforma de recomendados de libros con IA.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    tags: ["Web App", "AI", "Next.js"],
  },
  {
    id: "p16",
    title: "ArtGallery",
    category: "Producción Audiovisual",
    description: "Exposición virtual en 3D para galería de arte.",
    image:
      "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800&q=80",
    tags: ["3D", "WebGL", "Exposición"],
  },
  {
    id: "p17",
    title: "GreenEnergy",
    category: "Branding",
    description: "Branding para empresa de energía renovable.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    tags: ["Sostenibilidad", "Logo", "Web"],
  },
  {
    id: "p18",
    title: "PetLove",
    category: "E-commerce",
    description: "Tienda online para productos de mascotas.",
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
    tags: ["E-commerce", "Mascotas", "Marketing"],
  },
];

/* ********************************** */
/*            TESTIMONIALS            */
/* ********************************** */

type Testimonial = {
  name: string;
  date: string;
  content: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "María García",
    date: "24 Jul 2024",
    content:
      "Finova ha sido un cambio radical para mis metas de ahorro. El diseño intuitivo de la app me ayuda a controlar mi presupuesto y ver exactamente a dónde va mi dinero.",
    avatar: "MG",
  },
  {
    name: "Carlos Rodríguez",
    date: "18 Ago 2024",
    content:
      "Confío en Finova con mis finanzas por sus características de seguridad. Además, la app es tan fácil de usar que gestionar mi dinero nunca ha sido tan sencillo.",
    avatar: "CR",
  },
  {
    name: "Ana Martínez",
    date: "5 Sep 2024",
    content:
      "Los análisis en tiempo real han cambiado completamente cómo gestiono mis inversiones. Puedo seguir todo en un solo lugar y tomar decisiones informadas rápidamente.",
    avatar: "AM",
  },
  {
    name: "Brayan Lasso",
    date: "5 Sep 2024",
    content: "asdasdasdadasd",
    avatar: "BL",
  },
];

/* ********************************** */
/*               CONTACT              */
/* ********************************** */

type ContactInfo = {
  icon: LucideIcon;
  value: string;
};

export const contactInfo: ContactInfo[] = [
  { icon: Mail, value: "hello@finova.com" },
  { icon: Phone, value: "+1 (555) 123-4567" },
  { icon: MapPin, value: "San Francisco, CA" },
];

/* ********************************** */
/*               FOOTER               */
/* ********************************** */

export const socialIcons: Record<string, LucideIcon> = {
  youtube: X,
  linkedin: X,
  instagram: X,
  facebook: X,
};

export const footerLinks: Record<string, string[]> = {
  product: ["Características", "Precios", "Seguridad", "Actualizaciones"],
  company: ["Nosotros", "Empleos", "Blog", "Prensa"],
  legal: ["Privacidad", "Términos", "Cookies", "Licencias"],
};
