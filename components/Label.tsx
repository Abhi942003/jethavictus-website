export default function Label({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium tracking-wide mb-4 text-crimson">
      <span className="w-5 h-px bg-crimson" />
      {children}
    </div>
  );
}