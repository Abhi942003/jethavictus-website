export default function Label({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-sm font-medium tracking-wide mb-4 text-crimson`}
    >
      <span className={`w-5 h-px ${light ? "bg-crimson" : "bg-crimson"}`} />
      {children}
    </div>
  );
}
