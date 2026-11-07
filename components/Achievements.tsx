import { BarChart3, Crown, Gauge, GitPullRequest, ShieldCheck, Target, type LucideIcon } from 'lucide-react';
import { achievements } from '@/lib/content';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const icons: LucideIcon[] = [Crown, Target, BarChart3, Gauge, ShieldCheck, GitPullRequest];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="wrap">
        <SectionHeading eyebrow="Achievements" title="Results from the work" />

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = icons[index];
            return (
              <li key={achievement.title}>
                <Reveal delay={index * 0.05} className="card card-hover h-full p-6 sm:p-7">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="icon-tile">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="text-right font-mono text-xs text-muted">{achievement.context}</span>
                  </div>
                  <h3 className="font-display text-lg font-medium leading-snug">{achievement.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{achievement.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
