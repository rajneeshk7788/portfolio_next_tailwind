import { Check, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '@/lib/content';
import ContactForm from './ContactForm';
import CopyButton from './ui/CopyButton';
import Reveal from './ui/Reveal';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: true },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { icon: Github, label: 'GitHub', value: profile.githubLabel, href: profile.github, external: true },
  { icon: MapPin, label: 'Location', value: profile.location },
];

const topics = [
  'Senior frontend or full stack roles',
  'Dashboards and data-heavy products',
  'Frontend architecture and code quality',
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="card relative overflow-hidden p-6 sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brass/10 blur-[100px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
            <Reveal>
              <p className="eyebrow mb-4 text-brass">Contact</p>
              <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Let&apos;s talk about your next build
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                I&apos;m always open to discussing new opportunities and interesting projects.
              </p>

              <ul className="mt-6 space-y-2.5">
                {topics.map((topic) => (
                  <li key={topic} className="flex gap-3 text-sm text-paper/90">
                    <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-sage" />
                    {topic}
                  </li>
                ))}
              </ul>

              <ul className="mt-8 divide-y divide-line border-y border-line">
                {channels.map(({ icon: Icon, label, value, href, external, copy }) => {
                  const content = (
                    <>
                      <Icon size={18} aria-hidden="true" className="shrink-0 text-brass" />
                      <span className="min-w-0">
                        <span className="block font-mono text-xs text-muted">{label}</span>
                        <span className="mt-0.5 block break-words text-sm">{value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={label} className="flex items-center justify-between gap-3">
                      {href ? (
                        <a
                          href={href}
                          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="flex min-w-0 flex-1 items-center gap-4 py-3.5 transition-colors duration-200 hover:text-brass"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex min-w-0 flex-1 items-center gap-4 py-3.5">{content}</div>
                      )}
                      {copy && <CopyButton value={value} label="email address" />}
                    </li>
                  );
                })}
              </ul>

              <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn-secondary mt-6">
                <Download size={16} aria-hidden="true" />
                Download resume
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mb-5 font-display text-xl font-medium">Send a message</h3>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
