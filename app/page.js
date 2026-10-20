import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Services from "./components/Services";
import SelectedWork from "./components/SelectedWork";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Insights from "./components/Insights";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-svh">
      <Hero />
      <WhoWeAre />
      <Services />
      <SelectedWork />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <Insights />
      <FAQ />
      <Footer />
    </main>
  );
}
