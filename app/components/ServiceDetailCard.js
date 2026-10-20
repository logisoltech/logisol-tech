import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * Service detail panel: label, two-tone title, copy, CTA and a notched image.
 * title: [firstLine, secondLine]
 */
export default function ServiceDetailCard({
  label,
  title,
  body,
  image,
  imageAlt = "",
  ctaLabel = "Let's talk",
  ctaHref = "/contact",
}) {
  return (
    <section className="relative overflow-hidden bg-[#05070a] px-5 pb-20 pt-12 text-white sm:px-8 sm:pb-28 sm:pt-16 lg:px-12">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="service-detail-clip" clipPathUnits="objectBoundingBox">
            {/* Rounded panel with a bottom-right stepped notch */}
            <path d="M0.06,0 L0.94,0 C0.98,0 1,0.03 1,0.07 L1,0.72 C1,0.76 0.98,0.79 0.94,0.79 L0.72,0.79 C0.68,0.79 0.66,0.81 0.66,0.85 L0.66,0.93 C0.66,0.97 0.63,1 0.58,1 L0.06,1 C0.02,1 0,0.97 0,0.93 L0,0.07 C0,0.03 0.02,0 0.06,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#12141c] px-6 pb-10 pt-8 ring-1 ring-white/[0.04] sm:rounded-[2.5rem] sm:px-10 lg:px-14">
          <div className="flex items-center gap-2.5">
            <span
              className="size-1.5 shrink-0 rounded-full bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.85)]"
              aria-hidden="true"
            />
            <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/60 sm:text-[11px]">
              {label}
            </span>
          </div>

          <div className="mt-10 grid items-center gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
            <div className="min-w-0">
              <h2 className="text-[clamp(1.5rem,3vw,2.15rem)] font-medium leading-[1.2] tracking-tight">
                <span className="block text-white/95">{title[0]}</span>
                <span className="block text-white/55">{title[1]}</span>
              </h2>

              <p className="mt-6 max-w-md text-[13px] leading-[1.7] text-white/65 sm:text-[14px]">
                {body}
              </p>

              <div className="relative mt-8 inline-flex">
                <span
                  className="pointer-events-none absolute -inset-4 rounded-full bg-[#3b82f6]/35 blur-2xl"
                  aria-hidden="true"
                />
                <a
                  href={ctaHref}
                  className="btn-glow relative inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-[11px] font-semibold text-white sm:text-xs"
                  style={{
                    background:
                      "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
                  }}
                >
                  {ctaLabel}
                  <ArrowUpRight
                    className="size-3"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
              <div
                className="pointer-events-none absolute inset-[-10%] rounded-[40%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.45)_0%,rgba(59,130,246,0.18)_40%,transparent_70%)] blur-2xl"
                aria-hidden="true"
              />
              <div
                className="relative aspect-[5/4] w-full overflow-hidden bg-[#1a1c22]"
                style={{
                  clipPath: "url(#service-detail-clip)",
                  WebkitClipPath: "url(#service-detail-clip)",
                }}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Slide indicator */}
          <div
            className="mt-10 flex items-center justify-center gap-2.5"
            aria-hidden="true"
          >
            <span className="h-1.5 w-8 rounded-full bg-[#3b82f6] shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
            <span className="size-1.5 rounded-full bg-[#3b82f6]/55" />
            <span className="size-1.5 rounded-full bg-[#3b82f6]/55" />
          </div>
        </div>
      </div>
    </section>
  );
}
