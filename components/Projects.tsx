'use client';

import type { MouseEvent } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check, Github } from 'lucide-react';
import { profile, projects, sideProjects } from '@/lib/content';
import ProjectDialog from './ProjectDialog';
import ProjectVisual from './ProjectVisual';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const VISIBLE_TECH = 4;

function trackSpotlight(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--x', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--y', `${event.clientY - rect.top}px`);
}

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-line bg-deep">
      <div className="wrap">
        <SectionHeading
          eyebrow="Featured projects"
          title="Products I have helped ship"
          description="What each product does, what I was responsible for, and the technology behind it. Open a project for the full details. The previews are illustrations, as client work can't be shown directly."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const extraTech = project.tech.length - VISIBLE_TECH;
            return (
              <Reveal key={project.title} delay={(index % 2) * 0.08} className="h-full">
                <article
                  onMouseMove={trackSpotlight}
                  className="card card-hover spotlight group flex h-full flex-col overflow-hidden"
                >
                  <div className="border-b border-line bg-gradient-to-br from-brass/[0.07] via-transparent to-sage/[0.05] p-4 sm:p-6">
                    <ProjectVisual kind={project.visual} label={project.title} />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="rounded-full border border-brass/30 bg-brass/10 px-2.5 py-0.5 font-mono text-[11px] text-brass">
                        {project.domain}
                      </span>
                      <span className="font-mono text-xs text-muted">{project.period}</span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {project.subtitle}
                      {project.role && <span className="text-brass"> · {project.role}</span>}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-paper/90">{project.description}</p>

                    <h4 className="label mb-3 mt-6">Key features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-paper/85">
                          <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-sage" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
                      {project.tech.slice(0, VISIBLE_TECH).map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                      {extraTech > 0 && (
                        <li className="chip text-muted">
                          +{extraTech}
                          <span className="sr-only"> more technologies</span>
                        </li>
                      )}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
                      <ProjectDialog project={project} id={`project-${index}`} />
                      {project.links?.demo && (
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                          Live demo
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      )}
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} source code on GitHub`}
                          className="icon-link"
                        >
                          <Github size={18} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mb-8 mt-20">
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Personal builds</h3>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted">
            Projects I built on my own time to try out ideas with Next.js and animation.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {sideProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
              <article className="card card-hover group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-ink">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h4 className="font-display text-xl font-semibold">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-brass"
                      >
                        {project.title}
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h4>
                  <p className="mt-0.5 text-sm text-muted">{project.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/90">{project.description}</p>
                  <ul className="mt-4 hidden space-y-2 sm:block">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-brass" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul aria-label="Technologies" className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.tech.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary group">
            See more of my code on GitHub
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
