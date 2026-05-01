import { cn } from "@/lib/utils";

interface CarouselDotsProps {
  count: number;
  selectedIndex: number;
  scrollTo: (index: number) => void;
}

export const CarouselDots = ({
  count,
  selectedIndex,
  scrollTo,
}: CarouselDotsProps) => {
  return (
    <div className="flex justify-center gap-2 mt-12">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          className={cn(
            "size-2.5 rounded-full transition-all duration-500",
            selectedIndex === index
              ? "bg-primary w-8 shadow-lg shadow-primary/20"
              : "bg-border hover:bg-primary/30",
          )}
          aria-label={`Ir al slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
