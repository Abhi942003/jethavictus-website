"use client";

import { motion } from "framer-motion";
import { Rocket, HeartHandshake, GraduationCap, Trophy, MapPin, Clock } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import FadeUp from "@/components/FadeUp";
import RevealText from "@/components/RevealText";

const VALUES = [
  {
    icon: Rocket,
    title: "Move with purpose",
    detail: "We reward initiative and ownership over hours logged. Real impact, measured by outcomes.",
  },
  {
    icon: HeartHandshake,
    title: "Win as a team",
    detail: "Every mission succeeds together. We support each other through complex, high-stakes work.",
  },
  {
    icon: GraduationCap,
    title: "Never stop learning",
    detail: "Technology moves fast. We invest in continuous growth so you're always ahead of the curve.",
  },
  {
    icon: Trophy,
    title: "Excellence, always",
    detail: "We hold a high bar for our work and for each other — because our clients deserve nothing less.",
  },
];

const BENEFITS = [
  "Competitive compensation and performance bonuses",
  "Flexible remote and hybrid work options",
  "Health, dental, and vision coverage",
  "Learning & certification stipend",
  "Generous paid time off",
  "Clear paths for career growth",
];

const OPENINGS = [
  { title: "Senior Cloud Architect", location: "Remote", type: "Full-time" },
  { title: "AI/ML Engineer", location: "Remote", type: "Full-time" },
  { title: "Cybersecurity Consultant", location: "Hybrid", type: "Full-time" },
  { title: "ERP Solutions Consultant", location: "Remote", type: "Contract" },
];

export default function CareerPage() {
  return (
    <>
      {/* HERO WITH VIDEO BACKGROUND */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/Career.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50 z-10" />

        <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 text-center flex flex-col items-center">
          <Eyebrow light>Careers at Jethavictus</Eyebrow>
          <h1 className="mt-6 font-hero font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-white max-w-4xl">
            {"Join the mission. Build the future."
              .split(" ")
              .map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg text-white/80"
          >
            We&apos;re looking for driven, senior-level talent who thrive on solving
            complex problems and refuse to settle for average.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10"
          >
            <Button href="#openings" variant="solid">
              View Open Roles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section bg-white">
        <FadeUp className="mb-14">
          <RevealText
            as="h2"
            text="What it means to work here."
            className="font-display font-semibold text-2xl md:text-4xl max-w-2xl"
          />
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-10">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <FadeUp key={v.title} delay={i * 0.08}>
                <Icon size={26} className="text-crimson mb-3" strokeWidth={1.75} />
                <p className="font-display font-semibold text-lg">{v.title}</p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{v.detail}</p>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeUp className="mb-12">
            <RevealText
              as="h2"
              text="Benefits built for high performers."
              className="font-display font-semibold text-2xl md:text-4xl max-w-2xl text-white"
            />
          </FadeUp>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <FadeUp key={b} delay={i * 0.05}>
                <div className="border border-white/15 rounded-xl px-6 py-5 hover:border-crimson transition-colors">
                  <p className="text-sm text-white/85">{b}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="openings" className="section bg-white">
        <FadeUp className="mb-14">
          <RevealText
            as="h2"
            text="Open roles."
            className="font-display font-semibold text-2xl md:text-4xl"
          />
        </FadeUp>

        <div className="divide-y divide-line border-t border-line">
          {OPENINGS.map((job, i) => (
            <FadeUp key={job.title} delay={i * 0.06}>
              <div className="py-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-display font-semibold text-lg">{job.title}</p>
                  <div className="mt-2 flex items-center gap-5 text-sm text-haze">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {job.type}
                    </span>
                  </div>
                </div>
                <Button href="/contact" variant="outline">
                  Apply Now
                </Button>
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
            text="Don't see your role?"
            className="font-display font-semibold text-3xl md:text-5xl justify-center flex flex-wrap"
          />
          <p className="mt-3 text-haze">
            We&apos;re always looking for exceptional talent. Reach out anyway.
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



