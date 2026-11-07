import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl lg:mb-16">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brass">{eyebrow}</p>
      <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}
