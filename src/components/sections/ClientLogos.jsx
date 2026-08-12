import { clients } from '../../data/content';
import Pill from '../ui/Pill';
import Reveal from '../ui/Reveal';
import Marquee from '../ui/Marquee';

const logoModules = import.meta.glob('../../assets/clients/*.svg', { eager: true, import: 'default' });

function logoSrc(file) {
  const match = Object.entries(logoModules).find(([path]) => path.endsWith(file));
  return match?.[1];
}

export default function ClientLogos() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <Pill>Our Clients</Pill>
          <h2 className="font-display mt-5 max-w-md text-3xl leading-[1.1] text-ink md:text-4xl">
            Trusted by world-leading enterprises
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-14">
        <Marquee>
          {clients.map((client) => (
            <img
              key={client.name}
              src={logoSrc(client.file)}
              alt={client.name}
              className="h-8 w-auto opacity-40 grayscale transition-opacity hover:opacity-70 md:h-9"
            />
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
