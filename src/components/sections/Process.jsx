import { process } from '../../data/content';
import Pill from '../ui/Pill';
import Reveal from '../ui/Reveal';

const iconModules = import.meta.glob('../../assets/icons/*.png', { eager: true, import: 'default' });

function iconSrc(file) {
  const match = Object.entries(iconModules).find(([path]) => path.endsWith(file));
  return match?.[1];
}

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <Pill>How We Work</Pill>
          <h2 className="font-display mt-5 max-w-lg text-3xl leading-[1.1] text-ink md:text-4xl">
            From Complexity to Clarity in 3 Steps
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-sm shadow-black/5">
                <img src={iconSrc(step.icon)} alt="" className="h-full w-full object-contain" />
              </div>
              <h3 className="font-display mt-6 text-2xl text-ink">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
