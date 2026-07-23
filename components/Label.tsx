import { ReactNode } from "react";

type LabelProps = {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
  icon?: ReactNode;
};

export default function Label({
  children,
  light = false,
  className = "",
  icon,
}: LabelProps) {
  return (
    <div
      className={`mb-4 flex items-center gap-2 ${
        light ? "text-white/70" : "text-[#C96A1B]"
      } ${className}`}
    >
      {icon}
      <span className="text-sm font-semibold uppercase tracking-[0.3em]">
        {children}
      </span>
    </div>
  );
}