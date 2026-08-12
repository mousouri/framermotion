import { ArrowUpRight } from 'lucide-react';
import { blog } from '../../data/content';
import Pill from '../ui/Pill';
import Reveal from '../ui/Reveal';

const imageModules = import.meta.glob('../../assets/blog/*.png', { eager: true, import: 'default' });

function imgSrc(file) {
  const match = Object.entries(imageModules).find(([path]) => path.endsWith(file));
  return match?.[1];
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Pill>Insights</Pill>
            <h2 className="font-display mt-5 max-w-lg text-3xl leading-[1.1] text-ink md:text-4xl">
              Ideas, Insights & Perspectives
            </h2>
          </div>
          <a href="#blog" className="inline-flex items-center gap-1 text-sm text-ink/70 hover:text-ink">
            View all Articles <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {blog.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08} as="a" href="#blog" className="group block">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={imgSrc(post.image)}
                  alt={post.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs text-muted">
                <span className="eyebrow">{post.date}</span>
                <span className="rounded-full border border-black/10 px-2 py-0.5">{post.category}</span>
              </div>
              <h3 className="font-display mt-3 text-xl leading-snug text-ink">{post.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
