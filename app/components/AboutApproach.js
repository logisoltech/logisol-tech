import { ArrowRight } from "lucide-react";
import AboutMarquee from "./AboutMarquee";

export default function AboutApproach() {
  return (
    <section className="relative overflow-hidden bg-[#03050c] pb-20 pt-14 text-white sm:pb-28 sm:pt-20">
      {/* Infinite sliding heading (GSAP) */}
      <AboutMarquee />

      {/* Approach card */}
      <div className="relative mx-auto mt-10 w-full max-w-6xl px-4 sm:mt-14 sm:px-8 lg:px-12">
        <div
          className="relative overflow-hidden rounded-4xl border border-white/4 px-6 py-16 text-center sm:rounded-[44px] sm:px-12 sm:py-24"
          style={{
            background:
              "radial-gradient(ellipse 80% 90% at 50% 40%, rgba(32,38,70,0.9) 0%, rgba(14,17,34,0.95) 55%, rgba(6,8,18,1) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_80px_rgba(0,0,0,0.45)]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3.5 py-1 text-[10px] font-medium text-white/80 sm:text-[11px]">
              Our Approach
              <ArrowRight
                className="size-2.5 opacity-80"
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>

            <p className="about-approach-text mt-7 text-[clamp(1.2rem,2.6vw,2rem)] font-medium leading-[1.3] tracking-tight sm:mt-9">
              Founded by a team of tech-savvy innovators and digital
              strategists, Glonect was born out of a simple idea: to bridge the
              gap between business vision and technology.
            </p>

            <a
              href="/#contact"
              className="mt-9 inline-flex items-center rounded-full border border-white/20 bg-white/3 px-6 py-2.5 text-[11px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10 sm:mt-11 sm:text-xs"
            >
              Let&apos;s Connect!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
