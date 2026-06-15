import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero.webp";

export function Hero() {
  return (
    <section className="relative pt-28 lg:pt-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8 lg:row-span-2 relative rounded-3xl overflow-hidden bg-peach/40 aspect-[4/5] lg:aspect-auto lg:min-h-[640px]"
        >
          <img
            src={heroImg}
            alt="Petal Pals Duo – two handmade clay friends"
            width={1280}
            height={1600}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-cream">
            <div className="bg-ink/30 backdrop-blur-md rounded-full px-4 py-2 text-xs tracking-wide">
              Petal Pals Duo · No. 001
            </div>
            <div className="bg-ink/30 backdrop-blur-md rounded-full px-4 py-2 text-xs tracking-wide">
              $65
            </div>
          </div>
        </motion.div>

        {/* Headline card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-4 bg-card rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[320px]"
        >
          <div className="text-[11px] tracking-[0.2em] uppercase text-terracotta">
            Welcome to tinywarm world
          </div>
          <h1 className="font-display text-[2.75rem] sm:text-5xl lg:text-[3.5rem] leading-[0.95] text-ink mt-6">
            Tiny friends, <em className="text-terracotta not-italic font-normal italic">handmade</em> with a soft heart.
          </h1>
          <div className="flex items-center gap-3 mt-8">
            <a
              href="#shop"
              className="group inline-flex items-center gap-2 bg-ink text-cream rounded-full pl-6 pr-2 py-2 text-sm hover:bg-terracotta transition-colors"
            >
              Shop the drop
              <span className="w-9 h-9 rounded-full bg-cream text-ink flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Stat / quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-4 bg-sage/60 rounded-3xl p-8 lg:p-10 flex flex-col justify-between"
        >
          <p className="font-display text-2xl lg:text-[1.65rem] leading-snug text-ink">
            "Every figure spends 2–3 weeks in our studio before finding its person."
          </p>
          <div className="flex items-center justify-between mt-6 text-xs tracking-wide text-ink/70">
            <span>— Maddie, founder</span>
            <span className="font-display text-3xl text-terracotta">02</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
