"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

const linkClass =
  "rounded-sm text-muted transition-colors duration-150 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 border-b bg-paper transition-colors duration-200 motion-reduce:transition-none ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-end gap-5 px-5 text-sm sm:gap-12 sm:px-8 sm:text-base">
        <a href="#projects" className={linkClass}>
          Projects
        </a>
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Resume ↗
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
