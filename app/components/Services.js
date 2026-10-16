import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ServicesCurve from "./ServicesCurve";

const services = [
  {
    num: "02",
    title: "Mobile Development",
    image: "/custom-web.jpg",
  },
  {
    num: "03",
    title: "Digital Marketing",
    image: "/custom-web.jpg",
  },
  {
    num: "04",
    title: "Graphic Design",
    image: "/custom-web.jpg",
  },
  {
    num: "05",
    title: "Video Editing",
    image: "/custom-web.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#05070a] px-6 pb-24 pt-24 sm:px-10 sm:pb-32 sm:pt-32 lg:px-16 xl:px-24"
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="service-feature-clip" clipPathUnits="objectBoundingBox">
            {/*
              Top-left + bottom-right notches.
              Inner step corners use concave curves (both ends rounded).
            */}
            <path d="M0.14,0 L0.92,0 C0.97,0 1,0.03 1,0.08 L1,0.86 C1,0.86 1,0.88 0.97,0.88 L0.9,0.88 C0.84,0.88 0.84,0.88 0.84,0.94 L0.84,0.94 C0.84,0.98 0.81,1 0.76,1 L0.08,1 C0.03,1 0,0.97 0,0.92 L0,0.14 C0,0.14 0,0.1 0.04,0.1 L0.08,0.1 C0.14,0.1 0.14,0.1 0.14,0.04 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 xl:gap-20">
          <div className="grid w-full min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-x-3 sm:gap-x-4">
            {/* spacer so label lines up with the W */}
            <div aria-hidden="true" />
            <div className="mb-6 flex items-center gap-2.5 sm:mb-7">
              <span
                className="size-2 shrink-0 rounded-full bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.85)]"
                aria-hidden="true"
              />
              <span className="text-[11px] font-medium tracking-[0.22em] text-white/55 uppercase sm:text-[12px]">
                Things We Offer
              </span>
            </div>

            <span className="pt-[0.2em] text-[13px] font-normal text-white/40 sm:text-[14px]">
              01
            </span>
            <div className="min-w-0">
              <h2 className="service-heading whitespace-nowrap text-[clamp(1.5rem,3.4vw,2.75rem)] font-extrabold uppercase leading-none tracking-tight">
                Web Development
              </h2>

              <p className="mt-10 w-full max-w-[38rem] text-[15px] leading-[1.75] text-white/65 sm:mt-12 sm:text-[17px] lg:max-w-[42rem]">
                Whether you need stunning visuals for your website, captivating
                graphics for your marketing materials, or innovative UI/UX designs
                for your app, our team of experts is here to turn your vision into
                reality.
              </p>

              <div className="relative mt-12 inline-flex w-fit sm:mt-14">
                <span
                  className="pointer-events-none absolute -inset-5 rounded-full bg-[#3b82f6]/30 blur-2xl"
                  aria-hidden="true"
                />
                <a
                  href="#services-list"
                  className="btn-glow relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-white sm:px-7 sm:text-sm"
                  style={{
                    background:
                      "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
                  }}
                >
                  See Our Services
                  <ArrowRight
                    className="size-3.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-[min(100%,340px)] shrink-0 lg:mx-0 lg:w-[360px] xl:w-[380px]">
            <div
              className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(90,60,180,0.3)_0%,rgba(40,60,140,0.12)_45%,transparent_70%)] blur-2xl"
              aria-hidden="true"
            />
            <div className="service-feature-image relative aspect-[4/5] w-full">
              <Image
                src="/custom-web.jpg"
                alt="Web development workstation"
                fill
                sizes="380px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        <ServicesCurve />

        <ul id="services-list" className="relative z-10 flex flex-col">
          {services.map((service) => (
            <li
              key={service.title}
              className="group border-t border-white/5 py-7 first:border-t-0 sm:py-9"
            >
              <a
                href="#contact"
                className="flex items-center justify-between gap-6 sm:gap-10"
              >
                <div className="flex min-w-0 items-baseline gap-4 sm:gap-6 md:gap-10">
                  <span className="shrink-0 text-sm font-medium text-white/40 sm:text-base">
                    {service.num}
                  </span>
                  <h3 className="service-heading text-[clamp(1.5rem,4vw,2.85rem)] font-extrabold uppercase leading-none tracking-tight transition-opacity group-hover:opacity-90">
                    {service.title}
                  </h3>
                </div>

                <div className="service-thumb relative h-14 w-28 shrink-0 overflow-hidden sm:h-16 sm:w-36 md:h-[72px] md:w-44">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="180px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
