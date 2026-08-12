import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Brief brand curtain on first paint — plays once per tab session so
// repeat visits (and in-tab refreshes) don't get replayed at the user.
// Skipped outright for prefers-reduced-motion.
export default function PageIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyShown = sessionStorage.getItem('orionix-intro-shown');
    if (reduced || alreadyShown) return undefined;

    sessionStorage.setItem('orionix-intro-shown', '1');
    setVisible(true);
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
    }, 850);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-night"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="font-display text-2xl text-paper"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            orionix
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
