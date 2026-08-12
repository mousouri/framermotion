import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Fingerprint, TrendingUp, Share2, LayoutPanelLeft, Code2 } from 'lucide-react';
import { services } from '../../data/content';
import Pill from '../ui/Pill';
import Reveal from '../ui/Reveal';

const icons = [Fingerprint, TrendingUp, Share2, LayoutPanelLeft, Code2];

export default function Services() {
  const [active, setActive] = useState(0);
  const ActiveIcon = icons[active];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <Pill>What We Do</Pill>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-16 md:grid-cols-[280px_1fr]">
          <div className="hidden md:block">
            <div className="sticky top-32 flex flex-col items-start gap-8">
              <div className="relative flex h-24 w-24 items-center justify-center">
                {/* Slow-spinning dashed ring — idles continuously, independent
                    of which service icon is currently showing. */}
                <span className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-black/15" />
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ActiveIcon size={30} strokeWidth={1.5} className="text-accent" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Numbered progress rail — one tick per service, active one
                  filled in, tracking scroll position via onViewportEnter below. */}
              <div className="flex flex-col gap-2.5">
                {services.map((service, i) => (
                  <div key={service.title} className="flex items-center gap-3">
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                        i === active ? 'bg-accent' : 'bg-black/15'
                      }`}
                    />
                    <span
                      className={`eyebrow transition-colors duration-300 ${
                        i === active ? 'text-ink' : 'text-faint'
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-black/10">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                onViewportEnter={() => setActive(i)}
                viewport={{ margin: '-40% 0px -40% 0px' }}
                className="py-10 first:pt-0"
              >
                <div className="flex items-center gap-4 md:hidden">
                  {(() => {
                    const Icon = icons[i];
                    return <Icon size={22} strokeWidth={1.5} className="text-accent" />;
                  })()}
                  <span className="eyebrow text-faint">0{i + 1}</span>
                </div>
                <h3 className="font-display mt-4 text-2xl text-ink md:mt-0 md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
