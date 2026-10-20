"use client";

import { useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";

const subscribe = () => () => {};

const track =
  "relative inline-block h-6 w-12 shrink-0 rounded-full border-2 border-ink";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // only slide after a click, not on first paint
  const [clicked, setClicked] = useState(false);
  // false on the server and during hydration, true once mounted in the browser
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  // Until mounted we don't know the theme, so show the empty track at the same size.
  if (!mounted) {
    return <span className={track} aria-hidden="true" />;
  }

  const dark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      onClick={() => {
        setClicked(true);
        setTheme(dark ? "light" : "dark");
      }}
      className={`${track} cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
    >
      {/* keyed so the slide animation replays on every switch; a transition
          wouldn't run because next-themes disables transitions on theme change */}
      <span
        key={dark ? "dark" : "light"}
        className={`absolute top-px left-px flex size-[18px] items-center justify-center rounded-full bg-ink text-paper ${
          dark ? "translate-x-6" : "translate-x-0"
        } ${clicked ? (dark ? "knob-slide-right" : "knob-slide-left") : ""}`}
      >
        {dark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}
