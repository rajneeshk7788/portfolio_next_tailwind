import { Award, GraduationCap } from 'lucide-react';
import { certifications, education } from '@/lib/content';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section border-t border-line bg-deep">
      <div className="wrap">
        <SectionHeading eyebrow="Education & certifications" title="Foundations in computer science" />

        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal className="card h-full p-6 sm:p-8">
            <h3 className="mb-6 flex items-center gap-3.5 font-display text-xl font-medium">
              <span className="icon-tile">
                <GraduationCap size={18} aria-hidden="true" />
              </span>
              Education
            </h3>
            <ol className="space-y-6 border-l border-line pl-5">
              {education.map((item) => (
                <li key={item.degree} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.53rem] top-1.5 h-2 w-2 rounded-full bg-brass"
                  />
                  <h4 className="font-medium leading-snug">{item.degree}</h4>
                  <p className="mt-1 text-sm text-muted">
                    {item.institution}, {item.location}
                  </p>
                  <p className="mt-2 font-mono text-xs text-muted">{item.period}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.08} className="card h-full p-6 sm:p-8">
            <h3 className="mb-6 flex items-center gap-3.5 font-display text-xl font-medium">
              <span className="icon-tile">
                <Award size={18} aria-hidden="true" />
              </span>
              Certifications & training
            </h3>
            <ul className="space-y-6 border-l border-line pl-5">
              {certifications.map((item) => (
                <li key={item.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.53rem] top-1.5 h-2 w-2 rounded-full bg-sage"
                  />
                  <h4 className="font-medium leading-snug">{item.title}</h4>
                  {item.issuer && <p className="mt-1 text-sm text-muted">{item.issuer}</p>}
                  {item.period && <p className="mt-2 font-mono text-xs text-muted">{item.period}</p>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
