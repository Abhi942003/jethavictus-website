"use client";

import { motion } from "framer-motion";

/**
 * Northbeam-style stepped connecting line: a zigzag path that draws
 * itself in on scroll, with small square nodes marking each stage.
 * Pass `dark` when placing this on a dark section so the line stays
 * visible (uses the lime accent instead of near-black).
 */
export default function ProcessLine({
  steps,
  dark = false,
}: {
  steps: number;
  dark?: boolean;
}) {
  const width = 1000;
  const segment = width / steps;
  const highY = 20;
  const lowY = 70;
  const color = dark ? "#0EA5E9" : "#121212";

  let d = `M 0 ${lowY}`;
  const nodes: { x: number; y: number }[] = [{ x: 0, y: lowY }];

  for (let i = 0; i < steps; i++) {
    const xStart = i * segment;
    const xEnd = (i + 1) * segment;
    const y = i % 2 === 0 ? highY : lowY;
    d += ` L ${xStart + segment * 0.3} ${y} L ${xEnd} ${y}`;
    nodes.push({ x: xStart + segment * 0.3, y });
  }

  return (
    <svg
      viewBox={`0 0 ${width} 90`}
      className="w-full h-16 md:h-20"
      preserveAspectRatio="none"
      fill="none"
    >
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={2}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        vectorEffect="non-scaling-stroke"
      />
      {nodes.slice(1).map((n, i) => (
        <motion.rect
          key={i}
          x={n.x - 4}
          y={n.y - 4}
          width={8}
          height={8}
          fill={color}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.3, delay: 0.3 + i * 0.25 }}
        />
      ))}
    </svg>
  );
}
