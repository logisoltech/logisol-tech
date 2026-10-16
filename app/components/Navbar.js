"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Our Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full px-5 pt-5 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#" className="relative shrink-0" aria-label="Glonect home">
          <Image
            src="/glonect-logo-nav.png"
            alt="Glonect"
            width={160}
            height={40}
            priority
            className="h-8 w-auto mix-blend-screen sm:h-9"
          />
        </a>

        <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-glow hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex"
            style={{
              background: "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
            }}
          >
            Let&apos;s talk
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn-glow mt-4 flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
            }}
            onClick={() => setOpen(false)}
          >
            Let&apos;s talk
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  );
}
