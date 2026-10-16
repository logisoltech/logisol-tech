import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="min-h-svh">
      <Hero />
      <WhoWeAre />
      <Services />
    </main>
  );
}
