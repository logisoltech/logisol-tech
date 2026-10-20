"use client";

import { Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const categories = [
  "Web Development",
  "Mobile Development",
  "Digital Marketing",
  "Graphic Design",
  "Video Editing",
];

const plansByCategory = {
  "Web Development": [
    {
      name: "Starter Site",
      price: "$499",
      description:
        "A clean, fast marketing site for launching your brand online with essential pages and contact flow.",
      features: [
        "Up to 5 custom pages",
        "Mobile-responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "1 revision round",
      ],
      popular: false,
    },
    {
      name: "Business Pro",
      price: "$999",
      description:
        "A conversion-focused site with richer content sections, CMS-ready structure, and performance polish.",
      features: [
        "Up to 10 custom pages",
        "CMS integration",
        "Advanced SEO & analytics",
        "Lead capture flows",
        "3 revision rounds",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Custom Site",
      price: "$1,999",
      description:
        "A fully tailored build for complex product needs, custom features, and scalable architecture.",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "E-commerce ready",
        "API integrations",
        "Dedicated project manager",
        "Ongoing maintenance option",
      ],
      popular: false,
    },
  ],
};

export default function Pricing() {
  const [active, setActive] = useState("Web Development");
  const plans = plansByCategory[active] ?? plansByCategory["Web Development"];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#05070a] px-6 pb-24 pt-16 sm:px-10 sm:pb-32 sm:pt-20 lg:px-16 xl:px-24"
    >
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <h2 className="max-w-3xl text-left text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.15] tracking-tight">
          <span className="text-white/90">Strategic pricing plans built to </span>
          <span className="text-[#3b82f6]">align with your business goals.</span>
        </h2>

        <nav
          className="mt-8 flex flex-wrap items-center justify-start gap-x-6 gap-y-3 sm:mt-10 sm:gap-x-8 lg:gap-x-10"
          aria-label="Pricing categories"
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
                  className={`absolute inset-x-0 bottom-0 h-px border-b ${
                    isActive
                      ? "border-solid border-white/70"
                      : "border-dotted border-white/20"
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </nav>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-5 xl:gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-[1.75rem] p-7 sm:p-8 lg:rounded-[2rem] ${
                plan.popular
                  ? "bg-[#161922] ring-1 ring-white/12"
                  : "bg-transparent"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6 z-10">
                  <span
                    className="pointer-events-none absolute inset-0 rounded-full bg-[#3b82f6]/50 blur-xl"
                    aria-hidden="true"
                  />
                  <span className="relative inline-flex rounded-full bg-[#3b82f6] px-3.5 py-1.5 text-[10px] font-bold tracking-[0.14em] text-white uppercase shadow-[0_0_24px_rgba(59,130,246,0.55)]">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-[1.35rem] font-semibold tracking-tight text-white sm:text-[1.5rem]">
                {plan.name}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-white/50 sm:text-[15px]">
                {plan.description}
              </p>

              <div className="mt-8 flex items-end gap-1">
                <span className="text-[2.5rem] font-bold leading-none tracking-tight text-white sm:text-[2.75rem]">
                  {plan.price}
                </span>
              </div>

              <div
                className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#3b82f6]/70 to-transparent shadow-[0_0_12px_rgba(59,130,246,0.45)]"
                aria-hidden="true"
              />

              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                  plan.popular
                    ? "btn-glow text-white"
                    : "bg-[#161922] text-[#3b82f6] ring-1 ring-white/[0.06]"
                }`}
                style={
                  plan.popular
                    ? {
                        background:
                          "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
                      }
                    : undefined
                }
              >
                Get Started
              </a>

              <ul className="mt-8 flex flex-col gap-3.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[14px] text-white/65 sm:text-[15px]"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#3b82f6]/15">
                      <Check
                        className="size-3 text-[#3b82f6]"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
