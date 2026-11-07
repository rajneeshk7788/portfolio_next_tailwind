import { BarChart3, Boxes, Gauge, Network, ShoppingBag, Zap, type LucideIcon } from 'lucide-react';
import { domains, facts, focusAreas, journey, profile, snapshot } from '@/lib/content';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const focusIcons: LucideIcon[] = [BarChart3, Boxes, Network, Gauge];

const domainIcons: Record<(typeof domains)[number]['icon'], LucideIcon> = {
  energy: Zap,
  analytics: BarChart3,
  commerce: ShoppingBag,
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHeading eyebrow="About" title="Frontend depth, full stack range" />

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <Reveal className="card h-full p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-paper/90 sm:text-xl sm:leading-relaxed">{profile.summary}</p>
            <p className="mt-5 leading-relaxed text-muted">{profile.about}</p>
            <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-line pt-7 sm:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col-reverse justify-end">
                  <dt className="mt-1 text-xs leading-snug text-muted sm:text-sm">{fact.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-brass">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.08} className="card h-full p-6 sm:p-8">
            <h3 className="label">At a glance</h3>
            <dl className="mt-3 divide-y divide-line">
              {snapshot.map((row) => (
                <div key={row.label} className="py-3.5 last:pb-0">
                  <dt className="text-xs text-muted">{row.label}</dt>
                  <dd className="mt-1 text-sm font-medium leading-snug">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <h3 className="label mb-5 mt-14">What I focus on</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => {
            const Icon = focusIcons[index];
            return (
              <li key={area.title}>
                <Reveal delay={index * 0.06} className="card card-hover h-full p-5 sm:p-6">
                  <span className="icon-tile hidden sm:flex">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h4 className="font-display text-lg sm:mt-5 font-medium leading-snug">{area.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{area.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-14">
          <div>
            <h3 className="label mb-5">Domains I have worked in</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-5 lg:grid-cols-1 lg:gap-y-4">
              {domains.map((domain, index) => {
                const Icon = domainIcons[domain.icon];
                return (
                  <li key={domain.title}>
                    <Reveal delay={index * 0.05} className="flex gap-3.5">
                      <Icon size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-sage" />
                      <div>
                        <h4 className="text-sm font-medium">{domain.title}</h4>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted">{domain.text}</p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="label mb-5">The journey so far</h3>
            <ol className="relative grid gap-x-5 gap-y-6 border-l border-line pl-5 sm:grid-cols-3 sm:border-l-0 sm:pl-0">
              {journey.map((step, index) => (
                <li key={step.year} className="relative sm:border-t sm:border-line sm:pt-5">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[1.53rem] top-1.5 h-2 w-2 rounded-full sm:-top-1 sm:left-0 ${
                      index === journey.length - 1 ? 'bg-brass' : 'bg-paper/40'
                    }`}
                  />
                  <p className="font-mono text-xs text-brass">{step.year}</p>
                  <h4 className="mt-1.5 font-medium leading-snug">{step.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
