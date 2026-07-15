import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

export default function Button({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ease-decisive";

  const variants = {
    solid:
      "bg-crimson text-ink hover:bg-crimson-glow hover:-translate-y-0.5",
    outline:
      "border border-line text-bone hover:border-crimson hover:text-crimson hover:-translate-y-0.5",
  };

  return (
    <Link href={href} className={clsx(base, variants[variant], className)}>
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 ease-decisive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}