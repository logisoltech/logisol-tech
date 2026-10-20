import Image from "next/image";
import Navbar from "./Navbar";
import HeroHorizon from "./HeroHorizon";
import { ArrowRight } from "lucide-react";

/**
 * Shared inner-page hero.
 * lines: [{ text, blue? }] — headline lines, one per row.
 */
export default function PageHero({
  lines,
  label,
  body,
  ctaLabel,
  ctaHref,
}) {
  return (
    <section className="relative flex min-h-[90svh] flex-col overflow-hidden bg-[#05070a] text-white">
      <Navbar />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-36 pt-10 sm:px-8 sm:pb-40 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left — headline: white line, then blue on two lines */}
          <h1 className="text-[clamp(2rem,4.3vw,4rem)] font-extrabold leading-[1.1] tracking-tight lg:mt-16 xl:mt-20">
            {lines.map((line) => (
              <span
                key={line.text}
                className={`block ${line.blue ? "text-[#3b82f6]" : "text-white"}`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          {/* Right — small icon mark, label, copy, CTA */}
          <div className="relative min-w-0">
            <div
              className="relative ml-auto size-16 sm:size-20 lg:mr-6 lg:size-24 xl:mr-16"
              aria-hidden="true"
            >
              <Image
                src="/glonect-icon.png"
                alt=""
                fill
                sizes="96px"
                className="object-contain mix-blend-screen"
              />
            </div>

            <div className="relative z-10 mt-6 lg:mt-8">
              <div className="mb-5 flex items-center gap-2.5">
                <span
                  className="size-2 shrink-0 rounded-full bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.85)]"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-medium tracking-[0.22em] text-white/55 uppercase sm:text-[12px]">
                  {label}
                </span>
              </div>

              <p className="max-w-[34rem] text-[15px] leading-[1.75] text-white/80 sm:text-[16px] lg:text-[17px]">
                {body}
              </p>

              <div className="relative mt-9 inline-flex sm:mt-10">
                <span
                  className="pointer-events-none absolute -inset-5 rounded-full bg-[#3b82f6]/35 blur-2xl"
                  aria-hidden="true"
                />
                <a
                  href={ctaHref}
                  className="btn-glow relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-white sm:px-7 sm:text-sm"
                  style={{
                    background:
                      "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
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
          </div>
        </div>
      </div>

      <HeroHorizon />
    </section>
  );
}
