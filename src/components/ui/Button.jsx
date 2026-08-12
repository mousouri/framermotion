import { motion } from 'framer-motion';

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
  ...props
}) {
  const Comp = motion[as] ?? motion.a;

  return (
    <Comp
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
