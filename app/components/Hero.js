import Image from "next/image";
import Navbar from "./Navbar";

const floatingIcons = [
  {
    src: "/d3-icon.svg",
    alt: "D3.js",
    className:
      "left-[8%] top-[18%] size-[70px] sm:left-[14%] sm:top-[22%] md:left-[18%] animate-float",
  },
  {
    src: "/blender-icon.svg",
    alt: "Blender",
    className:
      "left-[6%] top-[42%] size-[70px] sm:left-[10%] sm:top-[44%] md:left-[12%] animate-float-delayed",
  },
  {
    src: "/azure-icon.svg",
    alt: "Azure",
    className:
      "left-[10%] top-[62%] size-[70px] sm:left-[16%] sm:top-[64%] md:left-[20%] animate-float-slow",
  },
  {
    src: "/angular-icon.svg",
    alt: "Angular",
    className:
      "right-[8%] top-[16%] size-[70px] sm:right-[14%] sm:top-[20%] md:right-[18%] animate-float-delayed",
  },
  {
    src: "/anaconda-icon.svg",
    alt: "Anaconda",
    className:
      "right-[6%] top-[40%] size-[70px] sm:right-[10%] sm:top-[42%] md:right-[12%] animate-float",
  },
  {
    src: "/aftereffects-icon.svg",
    alt: "After Effects",
    className:
      "right-[10%] top-[60%] size-[70px] sm:right-[16%] sm:top-[62%] md:right-[20%] animate-float-slow",
  },
];

export default function Hero() {
  return (
    <section className="relative z-20 min-h-svh overflow-hidden rounded-b-[40px] text-white sm:rounded-b-[56px] lg:rounded-b-[72px]">
      <Image
        src="/hero-bg-img.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 flex min-h-svh flex-col">
        <Navbar />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 pb-36 pt-10 sm:px-8 sm:pb-40 lg:px-12">
          {floatingIcons.map((icon) => (
            <div
              key={icon.src}
              className={`pointer-events-none absolute z-0 ${icon.className}`}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={70}
                height={70}
                className="h-full w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
              />
            </div>
          ))}

          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="hero-heading animate-fade-up font-extrabold uppercase leading-[0.92] text-white text-[clamp(3.25rem,9vw,7.5rem)]">
              empower,
              <br />
              connect,
              <br />
              succeed.
            </h1>

            <div className="animate-fade-up-delayed mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
              <a
                href="#contact"
                className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white sm:px-7 sm:text-base"
                style={{
                  background:
                    "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
                }}
              >
                Start a project
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center rounded-full border border-white/35 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 sm:px-7 sm:text-base"
              >
                View our work
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-5 sm:px-8 sm:pb-7 lg:px-12">
          <form
            id="contact"
            className="animate-fade-up-late mx-auto flex max-w-7xl flex-col gap-3 rounded-2xl border border-white/10 bg-black/45 p-3 backdrop-blur-md sm:rounded-full sm:p-2 lg:flex-row lg:items-center lg:gap-0"
            action="#"
          >
            <label className="flex flex-1 items-center gap-3 border-b border-white/10 px-4 py-3 sm:border-b-0 lg:border-r lg:border-white/15">
              <UserIcon />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/55"
                autoComplete="name"
              />
            </label>

            <label className="flex flex-1 items-center gap-3 border-b border-white/10 px-4 py-3 sm:border-b-0 lg:border-r lg:border-white/15">
              <MailIcon />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/55"
                autoComplete="email"
              />
            </label>

            <label className="flex flex-1 items-center gap-3 border-b border-white/10 px-4 py-3 sm:border-b-0 lg:border-r lg:border-white/15">
              <PhoneIcon />
              <input
                type="tel"
                name="phone"
                placeholder="Contact Number"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/55"
                autoComplete="tel"
              />
            </label>

            <label className="relative flex flex-1 items-center gap-3 px-4 py-3">
              <CalendarIcon />
              <select
                name="schedule"
                defaultValue=""
                className="w-full appearance-none bg-transparent text-sm text-white outline-none"
              >
                <option value="" disabled className="bg-[#111] text-white">
                  Schedule a Call
                </option>
                <option value="morning" className="bg-[#111] text-white">
                  Morning
                </option>
                <option value="afternoon" className="bg-[#111] text-white">
                  Afternoon
                </option>
                <option value="evening" className="bg-[#111] text-white">
                  Evening
                </option>
              </select>
              <span className="pointer-events-none absolute right-4 text-white/60">
                ▾
              </span>
            </label>

            <button
              type="submit"
              className="btn-glow shrink-0 rounded-full px-6 py-3 text-sm font-semibold text-white sm:px-7"
              style={{
                background:
                  "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
              }}
            >
              Schedule Now!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        className="text-white/70"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6zm0 0l8 7 8-7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white/70"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h3l1 5-2 1a12 12 0 006 6l1-2 5 1v3a2 2 0 01-2 2A15 15 0 015 5a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white/70"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white/70"
      />
    </svg>
  );
}
