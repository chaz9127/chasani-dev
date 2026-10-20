export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-3xl font-normal text-ink">{children}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" aria-hidden="true" />
    </div>
  );
}
