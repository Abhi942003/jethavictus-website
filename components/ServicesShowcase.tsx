"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Numbered services list paired with a single photo panel that
 * swaps to match whichever service is active (click, or hover on
 * desktop) — same pattern as the reference site's services section.
 *
 * PHOTOS: each service looks for an image at:
 *   /public/services/<slug>.jpg
 * e.g. /public/services/ai-machine-learning.jpg
 *
 * Until a real photo exists at that path, the panel shows a plain
 * accent-colored gradient instead — nothing breaks, it just won't
 * show a photo yet. Same drop-in pattern as the hero video.
 */
export default function ServicesShowcase({
  services,
}: {
  services: { slug: string; name: string; summary: string }[];
}) {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className="grid lg:grid-cols-[42%_58%] gap-20 items-start">
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

      <AnimatePresence mode="wait">
  <motion.div
    key={current.slug}
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.5 }}
    className="relative aspect-[4/5] rounded-2xl overflow-hidden"
  >
    <AnimatePresence mode="wait">
  <motion.div
    key={active}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.45 }}
    className="relative w-full max-w-[600px] h-[500px] mx-auto rounded-3xl overflow-hidden"
  >
    <Image
      src={`/services/${active + 1}.jpg`}
      alt={current.name}
      fill
      sizes="600px"
      priority
      className="object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    {/* Text */}
    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
      <motion.h3
        key={`title-${active}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold"
      >
        {current.name}
      </motion.h3>

      <motion.p
        key={`summary-${active}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="mt-3 text-white/80"
      >
        {current.summary}
      </motion.p>

      <Link
        href={`/services#${current.slug}`}
        className="inline-flex items-center gap-2 mt-5 text-white hover:text-red-400"
      >
        Learn More <ArrowUpRight size={18} />
      </Link>
    </div>
  </motion.div>
</AnimatePresence>

    <div className="absolute inset-0 bg-black/20" />
  </motion.div>
</AnimatePresence>
    </div>
  );
}
