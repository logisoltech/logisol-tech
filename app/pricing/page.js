import PricingHero from "../components/PricingHero";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export const metadata = {
  title: "Pricing Plans — Glonect",
  description:
    "Strategic pricing plans built to align with your business goals across web, mobile, marketing, design, and video.",
};

export default function PricingPage() {
  return (
    <main className="min-h-svh">
      <PricingHero />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
