import { Category } from "@/types/strapi";
import { motion } from "framer-motion";

interface CategoryCardProps {
  service: Category;
  index: number;
}

export default function CategoryCard({ service, index }: CategoryCardProps) {
  return (
    <motion.a
      key={service.id}
      href={service.slug}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex aspect-video w-full flex-col justify-end overflow-hidden rounded-3xl bg-zinc-900 shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/5"
      // Eliminamos el style inline para manejarlo mejor por CSS/Tailwind
    >
      {/* Contenedor de Video/Imagen */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={service.imageUrl}
          className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-110"
        >
          <source src={service.videoUrl} type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-zinc-950/60 transition-colors duration-500 group-hover:bg-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="relative z-10 p-5">
        <h3
          className="
          text-lg sm:text-xl md:text-2xl lg:text-2xl 
          font-bold text-white 
          leading-tight
          tracking-tight 
          text-balance
          line-clamp-2
        "
        >
          {service.title}
        </h3>

        {/* Línea decorativa: Ajustada para ser visible pero no invasiva */}
        <div className="mt-3 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full opacity-80" />
      </div>

      {/* Efecto de brillo en borde */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-3xl transition-colors duration-500" />
    </motion.a>
  );
}
