import { ArrowUpRight, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#05070a] px-6 pb-24 pt-8 sm:px-10 sm:pb-32 sm:pt-12 lg:px-16 xl:px-24"
    >
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
        <defs>
          <clipPath id="testimonial-card-clip" clipPathUnits="objectBoundingBox">
            {/*
              Top: left tab high, steps down to the right (rounded inner corner).
              Bottom: left extends down, right tucks up (rounded inner corner).
            */}
            <path d="M0.05,0 L0.4,0 C0.45,0 0.48,0.025 0.48,0.06 L0.48,0.13 C0.48,0.165 0.51,0.19 0.56,0.19 L0.95,0.19 C0.985,0.19 1,0.22 1,0.26 L1,0.76 C1,0.8 0.975,0.83 0.94,0.83 L0.92,0.83 C0.905,0.83 0.895,0.855 0.895,0.89 L0.895,0.94 C0.895,0.975 0.88,1 0.86,1 L0.05,1 C0.015,1 0,0.975 0,0.94 L0,0.06 C0,0.025 0.015,0 0.05,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="rounded-[2rem] bg-[#0c0e14] px-6 py-10 ring-1 ring-white/[0.04] sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:rounded-[3rem] lg:px-14 lg:py-16 xl:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-20">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <span
                  className="size-2 shrink-0 rounded-full bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.85)]"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-medium tracking-[0.22em] text-white/55 uppercase sm:text-[12px]">
                  Testimonials
                </span>
              </div>

              <h2 className="service-heading mt-6 max-w-md text-[clamp(2rem,4.5vw,3.35rem)] font-extrabold leading-[1.1] tracking-tight">
                What Our Clients Are Saying
              </h2>

              <div className="relative mt-8 inline-flex sm:mt-10">
                <span
                  className="pointer-events-none absolute -inset-4 rounded-full bg-[#3b82f6]/35 blur-2xl"
                  aria-hidden="true"
                />
                <a
                  href="#contact"
                  className="btn-glow relative inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white sm:px-6 sm:text-sm"
                  style={{
                    background:
                      "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
                  }}
                >
                  Let&apos;s talk
                  <ArrowUpRight
                    className="size-3.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
              <div
                className="pointer-events-none absolute -right-6 -bottom-8 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(90,60,160,0.28)_0%,transparent_70%)] blur-2xl"
                aria-hidden="true"
              />

              {/* drop-shadow follows clip-path; box-shadow does not */}
              <div
                className="relative"
                style={{ filter: "drop-shadow(0 0 0.5px rgba(255,255,255,0.35))" }}
              >
                <div
                  className="testimonial-card-shape relative bg-[#06070c]"
                  style={{
                    clipPath: "url(#testimonial-card-clip)",
                    WebkitClipPath: "url(#testimonial-card-clip)",
                  }}
                >
                  <div className="flex min-h-[340px] flex-col px-6 pt-6 pb-10 sm:min-h-[360px] sm:px-8 sm:pt-7 sm:pb-11 lg:min-h-[380px] lg:px-9">
                    <div className="flex max-w-[46%] items-center gap-3.5">
                      <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-[#1a1e2a] ring-1 ring-white/10 sm:size-14">
                        <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-white/70">
                          LC
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[15px] font-semibold text-white sm:text-base">
                          Liam Carter
                        </p>
                        <p className="text-[13px] text-white/45 sm:text-sm">
                          Owner, FitWave
                        </p>
                      </div>
                    </div>

                    <div
                      className="mt-5 flex items-center gap-1"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-[#f5c84c] text-[#f5c84c] sm:size-[18px]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    <p className="mt-5 text-[clamp(1.05rem,2vw,1.35rem)] font-semibold leading-snug tracking-tight text-white">
                      Logisol brought our app vision to life — smooth, polished,
                      and on schedule.
                    </p>

                    <p className="mt-4 text-[14px] leading-[1.7] text-white/55 sm:text-[15px]">
                      From the first workshop they mapped our MVP into clear
                      wireframes, then shipped a polished build without drama.
                      Communication stayed tight the whole way — we now sit at a{" "}
                      <span className="inline-flex items-center gap-1 font-medium text-white/80">
                        4.8
                        <Star
                          className="size-3 fill-[#f5c84c] text-[#f5c84c]"
                          aria-hidden="true"
                        />
                        average rating
                      </span>{" "}
                      with users who actually stick around.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
