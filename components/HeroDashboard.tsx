'use client';

import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const LINE = 'M0 120 C30 112 44 76 74 80 S118 124 152 106 S196 40 232 48 S280 104 312 80 S366 22 400 30';
const LINE_2 = 'M0 138 C36 134 58 112 92 118 S150 142 188 128 S246 88 282 98 S352 92 400 72';
const KPIS = [
  { label: 'Consumption', value: '1,284', unit: 'kWh', tone: 'text-paper' },
  { label: 'Peak load', value: '86', unit: 'kW', tone: 'text-brass' },
  { label: 'Efficiency', value: '94', unit: '%', tone: 'text-sage' },
];
const ROWS = [
  { name: 'Meter A', width: '78%', color: 'bg-brass' },
  { name: 'Meter B', width: '56%', color: 'bg-sage' },
  { name: 'Meter C', width: '34%', color: 'bg-paper/40' },
];

/**
 * Illustration of the kind of product Rajneesh builds. The numbers are sample
 * data, and the caption says so.
 */
export default function HeroDashboard() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease }}
      className="relative"
    >
      <div aria-hidden="true" className="overflow-hidden rounded-2xl border border-line bg-surface shadow-panel">
        <div className="flex items-center gap-2 border-b border-line bg-raised/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          <span className="ml-3 font-mono text-[11px] text-muted">monitoring / overview</span>
          <span className="ml-auto flex items-center gap-2 font-mono text-[11px] text-sage">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sage" />
            Live
          </span>
        </div>

        <div className="space-y-3 p-3 sm:p-4">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {KPIS.map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-line bg-ink/60 p-2.5 sm:p-3">
                <p className="truncate text-[10px] text-muted sm:text-[11px]">{kpi.label}</p>
                <p className={`mt-1 font-display text-lg font-semibold sm:text-2xl ${kpi.tone}`}>
                  {kpi.value}
                  <span className="ml-1 text-[10px] font-normal text-muted sm:text-xs">{kpi.unit}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-line bg-ink/60 p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-medium">Load over time</p>
              <div className="flex gap-1">
                {['1D', '1W', '1M'].map((range, index) => (
                  <span
                    key={range}
                    className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${
                      index === 1 ? 'bg-brass/15 text-brass' : 'text-muted'
                    }`}
                  >
                    {range}
                  </span>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 400 150" className="block w-full">
              <defs>
                <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#E8B563" stopOpacity="0.25" />
                  <stop offset="1" stopColor="#E8B563" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[30, 65, 100, 135].map((y) => (
                <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(236,233,226,0.07)" />
              ))}
              <motion.path
                d={`${LINE} V150 H0 Z`}
                fill="url(#hero-area)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
              />
              <motion.path
                d={LINE_2}
                fill="none"
                stroke="#7FD1B9"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 0.6, ease: 'easeInOut' }}
              />
              <motion.path
                d={LINE}
                fill="none"
                stroke="#E8B563"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 0.5, ease: 'easeInOut' }}
              />
              <circle cx="400" cy="30" r="4" fill="#E8B563" />
            </svg>
          </div>

          <div className="space-y-2 rounded-xl border border-line bg-ink/60 p-3">
            {ROWS.map((row) => (
              <div key={row.name} className="grid grid-cols-[3.5rem_1fr] items-center gap-2">
                <span className="font-mono text-[10px] text-muted">{row.name}</span>
                <span className="h-1.5 rounded-full bg-raised">
                  <span className={`block h-full rounded-full ${row.color}`} style={{ width: row.width }} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1, ease }}
        className="absolute -bottom-10 -left-8 hidden rounded-xl border border-line bg-raised p-3.5 font-mono text-[11px] leading-5 shadow-panel xl:block"
      >
        <span className="text-sage">const</span> Reading = z.<span className="text-brass">object</span>({'{'}
        <br />
        &nbsp;&nbsp;kwh: z.<span className="text-brass">number</span>(),
        <br />
        {'}'});
      </motion.div>

      <figcaption className="mt-3 text-right font-mono text-[11px] text-muted">
        Illustration with sample data
      </figcaption>
    </motion.figure>
  );
}
