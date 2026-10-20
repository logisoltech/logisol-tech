"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const cases = [
  {
    title: "Full-Stack E-Commerce for Tech Hardware",
    body: "Hi-Tek needed a robust e-commerce platform for computers, parts, and laptops with advanced filtering, inventory management, and secure checkout. The main challenge was handling 10,000+ SKUs with real-time stock updates across multiple warehouses. We developed a custom inventory sync system, implemented Elasticsearch for lightning-fast product search, and built an admin CMS that reduced order processing time by 45%.",
    image: "/custom-web.jpg",
  },
  {
    title: "Custom CMS Platform for Content Teams",
    body: "A growing media brand needed a flexible publishing workflow with role-based access, scheduled releases, and media-heavy pages. We delivered a modular CMS with preview environments and automated asset pipelines that cut publish time in half.",
    image: "/custom-web.jpg",
  },
  {
    title: "Mobile-First Booking Experience",
    body: "A service marketplace asked for a fast booking flow that works on any device. We shipped a responsive product with real-time availability, payment integration, and an admin dashboard their ops team actually enjoys using.",
    image: "/custom-web.jpg",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const current = cases[active];

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-[#05070a] px-6 pb-24 pt-8 sm:px-10 sm:pb-32 sm:pt-12 lg:px-16 xl:px-24"
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="case-media-clip" clipPathUnits="objectBoundingBox">
            {/* Rounded panel with bottom-right stepped notch */}
            <path d="M0.06,0 L0.94,0 C0.98,0 1,0.03 1,0.07 L1,0.72 C1,0.76 0.98,0.79 0.94,0.79 L0.72,0.79 C0.68,0.79 0.66,0.81 0.66,0.85 L0.66,0.93 C0.66,0.97 0.63,1 0.58,1 L0.06,1 C0.02,1 0,0.97 0,0.93 L0,0.07 C0,0.03 0.02,0 0.06,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="rounded-[2rem] bg-[#0c0e14] px-6 py-8 ring-1 ring-white/[0.04] sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:rounded-[3rem] lg:px-14 lg:py-14 xl:px-16">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span
                className="size-2 shrink-0 rounded-full bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.85)]"
                aria-hidden="true"
              />
              <span className="text-[11px] font-medium tracking-[0.22em] text-white/55 uppercase sm:text-[12px]">
                Case Studies
              </span>
            </div>

            <div className="relative inline-flex">
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

          <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
            <div className="min-w-0">
              <h2 className="text-[clamp(1.65rem,3.4vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-white/95">
                {current.title}
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-white/55 sm:mt-8 sm:text-[16px]">
                {current.body}
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
              <div
                className="pointer-events-none absolute inset-[-12%] rounded-[40%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.45)_0%,rgba(59,130,246,0.18)_40%,transparent_70%)] blur-2xl"
                aria-hidden="true"
              />
              <div className="case-media-shape relative aspect-[5/4] w-full overflow-hidden bg-[#1a1c22]">
                <Image
                  src={current.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div
            className="mt-10 flex items-center justify-center gap-2.5 sm:mt-12"
            role="tablist"
            aria-label="Case study slides"
          >
            {cases.map((_, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Case study ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all ${
                    isActive
                      ? "h-1.5 w-8 bg-[#3b82f6] shadow-[0_0_12px_rgba(59,130,246,0.7)]"
                      : "size-1.5 bg-[#3b82f6]/55 hover:bg-[#3b82f6]/80"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
