---
name: portfolio-content
description: How this portfolio's content (intro, projects, contact links, resume PDF) is structured and edited. Use when adding, editing, or removing a project, replacing the resume PDF, changing the intro or contact links, or when any component needs to read site content.
---

# Portfolio content

All text and data live in typed files under `content/`. Components never hard-code
personal content; they import from these files. Adding a project should mean editing one
file, with no component changes.

## Files

```
content/
  types.ts       # the types below
  site.ts        # name, role, intro, about paragraph, contact links, metadata
  projects.ts    # personal projects shown as cards
public/
  resume.pdf     # the resume opened by the "Resume ↗" nav link (keep this exact name)
  projects/      # project images, one per project: {slug}.png|jpg|webp
                 # landscape screenshots work best (at least 1200px wide)
```

## Types (`content/types.ts`)

```ts
export type Site = {
  name: string;            // shown as "> {name}" in the intro
  intro: string[];         // 2–3 short sentences, one per line, e.g.
                           // ["I'm a software engineer at Acme.",
                           //  "I love building small, fast tools people enjoy using."]
                           // The "Check out my projects below." line is added by the component.
  email: string;           // mail icon link under the intro
  links: { label: string; href: string; icon: "linkedin" | "github" }[];
                           // shown as icon links under the intro
  resumeUrl: "/resume.pdf";
  meta: { title: string; description: string; ogImage?: string };
};

export type Project = {
  slug: string;            // kebab-case, also the image filename
  title: string;
  description: string;     // 1–2 sentences, under ~200 characters
  languages: string[];     // languages/tech used, e.g. ["TypeScript", "Next.js", "Postgres"]
  image?: string;          // "/projects/{slug}.png"; omit to show the plain fallback box
  imageAlt?: string;       // required when image is set; describe what the screenshot shows
  liveUrl?: string;        // shown as the filled "Live demo" button
  repoUrl?: string;        // shown as the "View source" button
};
```

Projects render in the order they appear in `projects.ts`. Put the best ones first.

## Rules for writing content

- Friendly, first person, sentence case (see the portfolio-design skill).
- Project descriptions: what it is, plus one personal or interesting detail. Max 2
  sentences. Don't list the tech in the description; that's what `languages` is for.
- `languages`: 2–5 entries, most important first, using the official capitalization.
- Every project needs at least one of `liveUrl` or `repoUrl`.
- Never invent facts about the owner (jobs, schools, projects, links). If something is
  unknown, write `TODO:` and say so in your summary.

## Common tasks

- **Add a project**: append to `content/projects.ts`, add the image to `public/projects/`,
  check the card at 360px in both themes.
- **Update the resume**: replace `public/resume.pdf` with the new file, same name. No code
  changes needed.
- **Change intro or links**: edit `content/site.ts` only. Keep each intro line to a
  single short sentence so the lines don't wrap much on desktop.
