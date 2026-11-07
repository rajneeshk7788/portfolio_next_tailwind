'use client';

import { motion } from 'framer-motion';
import { Braces, Database, GitBranch, PanelsTopLeft, Server, TestTube2 } from 'lucide-react';
import { skillGroups, type SkillIcon } from '@/lib/content';
import SectionHeading from './ui/SectionHeading';

const icons: Record<SkillIcon, typeof Braces> = {
  frontend: PanelsTopLeft,
  languages: Braces,
  backend: Server,
  databases: Database,
  testing: TestTube2,
  devops: GitBranch,
};

const card = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.03, delayChildren: 0.1 },
  },
};

const chip = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line">
      <div className="wrap">
        <SectionHeading
          eyebrow="Technical skills"
          title="The stack behind the work"
          description="Strongest in React.js and the modern frontend ecosystem, with hands-on backend, data, testing, and delivery experience."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon];
            return (
              <motion.article
                key={group.title}
                variants={card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className={`card p-6 transition-colors duration-300 hover:border-brass/40 ${
                  index === 0 ? 'md:col-span-2' : ''
                } ${index === skillGroups.length - 1 ? 'md:col-span-2 lg:col-span-3' : ''}`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <Icon size={20} aria-hidden="true" className="text-brass" />
                  <h3 className="font-display text-lg font-medium">{group.title}</h3>
                  <span className="ml-auto font-mono text-xs text-muted">{group.skills.length}</span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.li key={skill} variants={chip} className="chip">
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
