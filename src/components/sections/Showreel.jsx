import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import reel from '../../assets/misc/hero-visual.png';
import Reveal from '../ui/Reveal';
import Marquee from '../ui/Marquee';

export default function Showreel() {
  return (
    <section className="py-10 md:py-16">
      <div className="container-x">
        <Reveal className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-night shadow-2xl shadow-black/10">
          <img
            src={reel}
            alt="Orionix showreel preview"
            className="aspect-4/3 w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              type="button"
              aria-label="Watch our reel"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-ink backdrop-blur"
            >
              <Play size={22} className="ml-1" fill="currentColor" />
            </motion.button>
          </div>
        </Reveal>
      </div>

      <div className="mt-10">
        <Marquee>
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-display flex items-center gap-4 text-2xl text-ink/70 md:text-3xl"
            >
              Watch our reel
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
