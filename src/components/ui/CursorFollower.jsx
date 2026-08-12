import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// A small ring that trails the pointer and expands over links/buttons.
// Desktop-only (pointer: fine) and skipped entirely for reduced-motion —
// this is pure flourish, never load-bearing for interaction.
export default function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 450, mass: 0.5 });
  const springY = useSpring(y, { damping: 30, stiffness: 450, mass: 0.5 });

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduced) return undefined;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const handleOver = (e) => {
      setHovering(Boolean(e.target.closest('a, button, [role="button"]')));
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-ink mix-blend-difference"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{ width: hovering ? 56 : 10, height: hovering ? 56 : 10 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
