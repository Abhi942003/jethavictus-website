"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/Button";
import FadeUp from "@/components/FadeUp";
import RevealText from "@/components/RevealText";
import Parallax from "@/components/Parallax";
import { SERVICES } from "@/lib/data";

const CATEGORY_LABELS: Record<string, string> = {
  "strategic-it-consulting": "Consulting",
  "ai-machine-learning": "AI & ML",
  "cloud-architecture-aws": "Cloud",
  "cybersecurity-risk": "Security",
  "enterprise-erp": "ERP",
  "blockchain-emerging-tech": "Blockchain",
  "iot-data-science": "IoT & Data",
};

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-white pt-40 pb-24 overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C96A1B]">
            Our Services
          </span>
          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-4xl mx-auto">
            {"Seven domains. One standard of excellence."
              .split(" ")
              .map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-white/75"
          >
            Precision-engineered solutions across the technologies that define
            competitive advantage.
          </motion.p>
        </div>
      </section>

      {/* ALTERNATING SERVICE PANELS */}
      {SERVICES.map((s, i) => {
        const Icon = s.icon;
        const flipped = i % 2 === 1;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-white" : "bg-[#F7F5F2]"}`}
          >
            <div className="max-w-content mx-auto px-6 md:px-10">
              <div
                className={`grid md:grid-cols-2 gap-14 items-center ${
                  flipped ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE SIDE */}
                <Parallax strength={26}>
                  <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(/services/${s.slug}.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                    <div className="absolute top-6 left-6 flex items-center gap-3">
                      <span className="font-display font-bold text-3xl text-white/90">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon size={26} className="text-white/90" strokeWidth={1.75} />
                    </div>
                  </div>
                </Parallax>

                {/* TEXT SIDE */}
                <FadeUp>
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C96A1B]">
                    {CATEGORY_LABELS[s.slug]}
                  </span>
                  <RevealText
                    as="h2"
                    text={s.name}
                    className="mt-3 font-display font-semibold text-2xl md:text-4xl max-w-lg"
                  />
                  <p className="mt-5 text-gray-600 leading-relaxed max-w-lg">
                    {s.summary}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {s.points.map((point, j) => (
                      <FadeUp key={j} delay={0.05 + j * 0.05}>
                        <li className="flex items-start gap-3">
                          <Check size={18} className="text-crimson shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="text-sm md:text-base text-gray-700">{point}</span>
                        </li>
                      </FadeUp>
                    ))}
                  </ul>
                </FadeUp>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section text-center bg-navy text-white">
        <FadeUp>
          <RevealText
            as="h2"
            text="Which challenge should we solve first?"
            className="font-display font-semibold text-3xl md:text-5xl justify-center flex flex-wrap text-white"
          />
          <p className="mt-3 text-white/70">
            No pressure, no pitch — just a direct conversation about what&apos;s possible.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="solid">
              Start a conversation
            </Button>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
