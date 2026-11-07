import { workProcess } from '@/lib/content';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Process() {
  return (
    <section id="process" className="section bg-paper text-ink">
      <div className="wrap">
        <SectionHeading
          light
          eyebrow="How I work"
          title="From a shared understanding to code that lasts"
          description="The way I approach a feature, whether I am leading the frontend or joining an existing team."
        />

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {workProcess.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 0.07} className="border-t-2 border-ink/80 pt-5">
                <span aria-hidden="true" className="font-mono text-sm text-brass-deep">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
