export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm text-bone mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
      {children}
    </span>
  );
}
