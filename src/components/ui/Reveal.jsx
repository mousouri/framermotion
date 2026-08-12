import { motion } from 'framer-motion';

// Shared scroll-reveal wrapper — fades and lifts content into place the first
// time it enters the viewport, mirroring the site's scroll-triggered reveals.
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
  once = true,
  amount = 0,
  ...rest
}) {
  const Comp = motion[as] ?? motion.div;

  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      // A generous negative bottom margin widens the trigger zone well past
      // the viewport edge so quick/large scroll jumps can't skip past an
      // element without ever intersecting it.
      viewport={{ once, amount, margin: '15% 0px -10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
