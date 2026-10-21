import Image from "next/image";
import type { Project } from "@/content/types";
import { ExternalLinkIcon, GitHubIcon } from "./icons";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const buttonBase = `inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition duration-150 motion-reduce:transition-none ${focusRing}`;

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, languages, image, imageAlt, liveUrl, repoUrl } = project;

  return (
    <article
      id={project.slug}
      className="scroll-mt-24 grid overflow-hidden rounded-lg bg-card shadow-card md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    >
      <div className="relative aspect-[16/10] md:aspect-auto md:min-h-80">
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-paper p-6">
            <span className="font-mono text-faint">{title}</span>
          </div>
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-card [clip-path:polygon(78%_0,100%_0,100%_100%,62%_100%)] md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-accent/20 [clip-path:polygon(68%_0,78%_0,62%_100%,50%_100%)] md:block"
        />
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-10 md:pl-6 lg:p-12">
        <h3 className="text-2xl font-normal text-ink">{title}</h3>
        <p className="mt-5 leading-relaxed text-muted">{description}</p>

        <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Languages and tools">
          {languages.map((language) => (
            <li
              key={language}
              className="rounded-md border border-line px-3 py-1 text-sm text-muted"
            >
              {language}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} bg-accent-strong text-on-accent hover:brightness-110`}
            >
              Live
              <ExternalLinkIcon />
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-line bg-card text-accent hover:border-accent`}
            >
              <GitHubIcon />
              View source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
