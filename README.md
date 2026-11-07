# Rajneesh Kushwaha: Portfolio

Personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React. It is exported as a static site and hosted on Firebase Hosting.

## Getting started

Requires Node.js 18 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

All copy lives in [`lib/content.ts`](lib/content.ts). Update it whenever the resume changes. The downloadable resume is `public/Rajneesh_Kushwaha_Full_Stack_Developer_Resume.pdf`.

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public site URL, used for canonical links, Open Graph, and the sitemap. |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | Form service URL (for example Formspree) that delivers contact form messages by email. |

The site is static, so it cannot send email itself. If no form endpoint is set, the contact form opens the visitor's email app with the message filled in.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Create the static site in `out/`. |

## Deploy

```bash
npm run build
firebase deploy --only hosting
```

## Project structure

```
app/          Layout, page, global styles, SEO routes (robots, sitemap, Open Graph image)
components/   One component per page section, plus shared UI in components/ui
lib/          Portfolio content
public/       Resume PDF and static assets
```
