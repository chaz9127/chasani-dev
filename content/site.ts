import type { Site } from "./types";

export const site: Site = {
  name: "Chasani Douglas",
  intro: [
    "I'm a Frontend Engineer currently looking for work.",
    "I love creating interactive digital experiences that bring joy to people.",
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
      "I'm a Frontend Engineer who loves creating interactive digital experiences that bring joy to people.",
  },
};
