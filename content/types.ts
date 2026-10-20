// A line of plain text, or text mixed with in-page/external links.
export type IntroLine = string | (string | { label: string; href: string })[];

export type Site = {
  name: string;
  intro: IntroLine[];
  contactBlurb: string;
  email: string;
  links: { label: string; href: string }[];
  resumeUrl: "/resume.pdf";
  meta: { title: string; description: string; ogImage?: string };
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  languages: string[];
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  repoUrl?: string;
};
