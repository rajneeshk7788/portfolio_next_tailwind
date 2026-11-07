import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="wrap flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-muted sm:text-left">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-2">
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
    </footer>
  );
}
