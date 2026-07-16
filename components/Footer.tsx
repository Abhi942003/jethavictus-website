import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

const domainLabel = "www" + "." + "jethavictus" + ".com";
const domainUrl = "https://" + domainLabel;

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-line/10">
      <div className="max-w-content mx-auto px-6 md:px-10 py-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-semibold text-lg text-ink">Jethavictus Solutions</p>
            <a href={domainUrl} className="text-sm text-fog hover:text-crimson transition-colors">
              {domainLabel}
            </a>
          </div>

          <nav className="flex flex-wrap gap-6">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-fog hover:text-ink transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4 text-sm text-fog">
            <a href="https://linkedin.com" className="hover:text-ink transition-colors">LinkedIn</a>
            <a href="https://twitter.com" className="hover:text-ink transition-colors">Twitter</a>
          </div>
        </div>

        <div className="border-t border-line/10 mt-10 pt-6 text-sm text-fog">
          {new Date().getFullYear()} Jethavictus Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}