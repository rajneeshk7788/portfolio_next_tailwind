'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react';
import { profile } from '@/lib/content';

/**
 * The site is a static export, so there is no server to send email from.
 * Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT to a form service URL (for example
 * Formspree) to deliver messages directly. Without it, the form opens the
 * visitor's email app with the message already filled in.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

type Values = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status = 'idle' | 'sending' | 'sent' | 'handoff' | 'failed';

const EMPTY: Values = { name: '', email: '', message: '' };

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Please write at least 10 characters.';
  }
  return errors;
}

function buildMailto({ name, email, message }: Values) {
  const subject = `Portfolio enquiry from ${name.trim()}`;
  const body = `${message.trim()}\n\n${name.trim()}\n${email.trim()}`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (field: keyof Values, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== 'idle' && status !== 'sending') setStatus('idle');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    // Honeypot: only bots fill this hidden field, so pretend it worked.
    if ((form.elements.namedItem('company') as HTMLInputElement | null)?.value) {
      setStatus('sent');
      return;
    }

    if (!ENDPOINT) {
      window.location.href = buildMailto(values);
      setStatus('handoff');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          _subject: `Portfolio enquiry from ${values.name.trim()}`,
        }),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setValues(EMPTY);
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  };

  const isSending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-5 rounded-2xl border border-line bg-ink/60 p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="field"
          />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="field"
          />
        </Field>
      </div>

      <Field label="Message" name="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={9}
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="field resize-y"
        />
      </Field>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <button type="submit" disabled={isSending} className="btn-primary disabled:cursor-wait disabled:opacity-70">
          {isSending ? (
            <Loader2 size={16} aria-hidden="true" className="animate-spin" />
          ) : (
            <Send size={16} aria-hidden="true" />
          )}
          {isSending ? 'Sending...' : 'Send message'}
        </button>

        <div role="status" aria-live="polite" className="min-w-0 flex-1 basis-56 text-sm">
          {status === 'sent' && (
            <p className="flex items-start gap-2 text-sage">
              <CheckCircle2 size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
              Thanks, your message has been sent.
            </p>
          )}
          {status === 'handoff' && (
            <p className="text-muted">
              Your email app should open with your message ready to send. If it doesn&apos;t, write to{' '}
              <a href={`mailto:${profile.email}`} className="break-all text-brass underline underline-offset-2">
                {profile.email}
              </a>
              .
            </p>
          )}
          {status === 'failed' && (
            <p className="flex items-start gap-2 text-brass">
              <TriangleAlert size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
              <span>
                Your message couldn&apos;t be sent.{' '}
                <a href={buildMailto(values)} className="underline underline-offset-2">
                  Send it by email instead
                </a>
                .
              </span>
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-brass">
          {error}
        </p>
      )}
    </div>
  );
}
