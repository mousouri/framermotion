import { motion } from 'framer-motion';
import { hero } from '../../data/content';

export default function Hero() {
  return (
    <section id="top" className="relative pt-44 pb-20 md:pt-56 md:pb-28">
      <div className="container-x flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="whitespace-pre-line text-sm text-muted md:text-base"
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="font-display mt-6 text-[2.75rem] leading-[1.05] text-ink sm:text-6xl md:text-7xl">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            {hero.titleLine1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-1 inline-block rounded-2xl bg-black/[0.06] px-4 py-1"
          >
            {hero.titleLine2}
          </motion.span>
        </h1>
      </div>
    </section>
  );
}
