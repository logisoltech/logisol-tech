import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Services from "./components/Services";
import SelectedWork from "./components/SelectedWork";

export default function Home() {
  return (
    <main className="min-h-svh">
      <Hero />
      <WhoWeAre />
      <Services />
      <SelectedWork />
    </main>
  );
}
