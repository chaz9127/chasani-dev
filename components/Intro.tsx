import { site } from "@/content/site";
import type { IntroLine } from "@/content/types";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { TypedName } from "./TypedName";

const icons = { linkedin: LinkedInIcon, github: GitHubIcon };

const contactLinkClass =
  "flex rounded-sm text-muted transition-colors duration-150 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none";

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
      <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-lg">
        <li>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            title={site.email}
            className={`${contactLinkClass} [&_svg]:size-5`}
          >
            <MailIcon />
          </a>
        </li>
        {site.links.map(({ label, href, icon }) => {
          const Icon = icons[icon];
          return (
            <li key={label} className="flex">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={`${contactLinkClass} [&_svg]:size-5`}
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
