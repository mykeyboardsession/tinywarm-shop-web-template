import { Instagram, Youtube } from "lucide-react";

export function Footer() {
  const cols = [
    { title: "Shop", items: ["New arrivals", "Classics", "Coloring books", "Gift cards"] },
    { title: "Studio", items: ["About", "Journal", "Press", "Wholesale"] },
    { title: "Help", items: ["Shipping", "Returns", "Care guide", "Contact"] },
  ];

  return (
    <footer className="mt-24 lg:mt-36 px-6 lg:px-12 max-w-[1400px] mx-auto pb-12">
      <div className="border-t border-ink/15 pt-12 grid grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="col-span-2">
          <a href="/" className="font-display text-3xl text-ink">
            tinywarm<span className="text-terracotta">.</span>
          </a>
          <p className="text-sm text-ink/60 mt-4 max-w-xs">
            Handmade clay friends and cozy little things from a
            studio in Brooklyn.
          </p>
          <div className="flex gap-2 mt-6">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-ink/15 flex items-center justify-center hover:bg-ink hover:text-cream transition-colors">
              <Instagram size={15} />
            </a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-ink/15 flex items-center justify-center hover:bg-ink hover:text-cream transition-colors">
              <Youtube size={15} />
            </a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-[11px] tracking-[0.2em] uppercase text-ink/50 mb-4">
              {c.title}
            </div>
            <ul className="space-y-2.5">
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-ink/80 hover:text-terracotta transition-colors">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-12 pt-6 border-t border-ink/10 text-xs text-ink/50">
        <span>© 2026 Tinywarm Co. Made slowly in Brooklyn, NY.</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}
