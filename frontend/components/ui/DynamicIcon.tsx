import { icons, HelpCircle } from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
}

export default function DynamicIcon({ name, className }: DynamicIconProps) {
  const iconName = (name.charAt(0).toUpperCase() +
    name.slice(1)) as keyof typeof icons;

  const LucideIcon = icons[iconName];

  // 2. Controlar explícitamente si el componente no existe
  if (!LucideIcon) {
    return <HelpCircle className={className} />;
  }

  return <LucideIcon className={className} />;
}
