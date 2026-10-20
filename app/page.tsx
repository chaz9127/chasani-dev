import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <Intro />

        <section id="projects" className="pb-20 sm:pb-28">
          <SectionHeading>Projects</SectionHeading>
          <div className="space-y-10">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
