import Link from "next/link";
import clsx from "clsx";

export default function Button({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "dark";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200";

  const variants = {
    solid: "bg-crimson text-white hover:bg-crimson-dim",
    outline: "border border-line text-bone hover:border-crimson hover:text-crimson",
    dark: "bg-bone text-ink hover:bg-bone/90",
  };

  return (
    <Link href={href} className={clsx(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
