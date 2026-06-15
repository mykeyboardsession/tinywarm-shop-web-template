import { useEffect, useState } from "react";
import { ShoppingBag, Search, Heart, Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  { label: "Shop", href: "#shop" },
  { label: "Collections", href: "#classics" },
  { label: "About", href: "#maker" },
  { label: "Journal", href: "#journal" },
];

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <a href="/" className="font-display text-xl lg:text-2xl tracking-tight text-ink">
          tinywarm<span className="text-terracotta">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm tracking-wide text-ink/70 hover:text-terracotta transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-4">
          <button className="p-2 hover:text-terracotta transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="p-2 hover:text-terracotta transition-colors hidden sm:inline-flex" aria-label="Wishlist">
            <Heart size={18} />
          </button>
          <button className="p-2 hover:text-terracotta transition-colors relative" aria-label="Bag">
            <ShoppingBag size={18} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-terracotta text-cream text-[10px] font-medium flex items-center justify-center">
              2
            </span>
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 md:hidden" aria-label="Menu" type="button">
                <Menu size={18} />
              </button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-3">
                {links.map((l) => (
                  <SheetClose asChild key={l.label}>
                    <a
                      href={l.href}
                      className="text-lg text-ink/90 hover:text-terracotta transition-colors"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
