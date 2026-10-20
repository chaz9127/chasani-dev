import { site } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const links = [{ label: "Email", href: `mailto:${site.email}` }, ...site.links];

  return (
    <section id="contact" className="py-20 text-center sm:py-28">
      <SectionHeading>Contact me!</SectionHeading>
      <p className="text-lg leading-relaxed text-muted">{site.contactBlurb}</p>
      <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3">
        {links.map(({ label, href }) => {
          const external = !href.startsWith("mailto:");
          return (
            <li key={label}>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="rounded-sm text-muted underline-offset-4 transition-colors duration-150 hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
              >
                {label} ↗
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
