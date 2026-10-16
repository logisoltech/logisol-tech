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

export default function ServicesCurve() {
  return (
    <div
      className="relative mt-3 mb-1 h-[120px] w-full overflow-visible sm:h-[140px]"
      aria-hidden="true"
    >
      {/* Soft hill of light sitting on the line, only upward */}
      <div
        className="pointer-events-none absolute bottom-[22px] left-1/2 h-[240px] w-[75%] max-w-4xl -translate-x-1/2 sm:bottom-[26px] sm:h-[300px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 100%, rgba(100,140,255,0.4) 0%, rgba(120,90,220,0.18) 35%, rgba(60,80,160,0.06) 55%, transparent 72%)",
        }}
      />

      {/* Particles in the lit area above the line */}
      <div className="pointer-events-none absolute inset-x-[15%] bottom-[28px] top-0">
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

      {/* Thin curved line — no glow on the stroke itself */}
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-x-0 bottom-0 h-10 w-full sm:h-12"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40 C360 8 1080 8 1440 40"
          stroke="rgba(110,130,170,0.4)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    </div>
  );
}
