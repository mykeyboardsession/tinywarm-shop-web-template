import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  badge?: string;
  tone?: "peach" | "sage" | "blush" | "cream";
  aspect?: string;
  className?: string;
}

const toneMap: Record<string, string> = {
  peach: "bg-peach/40",
  sage: "bg-sage/50",
  blush: "bg-blush/50",
  cream: "bg-muted",
};

export function ProductCard({
  image,
  name,
  price,
  badge,
  tone = "cream",
  aspect = "aspect-[4/5]",
  className = "",
}: ProductCardProps) {
  return (
    <motion.article
      whileHover="hover"
      className={`group block ${className}`}
    >
      {/* Image frame — fixed aspect, product centered, consistent padding */}
      <div
        className={`relative rounded-3xl overflow-hidden ${toneMap[tone]} ${aspect}`}
      >
        <motion.img
          src={image}
          alt={name}
          loading="lazy"
          width={1024}
          height={1024}
          variants={{ hover: { scale: 1.04 } }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {badge && (
          <span className="absolute top-4 left-4 bg-ink text-cream text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full">
            {badge}
          </span>
        )}

        <motion.button
          aria-label={`Add ${name} to bag`}
          variants={{ hover: { scale: 1, opacity: 1 } }}
          initial={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-cream text-ink flex items-center justify-center shadow-sm hover:bg-ink hover:text-cream transition-colors"
        >
          <Plus size={16} />
        </motion.button>
      </div>

      {/* Caption — always visible, never hidden behind hover */}
      <div className="flex items-baseline justify-between gap-4 mt-4 px-1">
        <h3 className="font-display text-lg text-ink leading-tight truncate">
          {name}
        </h3>
        <span className="text-sm text-ink/70 tabular-nums shrink-0">
          {price}
        </span>
      </div>
    </motion.article>
  );
}
