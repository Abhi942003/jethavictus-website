"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Brain,
  CloudCog,
  ShieldCheck,
  Building2,
  Blocks,
  Cpu,
} from "lucide-react";
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
  
  const icons = [
  BriefcaseBusiness, // Strategic IT Consulting
  Brain,      // Artificial Intelligence & Machine Learning
  CloudCog,          // Cloud Architecture & AWS Solutions
  ShieldCheck,       // Cybersecurity & Risk Management
  Building2,         // Enterprise ERP Solutions
  Blocks,            // Blockchain & Emerging Technologies
  Cpu,               // IoT & Data Science
];

  return (
    <div className="grid lg:grid-cols-[42%_58%] gap-20 items-start">
      <div className="border-t border-line h-screen flex flex-col justify-center px-10">
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
            <div className="flex items-center gap-4">
             {(() => {
              const Icon = icons[i];
              return (
              <Icon
               size={22}
                strokeWidth={2}
                  className={`${
                    active === i ? "text-crimson" : "text-gray-400"
                   } transition-colors`}
                />
              );
            })()}

                  <span className="font-display font-medium text-lg">
                {s.name}
              </span>
             </div>
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
    className="relative w-full h-[550px] overflow-hidden rounded-3xl"
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
      sizes="100vw"
      className="object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    {/* Text */}
    ...
  </motion.div>
</AnimatePresence>

    <div className="absolute inset-0 bg-transparent" />
  </motion.div>
</AnimatePresence>
    </div>
  );
}
