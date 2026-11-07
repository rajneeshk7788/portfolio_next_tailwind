'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile, snapshot } from '@/lib/content';

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const TRACE =
  'M0 92 C24 88 36 58 60 60 S96 96 124 84 S160 30 188 36 S226 80 252 62 S290 18 320 22';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 lg:pt-24">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brass/10 blur-[120px]"
      />

      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-brass sm:text-sm"
          >
            {profile.role}
          </motion.p>
          <motion.h1
            variants={item}
            className="text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group">
              View projects
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
            <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn-secondary">
              <Download size={16} aria-hidden="true" />
              Download resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-4 flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="icon-link"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="icon-link"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email" className="icon-link">
              <Mail size={18} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        <motion.aside
          aria-label="Profile snapshot"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="card overflow-hidden shadow-2xl shadow-black/40"
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <span className="font-mono text-xs text-muted">profile.snapshot</span>
            <span className="h-2 w-2 rounded-full bg-sage" aria-hidden="true" />
          </div>

          <svg aria-hidden="true" viewBox="0 0 320 110" className="block w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#E8B563" stopOpacity="0.22" />
                <stop offset="1" stopColor="#E8B563" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[28, 55, 82].map((y) => (
              <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="rgba(236,233,226,0.07)" />
            ))}
            <motion.path
              d={`${TRACE} V110 H0 Z`}
              fill="url(#hero-area)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <motion.path
              d={TRACE}
              fill="none"
              stroke="#E8B563"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.5, ease: 'easeInOut' }}
            />
          </svg>

          <dl className="divide-y divide-line border-t border-line">
            {snapshot.map((row) => (
              <div key={row.label} className="grid grid-cols-[6rem_1fr] gap-3 px-5 py-3.5">
                <dt className="font-mono text-xs leading-5 text-muted">{row.label}</dt>
                <dd className="text-sm leading-5">{row.value}</dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}
