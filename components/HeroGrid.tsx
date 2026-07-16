"use client";

import { motion } from "framer-motion";

/**
 * Distinctive hero signature: slow-pulsing concentric "target" rings
 * radiating from a fixed point, crossed by a single diagonal accent
 * line. Reads as "precision / strategic focus" — not a generic soft
 * gradient blob.
 */
export default function HeroGrid() {
  const rings = [140, 240, 340, 440, 540];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 right-[-120px] -translate-y-1/2">
        {rings.map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: [0.15, 0.3, 0.15], scale: [0.85, 1, 0.85] }}
            transition={{
              duration: 6,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full border"
            style={{
              width: r,
              height: r,
              left: -r / 2,
              top: -r / 2,
              borderColor: i % 2 === 0 ? "#E3A343" : "#5FA8D3",
            }}
          />
        ))}
      </div>

      {/* single diagonal accent line cutting across the hero */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, transparent 48%, rgba(227,163,67,0.06) 49.5%, rgba(227,163,67,0.06) 50.5%, transparent 52%)",
        }}
      />
    </div>
  );
}
