"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Home } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import FadeUp from "@/components/FadeUp";
import RevealText from "@/components/RevealText";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-white pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url(/contact/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 text-center">
          <Eyebrow light>Contact Us</Eyebrow>
          <h1 className="mt-6 font-hero font-bold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-4xl mx-auto">
            {"Let's start a conversation."
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
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-white/75"
          >
            No pressure, no pitch — just a direct conversation about what&apos;s possible.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="section bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <RevealText
              as="h2"
              text="Get in touch."
              className="font-display font-semibold text-2xl md:text-4xl justify-center flex flex-wrap"
            />
            <p className="mt-5 text-gray-600 leading-relaxed">
              Whether you have a specific challenge in mind or just want to
              explore what&apos;s possible, we&apos;re ready to listen.
            </p>

            <div className="mt-10 flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-crimson shrink-0" strokeWidth={1.75} />
                <a href="mailto:hello@jethavictus.com" className="text-gray-700 hover:text-crimson transition-colors">
                  hello@jethavictus.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-crimson shrink-0" strokeWidth={1.75} />
                <span className="text-gray-700">+1 (000) 000-0000</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={20} className="text-crimson shrink-0" strokeWidth={1.75} />
                <span className="text-gray-700">Remote-first, serving clients worldwide</span>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button href="/" variant="solid">
                <Home size={16} className="mr-2" />
                Back to Home
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}


