import { createFileRoute } from "@tanstack/react-router";
import { StickyNav } from "@/components/landing/StickyNav";
import { Hero } from "@/components/landing/Hero";
import { FeaturedBento } from "@/components/landing/FeaturedBento";
import { Classics } from "@/components/landing/Classics";
import { MeetMaker } from "@/components/landing/MeetMaker";
import { Newsletter } from "@/components/landing/Newsletter";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tinywarm — Handmade clay friends & cozy things" },
      {
        name: "description",
        content:
          "Handmade clay desk friends, keychains, and coloring books — slowly made in small batches from a Brooklyn studio.",
      },
      { property: "og:title", content: "Tinywarm — Handmade clay friends" },
      {
        property: "og:description",
        content: "Slowly made clay friends and cozy little things, from our studio to your desk.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <StickyNav />
      <main>
        <Hero />
        <FeaturedBento />
        <Classics />
        <MeetMaker />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
