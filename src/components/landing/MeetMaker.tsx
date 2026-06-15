import { Reveal } from "./Reveal";
import makerImg from "@/assets/maker.webp";

export function MeetMaker() {
  return (
    <section id="maker" className="px-6 lg:px-12 max-w-[1400px] mx-auto mt-24 lg:mt-36">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <Reveal className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden bg-peach/30 aspect-[4/5] h-full">
            <img
              src={makerImg}
              alt="Maddie, founder of Tinywarm"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="bg-blush/40 rounded-3xl p-8 lg:p-14 h-full flex flex-col justify-between">
            <div className="text-[11px] tracking-[0.2em] uppercase text-terracotta">
              And meet me
            </div>
            <h2 className="font-display text-5xl lg:text-7xl text-ink leading-[0.92] mt-6">
              Hi, I'm <em className="not-italic italic text-terracotta">Maddie</em> — and I make everything you see here.
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-10 text-[15px] leading-relaxed text-ink/80">
              <p>
                Tinywarm started in 2021 from a small kitchen table in Brooklyn. What began 
                as a way to make my mornings a little softer turned into a studio full of 
                clay friends and cozy little things.
              </p>
              <p>
                Every figure spends 2–3 weeks with me before shipping — fired, sanded,
                painted, and packed by hand. If you're holding one, you're holding a
                slow afternoon of mine.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <span className="font-display text-2xl italic text-ink">love, Maddie</span>
              <div className="h-px flex-1 bg-ink/15" />
              <a href="#journal" className="text-sm underline underline-offset-4 hover:text-terracotta">
                Read the journal
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
