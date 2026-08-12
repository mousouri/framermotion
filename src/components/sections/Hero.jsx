import { motion } from 'framer-motion';
import { Bold, Italic, Underline, ChevronDown } from 'lucide-react';
import { hero } from '../../data/content';

export default function Hero() {
  return (
    <section id="top" className="relative pt-44 pb-10 md:pt-56 md:pb-14">
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

        {/* Decorative "everything is editable" toolbar mockup — purely cosmetic,
            echoes the CMS-editor chrome from the source template. */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 hidden items-center gap-1 rounded-full border border-black/10 bg-white px-2 py-1.5 text-xs text-ink/60 shadow-sm shadow-black/5 sm:flex"
        >
          <span className="flex items-center gap-1 px-2 text-ink/80">
            Heading 1 <ChevronDown size={12} />
          </span>
          <span className="h-4 w-px bg-black/10" />
          <Bold size={13} className="mx-1.5 text-ink/30" />
          <Italic size={13} className="mx-1.5 text-ink/30" />
          <Underline size={13} className="mx-1.5 text-ink/30" />
          <span className="h-4 w-px bg-black/10" />
          <span className="flex items-center gap-0.5 px-2 font-medium text-ink">
            A <ChevronDown size={12} />
          </span>
        </motion.div>
      </div>

      {/* Bottom utility bar — studio time zone + contact, sits on the hero's
          bottom edge like a thin status bar. */}
      <div className="container-x mt-20 hidden items-center justify-between border-t border-black/10 pt-5 text-xs text-muted eyebrow md:flex">
        <span>GMT-7</span>
        <a href="mailto:hello@orionix.com" className="transition-colors hover:text-ink">
          HELLO&nbsp;@&nbsp;ORIONIX.COM
        </a>
      </div>
    </section>
  );
}
