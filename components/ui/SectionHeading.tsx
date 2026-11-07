import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Use on the paper-coloured section. */
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, light }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-3xl lg:mb-16">
      <p className={`eyebrow mb-4 ${light ? 'text-brass-deep' : 'text-brass'}`}>{eyebrow}</p>
      <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${light ? 'text-ink/70' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
