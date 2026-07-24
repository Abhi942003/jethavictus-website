"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Numbered services list paired with a single photo panel that
 * crossfades + scales to match whichever service is active.
 *
 * PHOTOS: each service looks for an image at:
 *   /public/services/<slug>.jpg
 * Until a real photo exists at that path, the panel shows a plain
 * accent-colored gradient instead.
 */
export default function ServicesShowcase({
  services,
}: {
  services: { slug: string; name: string; summary: string }[];
}) {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="border-t border-line">
        {services.map((s, i) => (
          <button
            key={s.slug}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            className={`w-full text-left flex items-center gap-4 py-5 border-b border-line transition-colors ${
              active === i ? "text-crimson" : "text-bone hover:text-crimson"
            }`}
          >
            <span className="text-sm text-haze w-8 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display font-medium text-lg">{s.name}</span>
          </button>
        ))}

        <Link
          href={`/services#${current.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-crimson mt-6 hover:gap-2 transition-all"
        >
          Learn more about {current.name} <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-gradient-to-br from-crimson/15 to-panel"
            style={{
              backgroundImage: `url(/services/${current.slug}.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
