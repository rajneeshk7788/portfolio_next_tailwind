'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Github, TrendingUp, X } from 'lucide-react';
import type { Project } from '@/lib/content';
import ProjectVisual from './ProjectVisual';

/**
 * "View details" button plus a native modal dialog. The dialog markup is always
 * rendered, so the full project write-up stays in the static HTML for search engines.
 * Native <dialog> provides the focus trap, Escape to close, and focus return.
 */
export default function ProjectDialog({ project, id }: { project: Project; id: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = previous;
    };
  }, [isOpen]);

  const open = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };
  const close = () => dialogRef.current?.close();

  const { links } = project;
  const titleId = `${id}-title`;

  return (
    <>
      <button type="button" onClick={open} className="btn-secondary" aria-haspopup="dialog">
        View details
        <ArrowUpRight size={16} aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          // A click on the backdrop lands on the dialog element itself.
          if (event.target === event.currentTarget) close();
        }}
        className="project-dialog m-auto max-h-[calc(100svh-2rem)] w-[min(60rem,calc(100vw-2rem))] overflow-y-auto overscroll-contain rounded-2xl border border-line bg-surface p-0 text-paper shadow-panel"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-surface/95 px-5 py-4 backdrop-blur sm:px-8 sm:py-5">
          <div className="min-w-0">
            <p className="font-mono text-xs text-muted">
              <span className="text-brass">{project.domain}</span> · {project.period}
            </p>
            <h3 id={titleId} className="mt-1 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <button type="button" onClick={close} aria-label="Close project details" className="icon-link shrink-0">
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-10">
          <div className="min-w-0">
            <ProjectVisual kind={project.visual} label={project.title} />
            <p className="mt-6 text-lg leading-relaxed text-paper/90">{project.description}</p>

            <h4 className="label mb-3 mt-8">Key features</h4>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {project.features.map((item) => (
                <li key={item} className="flex gap-3 rounded-lg border border-line bg-ink/50 p-3 text-sm leading-relaxed">
                  <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-sage" />
                  {item}
                </li>
              ))}
            </ul>

            <h4 className="label mb-3 mt-8">My responsibilities</h4>
            <ul className="space-y-2.5">
              {project.responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-paper/85">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                  {item}
                </li>
              ))}
            </ul>

            {project.outcomes.length > 0 && (
              <div className="mt-8 rounded-xl border border-sage/20 bg-sage/[0.06] p-4">
                <h4 className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sage">
                  <TrendingUp size={14} aria-hidden="true" />
                  Results
                </h4>
                <ul className="space-y-1.5 text-sm leading-relaxed text-paper/90">
                  {project.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:border-l lg:border-line lg:pl-8">
            <dl className="space-y-4 text-sm">
              {project.role && (
                <div>
                  <dt className="label">Role</dt>
                  <dd className="mt-1 font-medium text-brass">{project.role}</dd>
                </div>
              )}
              <div>
                <dt className="label">Timeline</dt>
                <dd className="mt-1">{project.period}</dd>
              </div>
              <div>
                <dt className="label">Domain</dt>
                <dd className="mt-1">{project.domain}</dd>
              </div>
            </dl>

            <div>
              <h4 className="label mb-3">Technologies</h4>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {(links?.demo || links?.github) && (
              <div className="flex flex-wrap gap-2">
                {links.demo && (
                  <a href={links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Live demo
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
                {links.github && (
                  <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <Github size={16} aria-hidden="true" />
                    Source code
                  </a>
                )}
              </div>
            )}
          </aside>
        </div>
      </dialog>
    </>
  );
}
