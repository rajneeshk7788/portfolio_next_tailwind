'use client';

import { motion } from 'framer-motion';
import { Database, PanelsTopLeft, Server, Wrench, type LucideIcon } from 'lucide-react';
import { coreSkills, skillGroups, type SkillIcon } from '@/lib/content';
import SectionHeading from './ui/SectionHeading';

const icons: Record<SkillIcon, LucideIcon> = {
  frontend: PanelsTopLeft,
  backend: Server,
  database: Database,
  tools: Wrench,
};

/** Bento layout: Frontend and Tools are wide, Backend and Database fill the gaps. */
const spans: Record<SkillIcon, string> = {
  frontend: 'md:col-span-2',
  backend: '',
  database: '',
  tools: 'md:col-span-2',
};

const card = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const chip = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section border-y border-line bg-deep">
      <div className="wrap">
        <SectionHeading
          eyebrow="Technical skills"
          title="The stack behind the work"
          description="Strongest on the frontend with React.js, Next.js, and TypeScript, with hands-on backend, database, and delivery experience."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <motion.article
                key={group.title}
                variants={card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className={`card p-6 transition-colors duration-300 hover:border-brass/40 sm:p-7 ${spans[group.icon]}`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="icon-tile">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-medium">{group.title}</h3>
                  <span className="ml-auto font-mono text-xs text-muted">{group.skills.length}</span>
                </div>
                <p className="mb-5 mt-4 text-sm leading-relaxed text-muted">{group.blurb}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={chip}
                      className={`chip ${coreSkills.includes(skill) ? 'chip-core' : ''}`}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
