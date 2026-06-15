import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Newsletter() {
  return (
    <section id="journal" className="px-6 lg:px-12 max-w-[1400px] mx-auto mt-24 lg:mt-36">
      <Reveal>
        <div className="rounded-3xl bg-sage/60 p-10 lg:p-20 text-center">
          <div className="text-[11px] tracking-[0.2em] uppercase text-terracotta mb-4">
            Let's keep in touch
          </div>
          <h2 className="font-display text-4xl lg:text-6xl text-ink leading-[0.95] max-w-2xl mx-auto">
            Be the first to know when a new friend opens up.
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 max-w-md mx-auto flex items-center gap-2 bg-cream rounded-full p-1.5 pl-5"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-ink/40 py-2"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="w-10 h-10 rounded-full bg-ink text-cream flex items-center justify-center hover:bg-terracotta transition-colors"
            >
              <ArrowRight size={16} />
            </button>
          </form>
          <p className="text-xs text-ink/50 mt-4">
            One letter a month. No spam, just clay things.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
