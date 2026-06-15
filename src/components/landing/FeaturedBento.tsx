import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { ProductCard } from "./ProductCard";
import p1 from "@/assets/product-1.webp";
import p2 from "@/assets/product-2.webp";
import p3 from "@/assets/product-3.webp";
import p5 from "@/assets/product-5.webp";

const products = [
  { image: p1, name: "Strawberry Frog", price: "$35", badge: "Preorder", tone: "pink" as const },
  { image: p2, name: "Lovely Kitty", price: "$32", badge: "Sold out", tone: "white" as const },
  { image: p3, name: "Capy Cake", price: "$28", tone: "choco" as const },
  { image: p5, name: "Bow Bunny", price: "$22", tone: "cream" as const },
];

export function FeaturedBento() {
  return (
    <section
      id="shop"
      className="px-6 lg:px-12 max-w-[1400px] mx-auto mt-32 lg:mt-48"
    >
      {/* Editorial header — quieter, product-first */}
      <Reveal className="flex items-end justify-between mb-14 lg:mb-20">
        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-terracotta mb-4">
            New arrivals
          </div>
          <h2 className="font-display text-3xl lg:text-5xl text-ink leading-[1.05] max-w-xl">
            Slowly made, never the same twice.
          </h2>
        </div>
        <a
          href="#shop"
          className="hidden md:inline-flex items-center gap-1.5 text-sm text-ink/70 hover:text-terracotta transition-colors whitespace-nowrap"
        >
          Shop all 24
          <ArrowUpRight size={14} />
        </a>
      </Reveal>

      {/* Uniform grid — products are the heroes, identical 4:5 frames */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 lg:gap-x-8 lg:gap-y-16">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <ProductCard {...p} aspect="aspect-[4/5]" />
          </Reveal>
        ))}
      </div>

      {/* Mobile CTA */}
      <Reveal className="mt-14 flex md:hidden justify-center">
        <a
          href="#shop"
          className="inline-flex items-center gap-2 bg-ink text-cream rounded-full px-6 py-3 text-sm"
        >
          Shop all 24 <ArrowUpRight size={14} />
        </a>
      </Reveal>
    </section>
  );
}
