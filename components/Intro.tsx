import { site } from "@/content/site";
import type { IntroLine } from "@/content/types";

const linkClass =
  "rounded-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function IntroLink({ label, href }: { label: string; href: string }) {
  const external = !href.startsWith("#");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={linkClass}
    >
      {label}
      {external && " ↗"}
    </a>
  );
}

function renderLine(line: IntroLine) {
  if (typeof line === "string") return line;
  return line.map((part, i) =>
    typeof part === "string" ? part : <IntroLink key={i} {...part} />,
  );
}

export function Intro() {
  return (
    <section id="about" className="max-w-2xl py-20 sm:py-28">
      <h1 className="font-mono text-5xl font-normal tracking-tight text-accent sm:text-7xl">
        <span aria-hidden="true">&gt; </span>
        {site.name}
        <span
          aria-hidden="true"
          className="name-cursor ml-[0.12em] inline-block h-[0.85em] w-[0.25em] translate-y-[0.1em] bg-accent"
        />
      </h1>
      <div className="mt-12 space-y-1 text-lg leading-loose text-muted">
        {site.intro.map((line, i) => (
          <p key={i}>{renderLine(line)}</p>
        ))}
        {/* <p>
          Check out my <IntroLink label="projects" href="#projects" /> below.
        </p> */}
      </div>
    </section>
  );
}
