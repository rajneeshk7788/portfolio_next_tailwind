import { achievements } from '@/lib/content';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Achievements() {
  return (
    <section id="achievements" className="section border-t border-line">
      <div className="wrap">
        <SectionHeading eyebrow="Achievements" title="Results from the work" />

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <li key={achievement.title} className="bg-ink">
              <Reveal delay={index * 0.05} className="h-full p-6 transition-colors duration-300 hover:bg-surface sm:p-7">
                <p className="mb-3 font-mono text-xs text-brass">{achievement.context}</p>
                <h3 className="font-display text-lg font-medium leading-snug">{achievement.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{achievement.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
