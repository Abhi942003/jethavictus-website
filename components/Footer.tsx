import Link from "next/link";

const SERVICES = [
  "Strategic IT Consulting",
  "AI & Machine Learning",
  "Cloud Architecture & AWS",
  "Cybersecurity & Risk",
  "Enterprise ERP",
  "Blockchain & Emerging Tech",
  "IoT & Data Science",
];

export default function Footer() {
  return (
    <footer className="bg-ink-alt border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <p className="font-display font-bold text-3xl md:text-5xl leading-tight max-w-3xl">
          Engineered for victory.
          <br />
          <span className="text-crimson">Built for the future.</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-haze mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-bone/80 hover:text-crimson transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-haze mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-bone/80 hover:text-crimson transition-colors">About</Link></li>
              <li><Link href="/career" className="text-sm text-bone/80 hover:text-crimson transition-colors">Career</Link></li>
              <li><Link href="/contact" className="text-sm text-bone/80 hover:text-crimson transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-haze mb-4">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-bone/80">
              <li>hello@jethavictus.com</li>
              <li>www.jethavictus.com</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-haze mb-4">
              Industries
            </p>
            <ul className="space-y-2.5 text-sm text-bone/80">
              <li>Financial Services</li>
              <li>Healthcare</li>
              <li>Manufacturing</li>
              <li>Government</li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-haze font-mono uppercase tracking-widest">
          <span>© {new Date().getFullYear()} Jethavictus Solutions</span>
          <span>Every engagement is a mission.</span>
        </div>
      </div>
    </footer>
  );
}