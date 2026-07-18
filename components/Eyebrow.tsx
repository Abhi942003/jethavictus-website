import { ReactNode } from "react";
import clsx from "clsx";

type EyebrowProps = {
  children: ReactNode;
  light?: boolean;
};

export default function Eyebrow({
  children,
  light = false,
}: EyebrowProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-[0.2em]",
        light
          ? "border-white/20 text-white"
          : "border-line text-muted-foreground"
      )}
    >
      {children}
    </span>
  );
}