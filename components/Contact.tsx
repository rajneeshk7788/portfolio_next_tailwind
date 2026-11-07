import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '@/lib/content';
import ContactForm from './ContactForm';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { icon: Github, label: 'GitHub', value: profile.githubLabel, href: profile.github, external: true },
  { icon: MapPin, label: 'Location', value: profile.location },
];

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-line">
      <div className="wrap">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your next build"
          description="I'm always open to discussing new opportunities and interesting projects."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <Reveal>
            <ul className="divide-y divide-line border-y border-line">
              {channels.map(({ icon: Icon, label, value, href, external }) => {
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
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="flex items-center gap-4 py-4 transition-colors duration-200 hover:text-brass"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
