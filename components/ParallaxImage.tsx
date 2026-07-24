"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Photo panel with two layered scroll effects:
 * 1. A clip-path wipe reveal the first time it enters the viewport.
 * 2. A subtle parallax drift while scrolling past it (the image
 *    moves slightly slower than the page, giving it depth).
 *
 * PHOTOS: point `src` at any image under /public, e.g. "/team.jpg".
 * Until that file exists, it falls back to a soft accent gradient —
 * nothing breaks, it just won't show a photo yet.
 */
export default function ParallaxImage({
  src,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  src: string;
  className?: string;
  aspect?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-2xl ${aspect} ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <motion.div
          style={{
            y,
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-[-8%] bg-gradient-to-br from-crimson/15 to-panel"
        />
      </motion.div>
    </div>
  );
}
