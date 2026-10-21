import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "woggle",
    title: "Woggle.xyz",
    description:
      "Free daily word game. Find as many words as you can in today's letter grid, build your streak, and climb the leaderboard.",
    languages: ["HTML5", "CSS3", "React", "Node.js", "Express"],
    image: "/projects/woggle.png",
    imageAlt: "Screenshot of Woggle.xyz, a daily word game with a letter grid",
    liveUrl: "https://www.woggle.xyz/",
  },
  {
    slug: "mcufyi",
    title: "TheMCU.fyi",
    description:
      "An easy way to track which MCU movies and shows you've watched, and which ones you need to see.",
    languages: ["HTML5", "SCSS", "MongoDB", "Express", "React", "Node.js", "TypeScript"],
    image: "/projects/mcufyi.png",
    imageAlt: "Screenshot of TheMCU.fyi, a tracking app for MCU movies and shows",
    liveUrl: "https://www.themcu.fyi/",
  },
  {
    slug: "autofilly",
    title: "AutoFilly.dev",
    description:
      "At the click of a button, Autofilly will fill form inputs with random data or use your OpenAI api key for human readable values.",
    languages: ["Chrome Extension", "HTML5", "Sass", "React"],
    image: "/projects/autofilly.png",
    imageAlt: "Screenshot of AutoFilly.dev, a tracking app for MCU movies and shows",
    liveUrl: "https://www.autofilly.dev/",
  },
  {
    slug: "onri",
    title: "Onri",
    description:
      "An animated pet that hangs out with you while you browse the internet. He'll walk around, run around, you can click him to jump and he will idly wait for you in your browser until you come back.",
    languages: ["Chrome Extension", "HTML5", "CSS3", "Javascript"],
    image: "/projects/onri.png",
    imageAlt: "Screenshot of Onri, a Chrome extension for filling form inputs",
    liveUrl: "https://chromewebstore.google.com/detail/onri/clipgjiacfliimfjnlomcjpojofjopfk",
  },
];
