"use client";

import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";

const categories = [
  "Web Development",
  "Mobile Development",
  "Digital Marketing",
  "Graphic Design",
  "Video Editing",
];

const projects = [
  { title: "Carintel", image: "/custom-web.jpg", category: "Web Development" },
  { title: "Carintel", image: "/custom-web.jpg", category: "Web Development" },
  { title: "Carintel", image: "/custom-web.jpg", category: "Web Development" },
];

export default function SelectedWork({ showCms = true }) {
  const [active, setActive] = useState("Web Development");

  return (
    <section
      id="projects"
      className={`relative overflow-hidden bg-[#05070a] px-6 pb-24 sm:px-10 sm:pb-32 lg:px-16 xl:px-24 ${
        showCms ? "pt-8 sm:pt-10" : "pt-16 sm:pt-24"
      }`}
    >
      {/* Side lights — tall, strong, mirrored L/R; covers CMS + work */}
      <div
        className="pointer-events-none absolute top-[10%] left-0 h-[90%] w-[280px] -translate-x-[35%] sm:w-[360px] lg:w-[420px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(55,95,210,0.55) 0%, rgba(70,70,180,0.28) 35%, transparent 72%)",
          filter: "blur(48px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[10%] right-0 h-[90%] w-[280px] translate-x-[35%] sm:w-[360px] lg:w-[420px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(55,95,210,0.55) 0%, rgba(70,70,180,0.28) 35%, transparent 72%)",
          filter: "blur(48px)",
        }}
        aria-hidden="true"
      />

      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="cms-video-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.06,0 L0.78,0 C0.84,0 0.88,0.04 0.88,0.08 L0.88,0.1 C0.88,0.13 0.9,0.14 0.93,0.14 L0.96,0.14 C0.99,0.14 1,0.18 1,0.22 L1,0.78 C1,0.82 0.99,0.86 0.96,0.86 L0.58,0.86 C0.54,0.86 0.52,0.88 0.52,0.92 L0.52,0.94 C0.52,0.98 0.48,1 0.44,1 L0.06,1 C0.02,1 0,0.96 0,0.92 L0,0.08 C0,0.04 0.02,0 0.06,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* CMS experience */}
        {showCms && (
        <div
          id="demo"
          className="flex flex-col items-start gap-10 rounded-[2rem] bg-[#0c0e14] px-8 py-12 ring-1 ring-white/[0.04] sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:rounded-[3rem] lg:px-16 lg:py-20 xl:px-20"
        >
          <h2 className="max-w-md text-[clamp(1.5rem,3.5vw,2.35rem)] font-semibold leading-[1.25] tracking-tight text-white/80 lg:max-w-[380px]">
            Experience our powerful content management system in action.
          </h2>

          <button
            type="button"
            className="group relative w-full max-w-md shrink-0 lg:w-[52%] lg:max-w-[520px]"
            aria-label="Play CMS demo video"
          >
            <div className="cms-video-shape relative aspect-[16/10] w-full bg-[#1a1c22] transition-colors group-hover:bg-[#22242b]">
              <span className="absolute inset-0 flex items-center justify-center pr-[12%]">
                <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-[#0c0e14] shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform group-hover:scale-105 sm:size-16">
                  <Play
                    className="ml-0.5 size-6 fill-current sm:size-7"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </div>
          </button>
        </div>
        )}

        {/* Selected work */}
        <div className={showCms ? "mt-20 sm:mt-28" : ""}>
          <h2 className="text-left text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight">
            <span className="text-white/90">Our </span>
            <span className="text-[#3b82f6]">Selected Work</span>
          </h2>

          <nav
            className="mt-8 flex flex-wrap items-center justify-start gap-x-6 gap-y-3 sm:mt-10 sm:gap-x-8 lg:gap-x-10"
            aria-label="Work categories"
          >
            {categories.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={`relative pb-2 text-sm font-medium tracking-wide transition-colors sm:text-[15px] ${
                    isActive
                      ? "text-white/85"
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {category}
                    {!isActive && (
                      <ArrowUpRight
                        className="size-3.5 opacity-70"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-px border-b border-dotted ${
                      isActive ? "border-white/50" : "border-white/15"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </nav>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, i) => (
              <a
                key={`${project.title}-${i}`}
                href="#contact"
                className="group relative block"
              >
                <div className="pointer-events-none absolute inset-x-4 -bottom-3 h-14 rounded-full bg-white/12 blur-2xl transition-opacity group-hover:bg-white/20" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:rounded-[2.25rem]">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
