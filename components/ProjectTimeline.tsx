'use client';

import { motion } from 'framer-motion';

export type TimelineRow = {
  title: string;
  period: string;
  left: number;
  width: number;
  ongoing: boolean;
};

type ProjectTimelineProps = {
  rows: TimelineRow[];
  ticks: { year: number; left: number }[];
};

export default function ProjectTimeline({ rows, ticks }: ProjectTimelineProps) {
  return (
    <div className="mt-8">
      <div aria-hidden="true" className="relative mb-3 h-4">
        {ticks.map((tick) => (
          <span
            key={tick.year}
            className="absolute -translate-x-1/2 font-mono text-[11px] text-muted first:translate-x-0"
            style={{ left: `${tick.left}%` }}
          >
            <span className="hidden sm:inline">{tick.year}</span>
            <span className="sm:hidden">&rsquo;{String(tick.year).slice(2)}</span>
          </span>
        ))}
      </div>

      <div className="relative">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {ticks.map((tick) => (
            <span
              key={tick.year}
              className="absolute inset-y-0 w-px bg-line"
              style={{ left: `${tick.left}%` }}
            />
          ))}
        </div>

        <ul className="relative space-y-5">
          {rows.map((row, index) => (
            <li key={row.title}>
              <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 text-sm">
                <span className="rounded bg-surface pr-2 font-medium">{row.title}</span>
                <span className="rounded bg-surface pr-2 font-mono text-xs text-muted sm:pl-2 sm:pr-0">{row.period}</span>
              </div>
              {/* The track triggers the animation: a bar scaled to zero has no area to observe. */}
              <motion.div
                aria-hidden="true"
                className="h-2.5 rounded-full bg-raised"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className={`h-full origin-left rounded-full ${row.ongoing ? 'bg-brass' : 'bg-sage/70'}`}
                  style={{ marginLeft: `${row.left}%`, width: `${row.width}%` }}
                  variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                  transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-5 font-mono text-xs text-muted">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="h-2 w-5 rounded-full bg-brass" />
          Ongoing
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="h-2 w-5 rounded-full bg-sage/70" />
          Completed
        </span>
      </div>
    </div>
  );
}
