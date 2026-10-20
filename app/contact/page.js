import ContactHero from "../components/ContactHero";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us — Glonect",
  description:
    "Have a question or a project in mind? Get in touch with the Glonect team and let's grow your business together.",
};

export default function ContactPage() {
  return (
    <main className="min-h-svh">
      <ContactHero />
      <ContactSection />
      <FAQ />
      <Footer />
    </main>
  );
}
