"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import FadeUp from "@/components/FadeUp";
import RevealText from "@/components/RevealText";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New inquiry from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:hello@jethavictus.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-white pt-40 pb-24 overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <Eyebrow light>Contact Us</Eyebrow>
          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-4xl mx-auto">
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

      {/* FORM + INFO */}
      <section className="section bg-white">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-16">
          {/* CONTACT INFO */}
          <FadeUp>
            <RevealText
              as="h2"
              text="Get in touch."
              className="font-display font-semibold text-2xl md:text-4xl"
            />
            <p className="mt-5 text-gray-600 leading-relaxed max-w-sm">
              Whether you have a specific challenge in mind or just want to
              explore what&apos;s possible, we&apos;re ready to listen.
            </p>

            <div className="mt-10 space-y-6">
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
          </FadeUp>

          {/* FORM */}
          <FadeUp delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-crimson transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-crimson transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-crimson transition-colors"
                  placeholder="+1 (000) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-crimson transition-colors resize-none"
                  placeholder="Tell us about your challenge..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-crimson text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
