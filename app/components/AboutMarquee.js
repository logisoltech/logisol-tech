"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const REPEATS = 6;

function Group({ text, hidden = false }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {Array.from({ length: REPEATS }).map((_, i) => (
        <span
          key={i}
          className="shrink-0 pr-[0.35em] text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold uppercase leading-none tracking-tight text-white"
        >
          {text}
        </span>
      ))}
    </div>
  );
}

export default function AboutMarquee({ text = "About Us" }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      // Two identical groups: sliding exactly half the track loops seamlessly.
      gsap.fromTo(
        track,
        { xPercent: 0 },
        { xPercent: -50, duration: 30, ease: "none", repeat: -1 },
      );
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <h2 className="sr-only">{text}</h2>
      <div ref={trackRef} className="flex w-max whitespace-nowrap will-change-transform">
        <Group text={text} />
        <Group text={text} hidden />
      </div>
    </div>
  );
}
