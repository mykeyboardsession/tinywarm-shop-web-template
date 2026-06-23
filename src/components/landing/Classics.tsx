import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "./Reveal";
import { ProductCard } from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import c1 from "@/assets/classic-1.webp";
import c2 from "@/assets/classic-2.webp";
import c3 from "@/assets/classic-3.webp";
import c4 from "@/assets/classic-4.jpg";

const items = [
  { image: c2, name: "Cookie Bear", price: "$38", tone: "pink" as const, badge: "Classic" },
  { image: c4, name: "Tiny Seal", price: "$18", tone: "cream" as const, badge: "On sale" },
  { image: c3, name: "Flower Chick", price: "$22", tone: "sage" as const },
  { image: c1, name: "Sweater Bunny", price: "$46", tone: "green" as const },
];

const extendedItems = [...items, ...items, ...items];

export function Classics() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const autoplayRef = useRef(Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true }));

  useEffect(() => {
    if (api) {
      autoplayRef.current?.play();
    }
  }, [api]);

  return (
    <section id="classics" className="mt-32 lg:mt-48">
      <div className="px-6 lg:px-12 max-w-[1400px] mx-auto">
        <Reveal className="flex items-end justify-between mb-14 lg:mb-20">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-terracotta mb-4">
              Tinywarm classics
            </div>
            <h2 className="font-display text-3xl lg:text-5xl text-ink leading-[1.05]">
              Forever favorites.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                className="w-11 h-11 rounded-full border border-border hover:bg-ink hover:text-cream transition-colors flex items-center justify-center"
                aria-label="Previous"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                className="w-11 h-11 rounded-full border border-border hover:bg-ink hover:text-cream transition-colors flex items-center justify-center"
                aria-label="Next"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <Carousel
          opts={{
            loop: true,
            skipSnaps: false,
            align: "start",
            containScroll: "trimSnaps",
            dragFree: false,
            slidesToScroll: 1,
          }}
          plugins={[autoplayRef.current]}
          setApi={(a: CarouselApi) => setApi(a)}
          className="px-6 lg:px-12"
        >
          <CarouselContent
            onMouseEnter={() => autoplayRef.current?.stop()}
            onMouseLeave={() => autoplayRef.current?.play()}
            className="gap-5 lg:gap-8 pb-6"
          >
            {extendedItems.map((it, index) => (
              <CarouselItem
                key={`${it.name}-${index}`}
                className="basis-[72%] sm:basis-[42%] lg:basis-[24%] shrink-0"
              >
                <ProductCard {...it} aspect="aspect-[4/5]" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Reveal>
    </section>
  );
}