export default function Pill({ children, tone = 'light' }) {
  const toneClasses =
    tone === 'dark'
      ? 'bg-white/10 text-white border-white/15'
      : 'bg-white text-ink border-black/10';

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 eyebrow ${toneClasses}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
