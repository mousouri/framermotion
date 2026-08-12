import { motion, useMotionValue, useSpring } from 'framer-motion';

const variants = {
  dark: 'bg-ink text-paper hover:bg-black',
  light: 'bg-white text-ink hover:bg-white/90',
  outline: 'bg-transparent text-ink border border-black/15 hover:border-black/30',
};

export default function Button({
  children,
  variant = 'dark',
  className = '',
  as = 'a',
  magnetic = true,
  ...props
}) {
  const Comp = motion[as] ?? motion.a;

  // Subtle magnetic pull toward the cursor — nudges toward the pointer on
  // hover and springs back on leave. No-ops on touch (no mousemove there).
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouseMove = (e) => {
    if (!magnetic) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Comp
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={magnetic ? { x: springX, y: springY } : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
