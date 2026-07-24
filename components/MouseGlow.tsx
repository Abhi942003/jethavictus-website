"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#C96A1B]/20 blur-[160px] pointer-events-none z-0"
    />
  );
}