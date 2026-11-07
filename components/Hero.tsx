import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { profile } from '@/lib/content';
import HeroCode from './HeroCode';

/**
 * Server-rendered with CSS entrance animations, so the name and intro paint
 * immediately instead of waiting for JavaScript to hydrate.
 */
const delay = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:flex lg:min-h-[100svh] lg:items-center lg:pb-24">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-brass/10 blur-[120px]"
      />

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <div className="rise mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm" style={delay(0)}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-sage/30 bg-sage/10 px-3.5 py-1.5 text-sage">
              <span aria-hidden="true" className="pulse-dot h-1.5 w-1.5 rounded-full bg-sage" />
              {profile.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted">
              <MapPin size={14} aria-hidden="true" />
              Indore, India
            </span>
          </div>

          <h1 className="rise" style={delay(80)}>
            <span className="block text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
              {profile.name}
            </span>
            <span className="text-gradient mt-3 block font-display text-2xl font-medium tracking-tight sm:text-3xl">
              {profile.role}
            </span>
          </h1>

          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={delay(160)}>
            {profile.intro}
          </p>

          <ul aria-label="Primary technical skills" className="rise mt-7 flex flex-wrap gap-2" style={delay(240)}>
            {profile.primarySkills.map((skill) => (
              <li key={skill} className="chip chip-core">
                {skill}
              </li>
            ))}
          </ul>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={delay(320)}>
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
            <a href="#contact" className="btn-secondary">
              <Send size={16} aria-hidden="true" />
              Contact me
            </a>
          </div>

          <div className="rise mt-6 flex items-center gap-2" style={delay(400)}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="icon-link">
              <Github size={18} aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="icon-link">
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email" className="icon-link">
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <HeroCode />
      </div>
    </section>
  );
}
