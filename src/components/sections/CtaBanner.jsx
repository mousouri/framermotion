import orb from '../../assets/misc/orb-circle-2.png';
import Pill from '../ui/Pill';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';

export default function CtaBanner() {
  return (
    <section id="contact" className="px-6 pb-6 md:px-10">
      <Reveal className="relative overflow-hidden rounded-4xl bg-night px-6 py-20 text-center md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-full h-112 w-md max-w-none -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full opacity-70 grayscale">
          <img src={orb} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-night via-night/40 to-night/70" />
        <div className="relative flex flex-col items-center">
          <Pill tone="dark">Idea → Reality</Pill>
          <h2 className="font-display mt-6 max-w-2xl text-3xl leading-[1.1] text-paper md:text-5xl">
            Got a great idea you want to bring to life?
          </h2>
          <Button as="a" href="mailto:hello@orionix.com" variant="light" className="mt-8">
            Book a call
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
