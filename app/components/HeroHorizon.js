const particles = [
  { left: "18%", top: "42%", size: 1.5, opacity: 0.28 },
  { left: "22%", top: "28%", size: 2, opacity: 0.35 },
  { left: "26%", top: "48%", size: 1.5, opacity: 0.3 },
  { left: "28%", top: "18%", size: 1.5, opacity: 0.35 },
  { left: "30%", top: "38%", size: 2, opacity: 0.32 },
  { left: "32%", top: "55%", size: 1.5, opacity: 0.26 },
  { left: "34%", top: "8%", size: 2, opacity: 0.4 },
  { left: "36%", top: "32%", size: 1.5, opacity: 0.3 },
  { left: "38%", top: "12%", size: 1.5, opacity: 0.28 },
  { left: "40%", top: "22%", size: 1.5, opacity: 0.3 },
  { left: "42%", top: "45%", size: 2, opacity: 0.36 },
  { left: "44%", top: "6%", size: 1.5, opacity: 0.34 },
  { left: "45%", top: "5%", size: 2.5, opacity: 0.45 },
  { left: "46%", top: "35%", size: 1.5, opacity: 0.28 },
  { left: "48%", top: "28%", size: 1.5, opacity: 0.25 },
  { left: "49%", top: "50%", size: 2, opacity: 0.33 },
  { left: "50%", top: "14%", size: 1.5, opacity: 0.35 },
  { left: "52%", top: "40%", size: 1.5, opacity: 0.3 },
  { left: "54%", top: "2%", size: 2, opacity: 0.4 },
  { left: "55%", top: "58%", size: 1.5, opacity: 0.27 },
  { left: "56%", top: "30%", size: 2, opacity: 0.3 },
  { left: "58%", top: "16%", size: 1.5, opacity: 0.32 },
  { left: "59%", top: "44%", size: 2.5, opacity: 0.38 },
  { left: "60%", top: "8%", size: 1.5, opacity: 0.34 },
  { left: "62%", top: "6%", size: 2.5, opacity: 0.48 },
  { left: "63%", top: "36%", size: 1.5, opacity: 0.29 },
  { left: "64%", top: "52%", size: 2, opacity: 0.31 },
  { left: "66%", top: "20%", size: 1.5, opacity: 0.3 },
  { left: "67%", top: "4%", size: 1.5, opacity: 0.36 },
  { left: "68%", top: "32%", size: 1.5, opacity: 0.26 },
  { left: "70%", top: "10%", size: 2, opacity: 0.42 },
  { left: "71%", top: "46%", size: 1.5, opacity: 0.28 },
  { left: "72%", top: "24%", size: 2, opacity: 0.34 },
  { left: "74%", top: "24%", size: 1.5, opacity: 0.28 },
  { left: "75%", top: "54%", size: 2, opacity: 0.3 },
  { left: "76%", top: "12%", size: 1.5, opacity: 0.33 },
  { left: "78%", top: "38%", size: 2.5, opacity: 0.4 },
  { left: "80%", top: "18%", size: 1.5, opacity: 0.32 },
  { left: "82%", top: "48%", size: 1.5, opacity: 0.27 },
  { left: "84%", top: "28%", size: 2, opacity: 0.35 },
];

/**
 * Bottom horizon — flat line with curved, fading ends; glow rises from its top.
 * Place inside a `relative overflow-hidden` section.
 */
export default function HeroHorizon() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[80px] w-full overflow-visible"
      aria-hidden="true"
    >
      {/* Glow: its base sits exactly on the line, nothing leaks below it */}
      <div
        className="absolute bottom-[46px] left-1/2 h-[220px] w-[75%] max-w-4xl -translate-x-1/2 sm:h-[260px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 100%, rgba(100,140,255,0.4) 0%, rgba(120,90,220,0.18) 35%, rgba(60,80,160,0.06) 55%, transparent 72%)",
        }}
      />

      <div className="absolute inset-x-[15%] bottom-[46px] h-[110px]">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Opaque dark fill under the line so the glow never shows below it */}
      <div className="absolute inset-x-0 bottom-0 h-[46px] bg-[#05070a]" />

      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-x-[2%] bottom-0 h-[80px] w-[96%]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="about-horizon-stroke"
            x1="0"
            y1="0"
            x2="1440"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="rgb(140,170,255)" stopOpacity="0" />
            <stop offset="0.18" stopColor="rgb(140,170,255)" stopOpacity="0.45" />
            <stop offset="0.5" stopColor="rgb(170,190,255)" stopOpacity="0.7" />
            <stop offset="0.82" stopColor="rgb(140,170,255)" stopOpacity="0.45" />
            <stop offset="1" stopColor="rgb(140,170,255)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 64 C180 46, 340 34, 560 34 L880 34 C1100 34, 1260 46, 1440 64"
          stroke="url(#about-horizon-stroke)"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
