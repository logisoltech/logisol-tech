import ServicesHero from "../components/ServicesHero";
import AboutMarquee from "../components/AboutMarquee";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export const metadata = {
  title: "Services — Glonect",
  description:
    "Web development, mobile apps, digital marketing, graphic design, and video editing — tailored to meet your unique needs.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-svh">
      <ServicesHero />
      <section className="bg-[#05070a] pt-14 text-white sm:pt-20">
        <AboutMarquee text="Our Services" />
      </section>
      <Services />
      <FAQ />
      <Footer />
    </main>
  );
}
