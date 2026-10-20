import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "#insights" },
];

const supportLinks = [
  { label: "Help", href: "#faq" },
  { label: "Privacy Policy", href: "#" },
  { label: "Term's & Conditions", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
  { label: "Web Development", href: "#services" },
  { label: "Mobile Development", href: "#services" },
  { label: "Graphic Design", href: "#services" },
  { label: "Digital Marketing", href: "#services" },
  { label: "Video Editing", href: "#services" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#05070a] px-6 pt-16 pb-10 sm:px-10 sm:pt-20 sm:pb-12 lg:px-16 xl:px-24"
    >
      <Image
        src="/footer-img.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
        priority={false}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#05070a]/35"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          {/* Brand + contact — left */}
          <div className="flex max-w-xs shrink-0 flex-col">
            <a
              href="#"
              className="inline-flex w-fit items-center"
              aria-label="Glonect home"
            >
              <Image
                src="/glonect-logo-nav.png"
                alt="Glonect"
                width={160}
                height={40}
                className="h-8 w-auto mix-blend-screen sm:h-9"
              />
            </a>

            <h3 className="mt-10 text-[15px] font-bold tracking-[0.08em] text-white uppercase sm:mt-12 sm:text-base">
              Contact Us
            </h3>
            <ul className="mt-4 flex flex-col gap-3.5">
              <li>
                <a
                  href="mailto:info@glonect.com"
                  className="inline-flex items-center gap-2.5 text-[15px] text-white/85 transition-colors hover:text-white sm:text-base"
                >
                  <Mail
                    className="size-4 shrink-0 text-[#3b82f6] sm:size-[18px]"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  info@glonect.com
                </a>
              </li>
              <li>
                <a
                  href="tel:01778561222"
                  className="inline-flex items-center gap-2.5 text-[15px] text-white/85 transition-colors hover:text-white sm:text-base"
                >
                  <Phone
                    className="size-4 shrink-0 text-[#3b82f6] sm:size-[18px]"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  01778561222
                </a>
              </li>
            </ul>

            <p className="mt-auto pt-12 text-[13px] text-white/45 sm:pt-16">
              © 2026 All rights reserved.
            </p>
          </div>

          {/* Link columns — right */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-12 lg:ml-auto lg:gap-16 xl:gap-24">
            <div>
              <h3 className="text-[15px] font-bold tracking-[0.08em] text-white uppercase sm:text-base">
                Quick Links
              </h3>
              <ul className="mt-5 flex flex-col gap-3.5 sm:mt-6 sm:gap-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-white/75 transition-colors hover:text-white sm:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[15px] font-bold tracking-[0.08em] text-white uppercase sm:text-base">
                Support
              </h3>
              <ul className="mt-5 flex flex-col gap-3.5 sm:mt-6 sm:gap-4">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-white/75 transition-colors hover:text-white sm:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-[15px] font-bold tracking-[0.08em] text-white uppercase sm:text-base">
                Services
              </h3>
              <ul className="mt-5 flex flex-col gap-3.5 sm:mt-6 sm:gap-4">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-white/75 transition-colors hover:text-white sm:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
