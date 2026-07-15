export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow mb-5">
      <span className="text-crimson">▸</span>
      {children}
    </div>
  );
}