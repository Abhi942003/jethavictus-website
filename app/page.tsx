"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import Label from "@/components/Label";
import Button from "@/components/Button";
import FadeUp from "@/components/FadeUp";
import CountUp from "@/components/CountUp";
import HeroVideo from "@/components/HeroVideo";
import RevealText from "@/components/RevealText";
import ProcessLine from "@/components/ProcessLine";
import { SERVICES, APPROACH, AUDIENCES } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-visible">
        <HeroVideo />

        <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 pt-32 pb-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow light>Engineered for Victory</Eyebrow>
          </motion.div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] max-w-3xl text-white">
            {["Engineered", "for", "victory.", "Built", "for", "the", "future."].map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-top">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg text-white/60 italic border-l border-white/20 pl-4 text-left"
          >
            &ldquo;We don&apos;t just consult. We conquer complexity.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button href="/services" variant="solid">
              Explore services
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="!border-white/25 !text-white hover:!border-crimson hover:!text-crimson"
            >
              Let&apos;s talk
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT — plain text on the same dark background, no card/box */}
      <section className="section hairline">
        <Label>About us</Label>
        <RevealText
          as="h2"
          text="The name Jethavictus, rooted in victory, reflects our belief."
          className="font-display text-2xl md:text-4xl leading-snug max-w-3xl"
        />
        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <p className="text-bone/75 leading-relaxed">
            We don&apos;t offer generic blueprints, we craft
            precision-engineered solutions that solve your most complex
            technology challenges head-on.
          </p>
          <p className="text-bone/75 leading-relaxed">
            Senior-level consultants with real domain depth, not junior
            generalists. Battle-tested methodologies built for high-stakes
            environments. Delivery measured by your outcomes, not our hours.
          </p>
        </div>
      </section>

      {/* STATS — large counted numbers, no boxes */}
      <section className="hairline py-16 md:py-20 overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-0">
            <div className="md:-mr-6 md:translate-y-3">
              <p className="font-display font-bold text-6xl md:text-8xl leading-none text-crimson">
                <CountUp to={7} />
              </p>
              <p className="mt-2 text-sm text-haze">Service lines</p>
            </div>
            <div className="md:mx-4">
              <p className="font-display font-bold text-6xl md:text-8xl leading-none text-bone">
                <CountUp to={7} />
              </p>
              <p className="mt-2 text-sm text-haze">Industries served</p>
            </div>
            <div className="md:-ml-6 md:-translate-y-3">
              <p className="font-display font-bold text-6xl md:text-8xl leading-none text-steel">
                <CountUp to={100} suffix="%" />
              </p>
              <p className="mt-2 text-sm text-haze">Outcome focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — plain divided list, no cards, no icon boxes */}
      <section className="section hairline">
        <FadeUp className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <Label>Our services</Label>
            <RevealText
              as="h2"
              text="Practical expertise across seven domains."
              className="font-display font-semibold text-2xl md:text-4xl max-w-2xl"
            />
          </div>
          <Button href="/services" variant="outline">
            View all
          </Button>
        </FadeUp>

        <div className="divide-y divide-line border-t border-line">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeUp key={s.slug} delay={i * 0.03}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group grid md:grid-cols-[3rem_1fr_auto] items-center gap-4 md:gap-8 py-7"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.75}
                    className="text-crimson group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <p className="font-display font-semibold text-lg group-hover:text-crimson transition-colors">
                      {s.name}
                    </p>
                    <p className="mt-1 text-sm text-haze leading-relaxed max-w-xl hidden md:block">
                      {s.summary}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-haze group-hover:text-crimson group-hover:translate-x-1 group-hover:-translate-y-1 transition-all justify-self-end"
                  />
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* HOW WE WORK — dark navy, matching the reference video's process section */}
      <section className="section hairline bg-navy">
        <Label light>How we work</Label>
        <RevealText
          as="h2"
          text="A disciplined process, built to feel clear and low-friction."
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
      </section>

      {/* WHO WE WORK WITH — plain list, no bordered cards */}
      <section className="section hairline">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <FadeUp>
            <Label>Who we work with</Label>
            <RevealText
              as="h2"
              text="Organizations that need a partner they can trust."
              className="font-display font-semibold text-2xl md:text-4xl"
            />
            <p className="mt-5 text-haze leading-relaxed max-w-md">
              Our sweet spot is organizations that want a knowledgeable,
              battle-tested partner who treats every engagement like a
              mission, because to us, it is.
            </p>
          </FadeUp>

          <div className="divide-y divide-line border-t border-line">
            {AUDIENCES.map((a, i) => {
              const Icon = a.icon;
              return (
                <FadeUp key={a.title} delay={i * 0.06}>
                  <div className="py-5">
                    <Icon size={20} className="text-crimson mb-2" strokeWidth={1.75} />
                    <p className="font-display font-semibold">{a.title}</p>
                    <p className="mt-2 text-sm text-haze leading-relaxed">
                      {a.detail}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <FadeUp>
          <RevealText
            as="h2"
            text="Let's start a conversation."
            className="font-display font-semibold text-3xl md:text-5xl justify-center flex flex-wrap"
          />
          <p className="mt-3 text-haze">
            No pressure, no pitch, just a direct conversation about
            what&apos;s possible.
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
