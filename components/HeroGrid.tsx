"use client";

import { motion } from "framer-motion";

export default function HeroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60" />

      <motion.div
        initial={{ y: "-10%" }}
        animate={{ y: "110%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-crimson/60 to-transparent"
      />

      {[
        "top-8 left-6 md:left-10 border-t border-l",
        "top-8 right-6 md:right-10 border-t border-r",
        "bottom-8 left-6 md:left-10 border-b border-l",
        "bottom-8 right-6 md:right-10 border-b border-r",
      ].map((pos, i) => (
        <div key={i} className={`absolute w-6 h-6 border-crimson/50 ${pos}`} />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0B0D_85%)]" />
    </div>
  );
}