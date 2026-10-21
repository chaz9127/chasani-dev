import type { Site } from "./types";

export const site: Site = {
  name: "Chasani Douglas",
  intro: [
    "I'm a Frontend Engineer currently looking for work.",
    "I’m a Frontend Engineer who builds interactive experiences that make products more enjoyable to use.",
    ["Did you ", { label: "Woggle", href: "#woggle" }, " today?"],
  ],
  contactBlurb: "Find me here:",
  email: "chasanid@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/chasani" },
    { label: "GitHub", href: "https://github.com/chaz9127/" },
  ],
  resumeUrl: "/resume.pdf",
  meta: {
    title: "Chasani Douglas",
    description:
      "I’m a Frontend Engineer who builds interactive experiences that make products more enjoyable to use.",
    ogImage: "/og.png",
  },
};
