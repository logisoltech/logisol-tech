import AboutHero from "../components/AboutHero";
import AboutApproach from "../components/AboutApproach";
import CaseStudies from "../components/CaseStudies";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us — Glonect",
  description:
    "At Glonect, we build scalable digital solutions that help businesses compete, grow, and lead.",
};

export default function AboutPage() {
  return (
    <main className="min-h-svh">
      <AboutHero />
      <AboutApproach />
      <CaseStudies />
      <FAQ />
      <Footer />
    </main>
  );
}
