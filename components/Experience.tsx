import {
  Boxes,
  Building2,
  Calendar,
  GitPullRequest,
  Gauge,
  MapPin,
  RefreshCw,
  Telescope,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { experience, projects } from '@/lib/content';
import ProjectTimeline, { type TimelineRow } from './ProjectTimeline';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const responsibilityIcons: LucideIcon[] = [Gauge, Users, RefreshCw, GitPullRequest, Boxes, Telescope];

const toMonths = (date: Date) => date.getFullYear() * 12 + date.getMonth();
const parseMonth = (value: string) => {
  const [year, month] = value.split('-').map(Number);
  return year * 12 + (month - 1);
};

function buildTimeline() {
  const dated = projects.filter((project) => project.start);
  const end = toMonths(new Date()) + 1;
  const start = Math.min(...dated.map((project) => parseMonth(project.start as string)));
  const toPercent = (month: number) => ((month - start) / (end - start)) * 100;

  const rows: TimelineRow[] = dated.map((project) => {
    const from = parseMonth(project.start as string);
    const to = project.end ? parseMonth(project.end) + 1 : end;
    return {
      title: project.title,
      period: project.period,
      left: toPercent(from),
      width: toPercent(to) - toPercent(from),
      ongoing: !project.end,
    };
  });

  const ticks: { year: number; left: number }[] = [];
  for (let year = Math.ceil(start / 12); year * 12 < end; year += 1) {
    ticks.push({ year, left: toPercent(year * 12) });
  }

  return { rows, ticks };
}

export default function Experience() {
  const { rows, ticks } = buildTimeline();

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHeading eyebrow="Professional experience" title="Where I build" />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)] lg:gap-8">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6 sm:p-7">
              <span className="icon-tile">
                <Building2 size={18} aria-hidden="true" />
              </span>
              <p className="mt-5 font-display text-2xl font-medium leading-tight">{experience.company}</p>
              <p className="mt-1.5 text-brass">{experience.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{experience.summary}</p>
              <div className="mt-5 space-y-2 border-t border-line pt-5 text-sm text-muted">
                <p className="flex items-center gap-2.5">
                  <Calendar size={15} aria-hidden="true" />
                  {experience.period}
                </p>
                <p className="flex items-center gap-2.5">
                  <MapPin size={15} aria-hidden="true" />
                  {experience.location}
                </p>
              </div>
            </div>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {experience.responsibilities.map((item, index) => {
              const Icon = responsibilityIcons[index];
              return (
                <li key={item.title}>
                  <Reveal delay={index * 0.04} className="card card-hover h-full p-5 sm:p-6">
                    <Icon size={20} aria-hidden="true" className="hidden text-brass sm:block" />
                    <h3 className="font-display sm:mt-4 text-lg font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        <Reveal className="card mt-8 p-5 sm:p-8">
          <h3 className="font-display text-xl font-medium">Project timeline</h3>
          <p className="mt-1 text-sm text-muted">Dated projects from my resume, oldest at the bottom.</p>
          <ProjectTimeline rows={rows} ticks={ticks} />
        </Reveal>
      </div>
    </section>
  );
}
