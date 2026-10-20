import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "woggle",
    title: "Woggle.xyz",
    description:
      "Free daily word game. Find as many words as you can in today's letter grid, build your streak, and climb the leaderboard.",
    languages: ["React", "Node.js", "Express"],
    image: "/projects/woggle.png",
    imageAlt: "Screenshot of Woggle.xyz, a daily word game with a letter grid",
    liveUrl: "https://www.woggle.xyz/",
  },
];
