import { facts, focusAreas, profile } from '@/lib/content';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="section border-t border-line">
      <div className="wrap">
        <SectionHeading eyebrow="About" title="Frontend depth, full stack range" />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <p className="text-lg leading-relaxed text-paper/90">{profile.summary}</p>
            <p className="mt-6 leading-relaxed text-muted">{profile.about}</p>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col-reverse justify-end">
                  <dt className="mt-1 text-xs leading-snug text-muted sm:text-sm">{fact.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-brass sm:text-4xl">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <ul className="divide-y divide-line border-y border-line">
            {focusAreas.map((area, index) => (
              <li key={area.title}>
                <Reveal delay={index * 0.06} className="py-5">
                  <h3 className="font-display text-lg font-medium">{area.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{area.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
