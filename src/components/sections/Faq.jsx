import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faq } from '../../data/content';
import Pill from '../ui/Pill';
import Reveal from '../ui/Reveal';

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-black/10 py-6">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-display text-lg text-ink md:text-xl">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-ink"
        >
          <Plus size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pt-4 text-sm leading-relaxed text-muted md:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <Pill>FAQ</Pill>
          <h2 className="font-display mt-5 max-w-lg text-3xl leading-[1.1] text-ink md:text-4xl">
            Questions? We are here to help
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          {faq.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
