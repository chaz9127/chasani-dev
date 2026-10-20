import { site } from "@/content/site";

export function Footer() {
  // the site is exported as static HTML, so this is the year of the last build
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 py-10 text-center text-sm text-faint">
      Made by {site.name} © {year}
    </footer>
  );
}
