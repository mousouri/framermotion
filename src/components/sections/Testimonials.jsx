import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import portrait from '../../assets/misc/orb-circle-1.png';
import { testimonials, stats } from '../../data/content';
import Pill from '../ui/Pill';
import Reveal from '../ui/Reveal';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const active = testimonials[index];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x flex flex-col items-center text-center">
        <Reveal>
          <Pill>Client Voices</Pill>
          <h2 className="font-display mt-5 max-w-xl text-3xl leading-[1.1] text-ink md:text-4xl">
            Where ambitious brands build their digital future
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-14 h-40 w-40 overflow-hidden rounded-full shadow-xl shadow-black/10 md:h-48 md:w-48">
          <img src={portrait} alt="" className="h-full w-full object-cover" />
        </Reveal>

        <div className="mt-10 min-h-[9rem] max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Quote className="mx-auto text-accent" size={22} />
              <p className="font-display mt-4 text-xl leading-snug text-ink md:text-2xl">
                “{active.quote}”
              </p>
              <p className="mt-4 text-sm text-muted">
                <span className="font-medium text-ink">{active.name}</span> — {active.role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-ink' : 'w-1.5 bg-black/15'
                }`}
              />
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-black/10 pt-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-ink md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted md:text-sm">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
