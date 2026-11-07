import { Calendar, MapPin } from 'lucide-react';
import { experience, projects } from '@/lib/content';
import ProjectTimeline, { type TimelineRow } from './ProjectTimeline';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

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
    <section id="experience" className="section border-t border-line">
      <div className="wrap">
        <SectionHeading eyebrow="Professional experience" title="Where I build" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-display text-2xl font-medium">{experience.company}</p>
            <p className="mt-1 text-brass">{experience.role}</p>
            <div className="mt-4 space-y-2 text-sm text-muted">
              <p className="flex items-center gap-2">
                <Calendar size={15} aria-hidden="true" />
                {experience.period}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={15} aria-hidden="true" />
                {experience.location}
              </p>
            </div>
          </Reveal>

          <ol className="divide-y divide-line border-y border-line">
            {experience.responsibilities.map((item, index) => (
              <li key={item}>
                <Reveal delay={index * 0.04} className="flex gap-5 py-5">
                  <span aria-hidden="true" className="mt-0.5 font-mono text-xs text-brass">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="leading-relaxed text-paper/90">{item}</span>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="card mt-14 p-5 sm:p-8">
          <h3 className="font-display text-xl font-medium">Project timeline</h3>
          <p className="mt-1 text-sm text-muted">Dated projects from my resume, oldest at the bottom.</p>
          <ProjectTimeline rows={rows} ticks={ticks} />
        </Reveal>
      </div>
    </section>
  );
}
