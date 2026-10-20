import Image from "next/image";
import { ArrowUpRight, MapPin, Phone, Send } from "lucide-react";

// Tiny "stars" scattered inside the form card (percent positions, static for SSR).
const stars = [
  { left: "6%", top: "8%", size: 1.5, opacity: 0.35 },
  { left: "14%", top: "30%", size: 2, opacity: 0.3 },
  { left: "9%", top: "58%", size: 1.5, opacity: 0.28 },
  { left: "4%", top: "82%", size: 2, opacity: 0.4 },
  { left: "17%", top: "92%", size: 1.5, opacity: 0.32 },
  { left: "24%", top: "14%", size: 1.5, opacity: 0.3 },
  { left: "29%", top: "70%", size: 2, opacity: 0.25 },
  { left: "36%", top: "4%", size: 1.5, opacity: 0.35 },
  { left: "41%", top: "88%", size: 2, opacity: 0.38 },
  { left: "48%", top: "20%", size: 1.5, opacity: 0.25 },
  { left: "53%", top: "94%", size: 1.5, opacity: 0.3 },
  { left: "58%", top: "6%", size: 2, opacity: 0.32 },
  { left: "64%", top: "78%", size: 1.5, opacity: 0.35 },
  { left: "70%", top: "12%", size: 1.5, opacity: 0.28 },
  { left: "76%", top: "90%", size: 2.5, opacity: 0.42 },
  { left: "82%", top: "34%", size: 1.5, opacity: 0.3 },
  { left: "88%", top: "62%", size: 2, opacity: 0.33 },
  { left: "93%", top: "18%", size: 1.5, opacity: 0.3 },
  { left: "95%", top: "84%", size: 2, opacity: 0.38 },
  { left: "91%", top: "48%", size: 1.5, opacity: 0.26 },
];

const fieldClass =
  "w-full rounded-lg bg-[#03050c] px-4 py-3.5 text-[13px] text-white outline-none ring-1 ring-white/[0.03] placeholder:text-white/70 focus:ring-[#3b82f6]/60";

function InfoRow({ icon: Icon, label, children, divider = true }) {
  return (
    <div
      className={`flex items-center gap-4 py-4 ${
        divider ? "border-b border-white/20" : ""
      }`}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/35">
        <Icon className="size-[18px]" strokeWidth={2} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-medium text-white/85">{label}</p>
        <div className="text-[16px] font-bold leading-snug">{children}</div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-[#05070a] px-5 pb-24 pt-10 text-white sm:px-8 sm:pb-32 sm:pt-16 lg:px-12"
    >
      {/* Soft side lights */}
      <div
        className="pointer-events-none absolute left-0 top-[8%] h-[420px] w-[320px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(55,95,210,0.35) 0%, transparent 72%)",
          filter: "blur(48px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-[8%] h-[420px] w-[320px] translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(55,95,210,0.35) 0%, transparent 72%)",
          filter: "blur(48px)",
        }}
        aria-hidden="true"
      />

      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="contact-card-clip" clipPathUnits="objectBoundingBox">
            {/* Rounded card with a stepped notch in the top-right corner */}
            <path d="M0.06,0 L0.7,0 C0.77,0 0.79,0.03 0.79,0.08 L0.79,0.1 C0.79,0.14 0.81,0.16 0.86,0.16 L0.94,0.16 C0.98,0.16 1,0.19 1,0.23 L1,0.93 C1,0.97 0.98,1 0.94,1 L0.06,1 C0.02,1 0,0.97 0,0.93 L0,0.07 C0,0.03 0.02,0 0.06,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-[clamp(1.9rem,4vw,2.5rem)] font-extrabold leading-[1.15] tracking-tight lg:mt-10">
            <span className="block text-white">Any Questions?</span>
            <span className="block text-[#3b82f6]">Simply Ask Us.</span>
          </h2>

          {/* Get in touch card */}
          <div className="relative z-20 w-full max-w-[320px] self-end lg:mr-4 lg:self-auto">
            <div
              className="absolute -right-1 -top-9 z-10 size-14 sm:size-16"
              aria-hidden="true"
            >
              <Image
                src="/glonect-icon.png"
                alt=""
                fill
                sizes="64px"
                className="object-contain mix-blend-screen"
              />
            </div>

            <div
              className="bg-[#3b82f6] px-6 pb-6 pt-6"
              style={{
                clipPath: "url(#contact-card-clip)",
                WebkitClipPath: "url(#contact-card-clip)",
              }}
            >
              <h3 className="text-[19px] font-extrabold uppercase tracking-tight">
                Get in touch!
              </h3>

              <div className="mt-2">
                <InfoRow icon={Phone} label="Call us">
                  <a href="tel:+14159694133" className="hover:underline">
                    (415) 969-4133
                  </a>
                </InfoRow>
                <InfoRow icon={Send} label="Need Support?">
                  <a href="mailto:info@glonect.com" className="hover:underline">
                    info@glonect.com
                  </a>
                </InfoRow>
                <InfoRow icon={MapPin} label="Address" divider={false}>
                  <address className="text-[15px] font-bold not-italic underline underline-offset-2">
                    1001 S Main St
                    <br />
                    Kalispell, Montana,
                    <br />
                    USA
                  </address>
                </InfoRow>
              </div>
            </div>
          </div>
        </div>

        {/* Form card */}
        <div className="relative z-10 -mt-6 overflow-hidden rounded-[2.5rem] bg-[#12141c] px-5 pb-10 pt-14 ring-1 ring-white/[0.04] sm:rounded-[3rem] sm:px-10 sm:pt-16 lg:px-14">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {stars.map((s, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: s.left,
                  top: s.top,
                  width: s.size,
                  height: s.size,
                  opacity: s.opacity,
                }}
              />
            ))}
          </div>

          <h3 className="relative text-center text-[clamp(1.5rem,3.4vw,2.35rem)] font-semibold tracking-tight text-white/95">
            Let&apos;s Work Together To Grow Your Business
          </h3>

          <form action="#" className="relative mx-auto mt-8 max-w-[860px] sm:mt-10">
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                autoComplete="given-name"
                className={fieldClass}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                autoComplete="family-name"
                className={fieldClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="email"
                className={fieldClass}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                autoComplete="tel"
                className={fieldClass}
              />
            </div>

            <textarea
              name="description"
              placeholder="Description"
              rows={7}
              className={`${fieldClass} mt-3 block resize-none sm:mt-4`}
            />

            <div className="mt-8 flex justify-center">
              <div className="relative inline-flex">
                <span
                  className="pointer-events-none absolute -inset-4 rounded-full bg-[#3b82f6]/35 blur-2xl"
                  aria-hidden="true"
                />
                <button
                  type="submit"
                  className="btn-glow relative inline-flex items-center gap-2 rounded-full px-7 py-2.5 text-[12px] font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
                  }}
                >
                  Send Message
                  <ArrowUpRight
                    className="size-3"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
