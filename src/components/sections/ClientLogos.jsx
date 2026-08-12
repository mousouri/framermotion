import { clients } from '../../data/content';
import Pill from '../ui/Pill';
import Reveal from '../ui/Reveal';

const logoModules = import.meta.glob('../../assets/clients/*.svg', { eager: true, import: 'default' });

function logoSrc(file) {
  const match = Object.entries(logoModules).find(([path]) => path.endsWith(file));
  return match?.[1];
}

// Static, loosely scattered logo wall — logos sit at alternating heights
// rather than a rigid row, echoing the source site's asymmetric layout.
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

        <div className="mt-16 grid grid-cols-2 gap-x-10 gap-y-14 sm:grid-cols-3 md:mt-20 md:grid-cols-4 md:gap-x-14 md:gap-y-20">
          {clients.map((client, i) => (
            <Reveal
              key={client.name}
              delay={i * 0.05}
              className={`flex items-center justify-center ${i % 2 === 1 ? 'md:translate-y-8' : ''}`}
            >
              <img
                src={logoSrc(client.file)}
                alt={client.name}
                className="h-7 w-auto opacity-40 grayscale transition-opacity hover:opacity-70 md:h-9"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
