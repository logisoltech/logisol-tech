import Navbar from "./Navbar";
import HeroHorizon from "./HeroHorizon";

/** Shared centered big-title hero (projects, blog). */
export default function TitleHero({ title }) {
  return (
    <section className="relative flex min-h-[62svh] flex-col overflow-hidden bg-[#05070a] text-white">
      <Navbar />

      <div className="relative z-10 flex flex-1 items-center justify-center px-5 pb-28 pt-8 text-center sm:px-8 sm:pb-32">
        <h1 className="who-heading text-[clamp(3rem,10vw,8rem)] px-[0.1em] pb-[0.3em] font-extrabold leading-none tracking-tight">
          {title}
        </h1>
      </div>

      <HeroHorizon />
    </section>
  );
}
