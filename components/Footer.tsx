import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { navItems, profile } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-deep pb-8 pt-14">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brass/50 font-display text-sm font-semibold text-brass">
                {profile.initials}
              </span>
              <span className="font-display font-medium">{profile.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{profile.intro}</p>
            <div className="mt-5 flex gap-2">
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

          <nav aria-label="Footer">
            <h2 className="label">Explore</h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 text-sm md:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="inline-flex min-h-10 items-center text-muted transition-colors duration-200 hover:text-paper">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label">Get in touch</h2>
            <ul className="mt-3 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="inline-flex min-h-10 items-center break-all text-muted transition-colors duration-200 hover:text-paper">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} className="inline-flex min-h-10 items-center text-muted transition-colors duration-200 hover:text-paper">
                  {profile.phone}
                </a>
              </li>
              <li className="flex min-h-10 items-center text-muted">{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-paper"
          >
            Back to top
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
