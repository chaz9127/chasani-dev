// CSS-only scroll-in (see .reveal in globals.css). Content is visible by default,
// so it never stays hidden if the animation isn't supported.
export function Reveal({ children }: { children: React.ReactNode }) {
  return <div className="reveal">{children}</div>;
}
