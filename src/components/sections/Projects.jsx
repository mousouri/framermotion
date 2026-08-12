import { projects } from '../../data/content';
import Pill from '../ui/Pill';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';

const imageModules = import.meta.glob('../../assets/projects/*.png', { eager: true, import: 'default' });

function imgSrc(file) {
  const match = Object.entries(imageModules).find(([path]) => path.endsWith(file));
  return match?.[1];
}

export default function Projects() {
  return (
    <section id="works" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Pill>Featured Work</Pill>
            <h2 className="font-display mt-5 max-w-lg text-3xl leading-[1.1] text-ink md:text-4xl">
              Selected projects built with ambitious brands and bold teams
            </h2>
          </div>
          <Button as="a" href="#contact" variant="outline">
            Book a intro call
          </Button>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.08} className="group">
              <div className="overflow-hidden rounded-2xl bg-black/5">
                <img
                  src={imgSrc(project.image)}
                  alt={project.title}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display mt-6 text-2xl text-ink">{project.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
