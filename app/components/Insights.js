"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const articles = [
  {
    id: "icons",
    title: "App icon best practices",
    excerpt:
      "A practical guide to crafting app icons that feel sharp at every size — from home screen to App Store.",
    image: "/custom-web.jpg",
    imageLabel: "APP ICON DESIGN BEST PRACTICES",
    author: "AC",
    variant: "featured",
  },
  {
    id: "play-store",
    title: "How to publish an app on the Play Store.",
    image: "/custom-web.jpg",
    author: "JK",
    variant: "photo",
  },
  {
    id: "instagram",
    title: "Best Instagram Management Tools",
    image: "/custom-web.jpg",
    badge: "Guide",
    variant: "overlay",
  },
];

export default function Insights() {
  const [active, setActive] = useState("icons");

  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-[#05070a] px-6 pb-24 pt-16 sm:px-10 sm:pb-32 sm:pt-20 lg:px-16 xl:px-24"
    >
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <h2 className="text-left text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-tight text-white/90">
          Insights From Our Experts
        </h2>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => {
            const isActive = active === article.id;

            if (article.variant === "featured") {
              return (
                <a
                  key={article.id}
                  href="#insights"
                  onMouseEnter={() => setActive(article.id)}
                  onFocus={() => setActive(article.id)}
                  className={`group relative flex flex-col overflow-hidden rounded-[1.5rem] transition-shadow sm:rounded-[1.75rem] ${
                    isActive
                      ? "bg-[#12141c] shadow-[0_0_0_1px_rgba(255,255,255,0.55)]"
                      : "bg-[#12141c]/60 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                  }`}
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-[#1d4ed8]">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(max-width: 1280px) 50vw, 33vw"
                      className="object-cover object-center opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/80 via-[#1d4ed8]/50 to-transparent" />
                    <p className="absolute inset-x-5 top-6 text-[13px] font-bold tracking-[0.12em] text-white uppercase sm:inset-x-6 sm:top-7 sm:text-sm">
                      {article.imageLabel}
                    </p>
                    <div className="absolute -bottom-5 right-5 size-11 overflow-hidden rounded-full bg-[#1a1e2a] ring-2 ring-[#12141c] sm:right-6 sm:size-12">
                      <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-white/80">
                        {article.author}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-5 pt-8 pb-6 sm:px-6 sm:pt-9 sm:pb-7">
                    <h3 className="text-[1.15rem] font-semibold tracking-tight text-white sm:text-[1.25rem]">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.65] text-white/50">
                      {article.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-medium text-[#3b82f6]">
                      Read article
                      <ArrowRight className="size-3.5" strokeWidth={2} />
                    </span>
                  </div>
                </a>
              );
            }

            if (article.variant === "photo") {
              return (
                <a
                  key={article.id}
                  href="#insights"
                  onMouseEnter={() => setActive(article.id)}
                  onFocus={() => setActive(article.id)}
                  className={`group relative flex min-h-[420px] flex-col overflow-hidden rounded-[1.5rem] sm:min-h-[460px] sm:rounded-[1.75rem] ${
                    isActive
                      ? "shadow-[0_0_0_1px_rgba(255,255,255,0.55)]"
                      : ""
                  }`}
                >
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="(max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="relative mt-auto flex flex-col gap-4 p-5 sm:p-6">
                    <div className="size-10 overflow-hidden rounded-full bg-[#1a1e2a] ring-2 ring-white/20 sm:size-11">
                      <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-white/80">
                        {article.author}
                      </div>
                    </div>
                    <h3 className="max-w-[16rem] text-[1.15rem] font-semibold leading-snug tracking-tight text-white sm:text-[1.3rem]">
                      {article.title}
                    </h3>
                  </div>
                </a>
              );
            }

            return (
              <a
                key={article.id}
                href="#insights"
                onMouseEnter={() => setActive(article.id)}
                onFocus={() => setActive(article.id)}
                className={`group relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-[1.5rem] sm:min-h-[460px] sm:rounded-[1.75rem] ${
                  isActive
                    ? "shadow-[0_0_0_1px_rgba(255,255,255,0.55)]"
                    : ""
                }`}
              >
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="(max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/55 transition-colors group-hover:bg-black/45" />

                <div className="relative z-10 flex flex-col items-center px-6 text-center">
                  {article.badge && (
                    <span className="rounded-full bg-black/70 px-3.5 py-1 text-[12px] font-medium text-[#60a5fa]">
                      {article.badge}
                    </span>
                  )}
                  <h3 className="mt-4 max-w-[14rem] text-[1.2rem] font-semibold leading-snug tracking-tight text-white sm:text-[1.35rem]">
                    {article.title}
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-white/90">
                    Read article
                    <ArrowRight className="size-3.5" strokeWidth={2} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
