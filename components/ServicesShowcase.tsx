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

export default function ServicesShowcase({
  services,
}: {
  services: { slug: string; name: string; summary: string }[];
}) {
  const [active, setActive] = useState(0);
  const current = services[active];

  const icons = [
    BriefcaseBusiness,
    Brain,
    CloudCog,
    ShieldCheck,
    Building2,
    Blocks,
    Cpu,
  ];

  return (
    <div className="grid lg:grid-cols-[42%_58%] gap-20 items-center">
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

      <div className="relative w-full h-[550px] overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[600px] h-[500px] mx-auto rounded-3xl overflow-hidden"
          >
            <Image
              src={`/services/${active + 1}.jpg`}
              alt={current.name}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson mb-3"
              >
                {String(active + 1).padStart(2, "0")}
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-semibold text-2xl md:text-3xl text-white leading-tight"
              >
                {current.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3 text-sm md:text-base text-white/75 leading-relaxed max-w-md"
              >
                {current.summary}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}