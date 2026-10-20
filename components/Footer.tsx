import { site } from "@/content/site";

// Captured once into the static shell; refreshed on each build/revalidation.
async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();

  return (
    <footer className="px-5 py-10 text-center text-sm text-faint">
      Made by {site.name} © {year}
    </footer>
  );
}
