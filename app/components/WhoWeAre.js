import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative -mt-10 overflow-hidden bg-[#080b14] px-5 pt-28 pb-20 sm:-mt-14 sm:px-8 sm:pt-36 sm:pb-28 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,41,70,0.45)_0%,transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-10 w-full max-w-md sm:mb-12 sm:max-w-lg">
          <Image
            src="/2nd section icons.png"
            alt="Development, apps, design, video, and marketing"
            width={640}
            height={200}
            className="mx-auto h-auto w-full object-contain"
            priority={false}
          />
        </div>

        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 sm:mb-10">
          Who We Are
          <ArrowRight className="size-3.5 opacity-80" aria-hidden="true" />
        </span>

        <h2 className="who-heading max-w-4xl text-[clamp(1.85rem,5vw,3.5rem)] font-semibold leading-[1.2] tracking-tight">
          We are passionate about
          <br />
          transforming innovative ideas into
          <br />
          powerful digital solutions.
        </h2>

        <a
          href="#contact"
          className="mt-10 inline-flex items-center rounded-full border border-white/25 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:mt-12 sm:px-10 sm:text-base"
        >
          Let&apos;s Connect!
        </a>
      </div>
    </section>
  );
}
