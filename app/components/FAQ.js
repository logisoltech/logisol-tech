"use client";

import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What Services Does Your Agency Offer?",
    answer:
      "We cover web and mobile development, digital marketing, graphic design, and video editing — from strategy and design through launch and iteration. Most clients start with one service and expand as the product grows.",
  },
  {
    question: "How Long Does It Take To Complete A Project?",
    answer:
      "Timelines depend on scope. A marketing site usually lands in 3–6 weeks, while a custom product or app can take 8–16 weeks. We share a clear milestone plan after discovery so you always know what’s next.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. After launch we offer retainers for maintenance, updates, performance monitoring, and new features — so your product stays fast, secure, and aligned with your goals.",
  },
  {
    question: "How Does Your Pricing Work?",
    answer:
      "We offer fixed packages for common scopes and custom quotes for larger builds. You’ll get a transparent breakdown before we start — no surprise invoices mid-project.",
  },
  {
    question: "Will I Own The Code And Designs?",
    answer:
      "Absolutely. Once the project is paid in full, you own the deliverables — source code, design files, and assets. We can also hand off documentation and a walkthrough for your team.",
  },
  {
    question: "Can You Work With Our Existing Team?",
    answer:
      "We regularly embed with in-house designers, marketers, and engineers. We’ll match your tools and workflow so collaboration feels natural, not disruptive.",
  },
  {
    question: "What Do You Need From Us To Get Started?",
    answer:
      "A short kickoff call, access to brand assets or references, and clarity on goals and timeline. From there we handle the rest — research, design, build, and launch.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#05070a] px-6 pb-24 pt-16 sm:px-10 sm:pb-32 sm:pt-20 lg:px-16 xl:px-24"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[60%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(80,60,160,0.18)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="text-center text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-tight text-white/90">
          Frequently asked questions
        </h2>

        <div className="relative mt-10 sm:mt-12">
          <div
            className="pointer-events-none absolute inset-x-8 inset-y-4 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(90,70,180,0.22)_0%,transparent_75%)] blur-2xl"
            aria-hidden="true"
          />

          <ul className="relative flex flex-col gap-3 sm:gap-3.5">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full rounded-2xl bg-[#12141c] px-5 py-4 text-left shadow-[0_1px_0_0_rgba(120,90,200,0.25)] ring-1 ring-white/[0.04] transition-colors hover:bg-[#161922] sm:rounded-[1.25rem] sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-white/70">
                        {isOpen ? (
                          <Minus className="size-4" strokeWidth={2} />
                        ) : (
                          <Plus className="size-4" strokeWidth={2} />
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-medium tracking-tight text-white/85 sm:text-base">
                          {faq.question}
                        </span>
                        <span
                          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <span className="overflow-hidden">
                            <span className="mt-3 block text-[14px] leading-[1.7] text-white/50 sm:text-[15px]">
                              {faq.answer}
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <div className="relative inline-flex">
            <span
              className="pointer-events-none absolute -inset-5 rounded-full bg-[#3b82f6]/40 blur-2xl"
              aria-hidden="true"
            />
            <a
              href="#contact"
              className="btn-glow relative inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
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
      </div>
    </section>
  );
}
