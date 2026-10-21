"use client";

import { useEffect, useState } from "react";

const START_DELAY_MS = 400;
const CHAR_DELAY_MS = 90;

// Types the name out with the block cursor trailing it. The untyped rest stays in
// the layout (invisible) so the heading never reflows or wraps differently mid-typing.
export function TypedName({ name }: { name: string }) {
  const [count, setCount] = useState(0);
  const done = count >= name.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(name.length);
      return;
    }
    let i = 0;
    let timer = setTimeout(function tick() {
      i += 1;
      setCount(i);
      if (i < name.length) timer = setTimeout(tick, CHAR_DELAY_MS);
    }, START_DELAY_MS);
    return () => clearTimeout(timer);
  }, [name]);

  return (
    <>
      <span className="sr-only">{name}</span>
      <span aria-hidden="true">
        {name.slice(0, count)}
        <span
          className={`${done ? "name-cursor " : ""}ml-[0.12em] inline-block h-[0.85em] w-[0.25em] translate-y-[0.1em] bg-accent`}
        />
        <span className="invisible">{name.slice(count)}</span>
      </span>
    </>
  );
}
