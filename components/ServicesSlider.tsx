"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

/**
 * Horizontal sliding services carousel, Itransition-style.
 *
 * PHOTOS: each slide looks for an image at:
 *   /public/services/<slug>.jpg
 * e.g. /public/services/ai-machine-learning.jpg
 *
 * Until you add a real photo at that path, the slide falls back to a
 * plain accent-colored gradient — nothing breaks, it just won't show
 * a photo yet. Same drop-in pattern as the hero video: add the file,
 * no code changes needed.
 */
export default function ServicesSlider({
  services,
}: {
  services: {
    slug: string;
    name: string;
    summary: string;
    icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  }[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 md:-mx-10 md:px-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group relative shrink-0 snap-start w-[85%] sm:w-[60%] md:w-[38%] lg:w-[30%] aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-crimson/20 to-panel"
              style={{
                backgroundImage: `url(/services/${s.slug}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:from-black/85 transition-colors duration-300" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                  <Icon size={18} className="text-white" strokeWidth={1.75} />
                </div>

                <div>
                  <p className="font-display font-semibold text-lg text-white leading-snug">
                    {s.name}
                  </p>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed line-clamp-3">
                    {s.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white group-hover:gap-2 transition-all">
                    Learn more <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-end gap-3 mt-5">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll services left"
          className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-crimson hover:text-crimson transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll services right"
          className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-crimson hover:text-crimson transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
