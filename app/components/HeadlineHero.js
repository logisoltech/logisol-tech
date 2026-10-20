import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import HeroHorizon from "./HeroHorizon";

/**
 * Centered multi-line headline hero with a CTA.
 * lines: [{ text, blue? }]
 */
export default function HeadlineHero({ lines, ctaLabel, ctaHref }) {
  return (
    <section className="relative flex min-h-[62svh] flex-col overflow-hidden bg-[#05070a] text-white">
      <Navbar />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-28 pt-8 text-center sm:px-8 sm:pb-32">
        <h1 className="text-[clamp(2.1rem,5.2vw,4rem)] font-extrabold leading-[1.12] tracking-tight">
          {lines.map((line) => (
            <span
              key={line.text}
              className={`block ${line.blue ? "text-[#3b82f6]" : "text-white"}`}
            >
              {line.text}
            </span>
          ))}
        </h1>

        <div className="relative mt-8 inline-flex sm:mt-10">
          <span
            className="pointer-events-none absolute -inset-5 rounded-full bg-[#3b82f6]/35 blur-2xl"
            aria-hidden="true"
          />
          <a
            href={ctaHref}
            className="btn-glow relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-white sm:px-7 sm:text-sm"
            style={{
              background: "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
            }}
          >
            {ctaLabel}
            <ArrowRight
              className="size-3.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <HeroHorizon />
    </section>
  );
}
