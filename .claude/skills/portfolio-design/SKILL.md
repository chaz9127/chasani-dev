---
name: portfolio-design
description: Design system and voice for this personal portfolio (Next.js + Tailwind). Use whenever creating or changing any page, component, layout, style, copy, or animation on the site, so everything stays minimal, modern, and friendly instead of a generic template look.
---

# Portfolio design system

The site is a **minimal, modern, single-page personal portfolio**: a short intro, a list of
personal projects, and a way to get in touch. The resume is a PDF linked from the nav.
The structure and several details are inspired by https://www.justinchi.me/ (described
below). Borrow those details only. Never copy its text, images, colors, or branding.
The palette here is our own: warm off-white with an orange accent.

## 1. Things to avoid (the "default AI site" look)

Before writing UI, check that none of these slip in:

- No gradients on backgrounds, text, or buttons. No glassmorphism, glows, or blobs.
- No purple/indigo/violet anywhere (the inspiration is purple; we are not). No rainbow
  tag colors.
- No big centered hero with a giant headline and two CTA buttons. The intro is
  **left-aligned**.
- Shadows only on project cards, and only the soft one in section 6. Nothing else gets a
  shadow, and nothing gets `rounded-2xl`.
- No 3-column "features" grid with an icon in a colored circle.
- No "dark mode" that is just inverted colors or pure `#000` black. Dark mode uses its own
  warm palette (section 3).
- Icons: only these inline SVGs are allowed: an external-link icon and the GitHub mark in
  the project buttons, the mail, LinkedIn, and GitHub icons in the intro contact row, and a sun
  and moon in the theme toggle knob. No icon library.
- No lorem ipsum. Use the content files, and leave a clear `TODO:` if content is missing.
- No Title Case Headings and no marketing words ("innovative", "cutting-edge", "synergy").
- No extra sections. The site is **intro (with contact links) and projects**, nothing else: no contact section, no resume page,
  no experience timeline, no skills grid, no stats strip, no terminal/code-style about block.

## 2. Layout

- Page container `max-w-5xl mx-auto px-5 sm:px-8`. Intro text is capped at `max-w-2xl`
  so lines stay readable; project cards use the full container width.
- Generous space between sections (`py-20 sm:py-28`). The intro gets extra room above and
  below (`pt-24 pb-20 sm:pt-36 sm:pb-28`) so it breathes like the inspiration.
- **Section headings** (Projects) are **centered**: `h2` in sans, `text-3xl
  font-normal text-ink`, then a short accent bar under it (`mt-4 mx-auto h-1 w-16
  rounded-full bg-accent`). Generous space (`mb-14`) before the content.
- **Header**: links on the right only, `Projects  Resume ↗`, then the theme
  toggle. Wide spacing between links (`gap-8 sm:gap-12`), `text-muted`, hover `text-ink`.
  No name/logo on the left, because the intro already shows the name. Sticky, page-colored,
  with a hairline bottom border that appears only after scrolling. At 360px the links stay
  inline with smaller gaps; only collapse to a menu if they truly don't fit.
- **Footer**: one small centered muted line, `Made by {name} © {year}`.
- Must work at 360px wide with no horizontal scroll.

## 3. Color tokens (light + dark)

Define these in `app/globals.css` with Tailwind v4 (no `tailwind.config.js`). Colors are
CSS variables that swap when `<html>` has the `dark` class, so components use the
same utility (`bg-paper`, `text-ink`, ...) in both themes. Avoid writing `dark:` color
overrides in components; if one seems necessary, add or adjust a token instead.

```css
@import "tailwindcss";

/* class-based dark mode, toggled on <html> */
@custom-variant dark (&:where(.dark, .dark *));

:root {
  color-scheme: light;
  --paper: #f8f8f6;          /* page background, warm off-white */
  --ink: #161616;            /* primary text */
  --muted: #5f5f5a;          /* body paragraphs */
  --faint: #a3a39c;          /* metadata */
  --line: #e6e5e0;           /* hairlines, borders, chips */
  --card: #ffffff;           /* project cards, secondary button */
  --accent: #e8590c;         /* name, heading bars, links, overlay */
  --accent-strong: #c2410c;  /* primary button fill (AA with white text) */
  --on-accent: #ffffff;      /* text on accent-strong */
  --card-shadow: 0 10px 40px -12px rgb(22 22 22 / 0.12);
}

.dark {
  color-scheme: dark;
  --paper: #121211;          /* warm near-black, never #000 */
  --ink: #ededea;
  --muted: #a8a8a1;
  --faint: #6f6f69;
  --line: #2a2a27;
  --card: #1a1a18;
  --accent: #ff7a33;         /* brighter for contrast on dark */
  --accent-strong: #c2410c;
  --on-accent: #ffffff;
  --card-shadow: 0 0 0 1px var(--line);  /* shadows don't read on dark: use a border */
}

@theme inline {
  --color-paper: var(--paper);
  --color-ink: var(--ink);
  --color-muted: var(--muted);
  --color-faint: var(--faint);
  --color-line: var(--line);
  --color-card: var(--card);
  --color-accent: var(--accent);
  --color-accent-strong: var(--accent-strong);
  --color-on-accent: var(--on-accent);
  --shadow-card: var(--card-shadow);

  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;
}
```

- Body: `bg-paper text-ink antialiased`.
- **Where the accent goes** (and nowhere else): the `> Name` intro, the inline link in
  the intro, the bars under section headings, the primary "Live demo" button, the
  diagonal image overlay, the "View source" button text, link hover, and focus rings.
  Never add a second accent color.

### Dark mode behavior

- Use **`next-themes`** with `attribute="class"`, `defaultTheme="system"`, `enableSystem`,
  and `disableTransitionOnChange`. Put `suppressHydrationWarning` on `<html>`. This
  follows the visitor's OS setting, remembers their choice, and avoids a flash of the
  wrong theme on load.
- **Toggle**: a small client component at the end of the header. A pill switch
  (`h-6 w-12 rounded-full border-2 border-ink`) with a round `bg-ink` knob holding a
  `text-paper` icon: sun on the left in light mode, moon on the right in dark mode. Ink
  colors only, no accent fill. It's a `button` with `role="switch"`, `aria-checked`, and
  `aria-label="Dark mode"`. The knob slides 200ms via a keyframe animation (transitions are
  blocked by `disableTransitionOnChange`), not on first paint, and not under reduced
  motion. Render the empty track as a same-size placeholder until mounted, so the header
  doesn't jump.
- `theme-color`: export `viewport` from `app/layout.tsx` with two entries,
  `#f8f8f6` for `(prefers-color-scheme: light)` and `#121211` for `(prefers-color-scheme: dark)`.
- Both themes must pass AA contrast. Check `text-muted` on `bg-card`, and white on
  `bg-accent-strong`.

## 4. Typography

- Load **Geist Sans** and **Geist Mono** with `next/font` (the `geist` package) as CSS variables.
- Base 16px. Body paragraphs `text-lg leading-loose text-muted` in the intro,
  `leading-relaxed` elsewhere.
- **Intro name**: Geist Mono, `font-normal`, `text-accent`,
  `whitespace-nowrap tracking-tight`, on one line at every width (font size is fluid, capped at
  3.75rem, see `Intro.tsx`), prefixed with `> ` (the prompt character is part
  of the heading text, wrapped in a span with `aria-hidden="true"`), and followed by a
  blinking accent block cursor (also `aria-hidden`; see Motion).
- Section `h2`: sans, `text-3xl font-normal`, sentence case.
- Project titles (`h3`): sans, `text-2xl font-normal text-ink`.
- Mono elsewhere is only for the theme toggle and the image fallback box.

## 5. Voice and copy

- **Normal capitalization**: sentence case for headings, proper capitals for names,
  companies, and languages.
- Friendly, first person, conversational. A few exclamation points are welcome
  ("Contact me!"), but no more than one per section.
- Project descriptions may include a small personal note, like who it was for or what was
  learned building it.
- No buzzwords, no emoji in headings, no self-rating ("expert in...").

## 6. Sections and components

### Intro (top of the page, `#about`)

Left-aligned, in this order:

1. `h1`: `> {Name}` in big accent mono (see typography).
2. Below it, with clear space (`mt-12`), **3–4 short sentences as separate lines**, in
   `text-lg text-muted`:
   - what you do (`I'm a software engineer at {company}.` or `I'm a {role} in {city}.`)
   - what you love building
   - optionally one personal line (interests, what you're learning)
   - `Check out my **projects** below.` where "projects" is an in-page link to
     `#projects`, styled `font-semibold text-accent`, underline on hover only.
- No photo, no code block, no buttons in the intro.

### Projects (`#projects`)

- Centered heading "Projects" with the accent bar (section 2).
- Cards are a **vertical list, one card per row**, `space-y-10`.
- **Card**: `bg-card rounded-lg shadow-card overflow-hidden`, laid out as
  `grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]`. Image on the left, text on the right.
  On mobile it stacks: image on top, text below.
- **Image side**:
  - `next/image` with `fill` and `object-cover` in a `relative` wrapper,
    `aspect-[16/10] md:aspect-auto md:min-h-80`.
  - **Diagonal overlay (md and up only)**: the image's right edge is cut on a slant, with
    a translucent accent band along the cut, so the image melts into the text side.
    Build it with two absolutely positioned layers over the image:
    1. A card-colored wedge covering the right edge:
       `bg-card [clip-path:polygon(78%_0,100%_0,100%_100%,62%_100%)]`.
    2. An accent band just inside it:
       `bg-accent/20 [clip-path:polygon(68%_0,78%_0,62%_100%,50%_100%)]`.
    Both are `hidden md:block`, `pointer-events-none`, `aria-hidden`. On mobile the image
    is a plain rectangle.
  - If there's no image, show a `bg-paper` box with the project title centered in
    `font-mono text-faint` (never a stock placeholder). The overlay still applies.
- **Text side**, `p-6 sm:p-10 md:pl-6 lg:p-12`, vertically centered:
  - Title (`h3`).
  - **1–2 sentence description**, `mt-5 text-muted leading-relaxed`.
  - **Languages/tech chips**, `mt-6 flex flex-wrap gap-2.5`. Each chip:
    `rounded-md border border-line px-3 py-1 text-sm text-muted`. Every chip looks the
    same; never color-code languages.
  - **Buttons**, `mt-8 flex flex-wrap gap-4`. Show only the ones that have a URL. Both
    open in a new tab (`target="_blank" rel="noopener noreferrer"`).
    - **Live demo** (primary): `inline-flex items-center gap-2 rounded-md bg-accent-strong
      px-5 py-2.5 text-sm font-semibold text-on-accent`, external-link icon after the text.
      Hover: `brightness-110`.
    - **View source** (secondary): same size and shape, `bg-card border border-line
      text-accent font-semibold`, GitHub mark icon before the text. Hover: border turns
      `border-accent`.
- The card itself is **not** a link (links inside a link are invalid HTML).
- Hover on the card: none. Hover lives on the buttons only.

### Contact links (in the intro)

- There is no contact section. Directly under the intro lines (`mt-6`), a left-aligned
  row of 20px icon links: email (`mailto:`), LinkedIn, and GitHub (the last two in a new
  tab). Each has an `aria-label` and `title`. `text-muted`, hover `text-accent`.

### Resume link (nav only)

- The **only** place the resume appears is the `Resume ↗` link in the header. It links to
  `/resume.pdf` with `target="_blank" rel="noopener noreferrer"` so the PDF opens in a new
  tab. No `download` attribute.
- Don't build a `/resume` page, a resume section, or an experience timeline.

### Links in general

- External links end with `↗`. Underlines appear on hover only, `underline-offset-4`.

## 7. Motion

- Subtle only: cards fade in with an 8px rise as they scroll into view; 150–200ms
  transitions on button and link hover.
- The one exception to "subtle": a block cursor after the name blinks with a hard on/off
  step (about 1s per cycle, no fade). Under reduced motion it stays solid.
- The name is typed out once on load (`TypedName`, client component) with the block cursor
  trailing it, then the cursor starts blinking. Under reduced motion the name shows
  immediately.
- Everything is disabled under `motion-reduce:`. No parallax and no custom mouse cursors.

## 8. Engineering conventions

- Next.js App Router with TypeScript. A single page (`app/page.tsx`) plus layout.
- Server Components by default; `"use client"` only for the theme toggle, the sticky
  header's scroll border, the scroll-in wrapper, and the typed name.
- `next/image` for every image, with real `alt` text and `sizes`
  (`(min-width: 768px) 40vw, 100vw`).
- Semantic HTML: one `h1`, `section` elements with `id`s for anchor links, `nav`, `footer`.
  Add `scroll-margin-top` to sections so the sticky header doesn't cover their headings,
  and `scroll-behavior: smooth` on `html` (off under reduced motion).
- Accessible: visible focus rings (`focus-visible:outline-2 outline-offset-2
  outline-accent`), AA contrast, keyboard-usable toggle. SVG icons get `aria-hidden`.
- Page metadata (title, description, Open Graph image) comes from `content/site.ts`.

## 9. Self-check before finishing any UI change

1. Does anything break section 1? Remove it.
2. Is the copy friendly, first person, in sentence case, and free of buzzwords?
3. Is the accent used only in the places listed in section 3, and is there zero purple?
4. Does it look right at 360px (cards stacked, no overlay) and at 1280px (cards
   horizontal, overlay visible), **in both light and dark mode**?
5. Did any hard-coded color (`bg-white`, `text-black`, hex values) sneak into a component?
   Replace it with a token.
6. Does `Resume ↗` open `/resume.pdf` in a new tab, and is it the only resume on the site?
7. Does it still look good with motion turned off?
