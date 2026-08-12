// Seamless infinite marquee: the track is duplicated once and animated
// -50% so the loop point is invisible, driven by a plain CSS keyframe
// (cheaper than animating per-frame with JS for a strip that never stops).
export default function Marquee({ children, speed = 'slow', className = '' }) {
  const animClass = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee';

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent" />
      <div className={`flex w-max items-center gap-16 ${animClass}`}>
        <div className="flex w-max items-center gap-16">{children}</div>
        <div className="flex w-max items-center gap-16" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
