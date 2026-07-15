"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ease-decisive ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link href="/" className="font-display font-bold text-lg tracking-tight">
          JETHA<span className="text-crimson">VICTUS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-haze hover:text-bone transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-line px-5 py-2.5 text-xs font-mono uppercase tracking-widest hover:border-crimson hover:text-crimson transition-colors duration-200"
          >
            Start a Mission
          </Link>
        </nav>

        <button
          className="md:hidden text-bone"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-ink border-b border-line"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-widest text-haze hover:text-bone py-3 border-b border-line/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}