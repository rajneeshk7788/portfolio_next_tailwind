import { Award, GraduationCap } from 'lucide-react';
import { certifications, education } from '@/lib/content';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section border-t border-line">
      <div className="wrap">
        <SectionHeading eyebrow="Education & certifications" title="Foundations in computer science" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-2 flex items-center gap-2.5 font-display text-xl font-medium">
              <GraduationCap size={20} aria-hidden="true" className="text-brass" />
              Education
            </h3>
            <ul className="divide-y divide-line">
              {education.map((item, index) => (
                <li key={item.degree}>
                  <Reveal delay={index * 0.06} className="py-5">
                    <h4 className="font-medium leading-snug">{item.degree}</h4>
                    <p className="mt-1 text-sm text-muted">
                      {item.institution}, {item.location}
                    </p>
                    <p className="mt-2 font-mono text-xs text-muted">{item.period}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 flex items-center gap-2.5 font-display text-xl font-medium">
              <Award size={20} aria-hidden="true" className="text-brass" />
              Certifications & training
            </h3>
            <ul className="divide-y divide-line">
              {certifications.map((item, index) => (
                <li key={item.title}>
                  <Reveal delay={index * 0.06} className="py-5">
                    <h4 className="font-medium leading-snug">{item.title}</h4>
                    {item.issuer && <p className="mt-1 text-sm text-muted">{item.issuer}</p>}
                    {item.period && <p className="mt-2 font-mono text-xs text-muted">{item.period}</p>}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
