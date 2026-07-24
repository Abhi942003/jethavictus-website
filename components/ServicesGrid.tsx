"use client";

import {
  BriefcaseBusiness,
  Brain,
  CloudCog,
  ShieldCheck,
  Building2,
  Blocks,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export default function ServicesGrid({
  services,
}: {
  services: { slug: string; name: string; summary: string }[];
}) {
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
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {services.map((s, i) => {
        const Icon = icons[i];
        return (
          <FadeUp key={s.slug} delay={i * 0.06}>
            <Link
              href={`/services#${s.slug}`}
              className="group block h-full border border-line rounded-2xl p-7 hover:border-crimson hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <Icon size={28} className="text-crimson" strokeWidth={1.75} />
                <span className="text-sm text-haze">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="font-display font-semibold text-lg leading-snug">
                {s.name}
              </p>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                {s.summary}
              </p>

              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-crimson opacity-0 group-hover:opacity-100 group-hover:gap-2 transition-all">
                Learn more <ArrowUpRight size={14} />
              </div>
            </Link>
          </FadeUp>
        );
      })}
    </div>
  );
}
