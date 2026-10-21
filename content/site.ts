import type { Site } from "./types";

export const site: Site = {
  name: "Chasani Douglas",
  intro: [
    "I'm a Frontend Engineer currently looking for work.",
    "I build interactive experiences that make products more enjoyable to use.",
    ["Did you ", { label: "Woggle", href: "#woggle" }, " today?"],
  ],
  email: "chasanid@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/chasani", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/chaz9127/", icon: "github" },
  ],
  resumeUrl: "/resume.pdf",
  meta: {
    title: "Chasani Douglas",
    description:
      "I build interactive experiences that make products more enjoyable to use.",
    ogImage: "/og.png",
  },
};
