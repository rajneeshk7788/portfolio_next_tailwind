'use client';

import { useState, type MouseEvent } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { profile, projects } from '@/lib/content';
import ProjectVisual from './ProjectVisual';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

function trackSpotlight(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--x', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--y', `${event.clientY - rect.top}px`);
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="projects" className="section border-t border-line">
      <div className="wrap">
        <SectionHeading
          eyebrow="Featured projects"
          title="Products I have helped ship"
          description="Open any project to see what it does, what I was responsible for, and the technology behind it."
        />

        <div className="space-y-3">
          {projects.map((project, index) => {
            const isOpen = openIndex === index;
            const panelId = `project-panel-${index}`;
            return (
              <Reveal key={project.title} delay={index * 0.05}>
                <article
                  onMouseMove={trackSpotlight}
                  className={`card spotlight overflow-hidden transition-colors duration-300 ${
                    isOpen ? 'border-brass/40' : 'hover:border-paper/25'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="relative z-10 grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-4 gap-y-1 p-5 text-left sm:p-6 md:items-center"
                    >
                      <span aria-hidden="true" className="mt-1 font-mono text-xs text-brass md:mt-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-xl font-medium sm:text-2xl">
                          {project.title}
                        </span>
                        <span className="mt-0.5 block text-sm text-muted">{project.subtitle}</span>
                      </span>
                      <span className="flex items-center gap-4">
                        <span className="hidden font-mono text-xs text-muted md:inline">{project.period}</span>
                        <ChevronDown
                          size={20}
                          aria-hidden="true"
                          className={`text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </span>
                    </button>
                  </h3>

                  <div id={panelId} className="collapse-panel" data-open={isOpen}>
                    <div>
                      <div className="relative grid gap-8 border-t border-line p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-10">
                        <div className="space-y-5">
                          <ProjectVisual kind={project.visual} />
                          <div>
                            <h4 className="mb-2.5 font-mono text-xs uppercase tracking-widest text-muted">
                              Technologies
                            </h4>
                            <ul className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <li key={tech} className="chip">
                                  {tech}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div>
                          <div className="mb-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-muted md:hidden">
                            <span>{project.period}</span>
                          </div>
                          {project.role && (
                            <p className="mb-3 text-sm font-medium text-brass">{project.role}</p>
                          )}
                          <p className="leading-relaxed text-paper/90">{project.description}</p>

                          <h4 className="mb-2.5 mt-6 font-mono text-xs uppercase tracking-widest text-muted">
                            Responsibilities
                          </h4>
                          <ul className="space-y-2.5">
                            {project.responsibilities.map((item) => (
                              <li key={item} className="flex gap-3 text-sm leading-relaxed text-paper/85">
                                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" />
                                {item}
                              </li>
                            ))}
                          </ul>

                          {project.outcomes.length > 0 && (
                            <>
                              <h4 className="mb-2.5 mt-6 font-mono text-xs uppercase tracking-widest text-muted">
                                Achievements
                              </h4>
                              <ul className="space-y-2.5">
                                {project.outcomes.map((item) => (
                                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-paper/85">
                                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-paper"
          >
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
