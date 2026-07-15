"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import FadeUp from "@/components/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/StaggerGrid";
import HeroGrid from "@/components/HeroGrid";
import CountUp from "@/components/CountUp";
import { DIFFERENTIATORS, SERVICES, APPROACH, INDUSTRIES } from "@/lib/data";

const headline = "Engineered for Victory.";
const headline2 = "Built for the Future.";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <HeroGrid />

        <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 pt-32 pb-20">
          <div className="eyebrow mb-8">
            <span className="text-crimson">▸</span>
            SITE DESIGNATION: JV&#8209;01 // TECHNOLOGY CONSULTING
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-8xl leading-[0.98] tracking-tight overflow-hidden">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {headline}
              </motion.span>
            </span>
            <span className="block overflow-hidden text-crimson">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {headline2}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-lg text-haze italic"
          >
            &ldquo;We don&apos;t just consult. We conquer complexity.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Button href="/services" variant="solid">
              Explore Services
            </Button>
            <Button href="/contact" variant="outline">
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section hairline">
        <FadeUp>
          <Eyebrow>Who We Are</Eyebrow>
          <p className="font-display text-2xl md:text-4xl leading-snug max-w-4xl">
            A high-performance technology consulting firm built for organizations
            that refuse to settle for average. We don&apos;t offer generic blueprints
            — we craft{" "}
            <span className="text-crimson">precision-engineered solutions</span>{" "}
            that solve your most complex technology challenges head-on.
          </p>
        </FadeUp>
      </section>

      <section className="section hairline bg-ink-alt">
        <FadeUp>
          <Eyebrow>What Sets Us Apart</Eyebrow>
        </FadeUp>

        <StaggerGrid className="grid md:grid-cols-2 gap-px bg-line mt-10 border border-line">
          {DIFFERENTIATORS.map((d, i) => (
            <StaggerItem
              key={i}
              className="bg-ink-alt p-8 hover:bg-panel transition-colors duration-300"
            >
              <span className="font-mono text-xs text-crimson">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-bone/90 leading-relaxed">{d}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section className="section hairline">
        <FadeUp className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <Eyebrow>Core Services</Eyebrow>
            <h2 className="font-display font-bold text-3xl md:text-5xl max-w-2xl">
              Seven domains. One standard of execution.
            </h2>
          </div>
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </FadeUp>

        <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line mt-14 border border-line">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group block bg-ink p-8 h-full hover:bg-ink-alt transition-colors duration-300"
                >
                  <Icon className="text-crimson" size={22} strokeWidth={1.5} />
                  <p className="mt-5 font-display font-medium text-lg leading-snug">
                    {s.name}
                  </p>
                  <span className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-haze group-hover:text-crimson transition-colors">
                    Learn more →
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </section>

      <section className="section hairline bg-ink-alt">
        <FadeUp>
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-5xl max-w-2xl">
            A disciplined, battle-tested delivery model.
          </h2>
        </FadeUp>

        <div className="relative mt-20">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-line" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-crimson"
          />

          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            {APPROACH.map((a, i) => (
              <FadeUp key={a.step} delay={i * 0.12} className="relative">
                <div className="w-3 h-3 rounded-full bg-crimson mb-6 relative z-10" />
                <p className="font-display font-bold text-xl">{a.step}</p>
                <p className="mt-2 text-sm text-haze leading-relaxed">{a.detail}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section hairline">
        <FadeUp>
          <Eyebrow>Industries We Serve</Eyebrow>
        </FadeUp>
        <StaggerGrid className="flex flex-wrap gap-3 mt-8">
          {INDUSTRIES.map((ind) => (
            <StaggerItem key={ind}>
              <span className="inline-block border border-line px-5 py-2.5 text-sm text-bone/85 hover:border-crimson hover:text-crimson transition-colors duration-300">
                {ind}
              </span>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <div className="grid grid-cols-3 gap-8 mt-20 max-w-md">
          <div>
            <p className="font-display font-bold text-4xl md:text-5xl">
              <CountUp to={7} />
            </p>
            <p className="text-xs font-mono uppercase tracking-widest text-haze mt-2">
              Service Lines
            </p>
          </div>
          <div>
            <p className="font-display font-bold text-4xl md:text-5xl">
              <CountUp to={7} />
            </p>
            <p className="text-xs font-mono uppercase tracking-widest text-haze mt-2">
              Industries Served
            </p>
          </div>
          <div>
            <p className="font-display font-bold text-4xl md:text-5xl">
              <CountUp to={100} suffix="%" />
            </p>
            <p className="text-xs font-mono uppercase tracking-widest text-haze mt-2">
              Outcome Focused
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-alt hairline">
        <div className="section text-center">
          <FadeUp>
            <Eyebrow>
              <span className="mx-auto">Ready to Win?</span>
            </Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-6xl max-w-3xl mx-auto leading-tight">
              Let&apos;s build something unstoppable together.
            </h2>
            <div className="mt-10 flex justify-center">
              <Button href="/contact" variant="solid">
                Start a Conversation
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}