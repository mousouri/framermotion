import { Check } from 'lucide-react';
import { pricing } from '../../data/content';
import Pill from '../ui/Pill';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <Pill>Pricing</Pill>
          <h2 className="font-display mt-5 max-w-lg text-3xl leading-[1.1] text-ink md:text-4xl">
            Choose a plan that fits your needs
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricing.map((tier, i) => (
            <Reveal
              key={tier.plan}
              delay={i * 0.08}
              className={`flex flex-col rounded-3xl p-8 ${
                tier.dark ? 'bg-night text-paper' : 'bg-white text-ink'
              } ${tier.dark ? '' : 'border border-black/5'}`}
            >
              <div
                className={`mb-2 grid h-9 w-9 grid-cols-2 gap-0.5 ${
                  tier.dark ? 'text-accent' : 'text-ink'
                }`}
              >
                <span className="rounded-full bg-current" />
                <span className="rounded-full bg-current" />
                <span className="rounded-full bg-current" />
                <span className="rounded-full bg-current" />
              </div>
              <h3 className="font-display text-2xl">{tier.plan}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${tier.dark ? 'text-paper/60' : 'text-muted'}`}>
                {tier.description}
              </p>

              <div className={`my-6 border-t border-dashed ${tier.dark ? 'border-white/15' : 'border-black/10'}`} />

              <ul className="flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={16} className={tier.dark ? 'text-accent' : 'text-ink/60'} />
                    <span className={tier.dark ? 'text-paper/85' : 'text-ink/80'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-baseline gap-1">
                <span className="font-display text-4xl">{tier.price}</span>
                <span className={`text-sm ${tier.dark ? 'text-paper/50' : 'text-muted'}`}>{tier.period}</span>
              </div>

              <Button
                as="a"
                href="#contact"
                variant={tier.dark ? 'light' : 'dark'}
                className="mt-6 w-full"
              >
                {tier.cta}
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
