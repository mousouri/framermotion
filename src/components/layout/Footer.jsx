import { socials } from '../../data/content';
import Reveal from '../ui/Reveal';

export default function Footer() {
  return (
    <footer className="overflow-hidden pt-16">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-b border-black/10 pb-10">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-wide text-muted transition-colors hover:text-ink"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <Reveal y={0} className="relative select-none pt-4 pb-6 text-center">
        <span className="font-display block text-[19vw] leading-none tracking-tight text-black/5 sm:text-[16vw] md:text-[13rem]">
          orionix
        </span>
      </Reveal>
    </footer>
  );
}
