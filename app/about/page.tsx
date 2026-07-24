"use client";

import { BadgeInfo, Target, Eye, ListChecks, Workflow, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import FadeUp from "@/components/FadeUp";
import RevealText from "@/components/RevealText";
import ProcessLine from "@/components/ProcessLine";
import Parallax from "@/components/Parallax";
import { DIFFERENTIATORS, APPROACH, INDUSTRIES } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-white pt-40 pb-24 overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <Eyebrow light>About Jethavictus</Eyebrow>
          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-4xl mx-auto">
            {"Built on Trust. Driven by Innovation."
              .split(" ")
              .map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
            &ldquo;We don&apos;t just consult. We conquer complexity.&rdquo;
          </motion.p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section bg-white">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <FadeUp>
            <div className="flex items-center gap-2 mb-4">
              <BadgeInfo size={16} className="text-[#C96A1B]" />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C96A1B]">
                Who We Are
              </span>
            </div>
            <RevealText
              as="h2"
              text="High-performance consulting, engineered for victory."
              className="font-display font-semibold text-2xl md:text-4xl max-w-lg"
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-gray-600 leading-relaxed">
              Jethavictus is a high-performance technology consulting firm built for
              organizations that refuse to settle for average. We are strategic
              thinkers, systems architects, and digital warriors — relentlessly
              committed to transforming the way businesses operate, compete, and grow.
            </p>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Founded on the principle that technology should be a force multiplier,
              Jethavictus partners with enterprises to deliver bold, scalable, and
              measurable outcomes. We don&apos;t offer generic blueprints — we craft
              precision-engineered solutions that solve your most complex technology
              challenges head-on.
            </p>
            <p className="mt-5 text-gray-600 leading-relaxed">
              The name Jethavictus — rooted in victory — reflects our belief: every
              engagement we undertake is a mission we are determined to win, for you.
            </p>
          </FadeUp>
        </div>

        <Parallax strength={30} className="mt-16 flex justify-center">
          <div
            className="h-[280px] w-full max-w-[600px] rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url(/about/who-we-are.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Parallax>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-navy text-white py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-14">
            <FadeUp>
              <Target size={28} className="text-crimson mb-4" strokeWidth={1.75} />
              <h3 className="font-display font-semibold text-2xl md:text-3xl">Mission</h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                To empower enterprises with transformative technology strategies that
                drive operational excellence, competitive dominance, and long-term
                business growth — delivered with unwavering precision and accountability.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Eye size={28} className="text-crimson mb-4" strokeWidth={1.75} />
              <h3 className="font-display font-semibold text-2xl md:text-3xl">Vision</h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                To be the most trusted and results-driven technology consulting force
                in the market — where every client engagement ends in measurable victory.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="section bg-white">
        <FadeUp className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <ListChecks size={16} className="text-[#C96A1B]" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C96A1B]">
              What Sets Us Apart
            </span>
          </div>
          <RevealText
            as="h2"
            text="Six reasons enterprises choose Jethavictus."
            className="font-display font-semibold text-2xl md:text-4xl max-w-2xl"
          />
        </FadeUp>

        <div className="divide-y divide-line border-t border-line">
          {DIFFERENTIATORS.map((d, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="py-6 flex items-start gap-4">
                <span className="text-sm text-haze w-8 shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-700 leading-relaxed">{d}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="flex items-center gap-2 mb-4">
            <Workflow size={16} className="text-[#C96A1B]" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C96A1B]">
              Our Approach
            </span>
          </div>
          <RevealText
            as="h2"
            text="A disciplined, battle-tested delivery model."
            className="font-display font-semibold text-2xl md:text-4xl max-w-2xl text-white"
          />

          <div className="mt-14">
            <ProcessLine steps={APPROACH.length} dark />
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-6">
              {APPROACH.map((a, i) => (
                <FadeUp key={a.step} delay={i * 0.08}>
                  <p className="font-display font-bold text-4xl text-crimson/90">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 font-display font-semibold text-xl text-white">{a.step}</p>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{a.detail}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="section bg-white">
        <FadeUp className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <Globe2 size={16} className="text-[#C96A1B]" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C96A1B]">
              Industries We Serve
            </span>
          </div>
          <RevealText
            as="h2"
            text="Deep expertise across the sectors that matter most."
            className="font-display font-semibold text-2xl md:text-4xl max-w-2xl"
          />
        </FadeUp>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <FadeUp key={ind} delay={i * 0.05}>
              <div className="border border-line rounded-xl px-6 py-5 hover:border-crimson transition-colors">
                <p className="font-display font-medium">{ind}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <FadeUp>
          <RevealText
            as="h2"
            text="Ready to win?"
            className="font-display font-semibold text-3xl md:text-5xl justify-center flex flex-wrap"
          />
          <p className="mt-3 text-haze">
            Let&apos;s build something unstoppable together.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="solid">
              Get in touch
            </Button>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
