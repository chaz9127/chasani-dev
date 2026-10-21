import { site } from "@/content/site";
import type { IntroLine } from "@/content/types";
import { TypedName } from "./TypedName";

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
      <h1 className="whitespace-nowrap font-mono text-[min(3.75rem,calc((100vw-2.5rem)/11))] font-normal tracking-tight text-accent sm:text-[min(3.75rem,calc((100vw-4rem)/11))]">
        <span aria-hidden="true">&gt; </span>
        <TypedName name={site.name} />
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
