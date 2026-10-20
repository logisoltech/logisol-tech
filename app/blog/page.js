import BlogHero from "../components/BlogHero";
import Insights from "../components/Insights";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export const metadata = {
  title: "Blog — Glonect",
  description:
    "Insights, guides, and best practices from the Glonect team on development, design, and digital growth.",
};

export default function BlogPage() {
  return (
    <main className="min-h-svh">
      <BlogHero />
      <Insights />
      <FAQ />
      <Footer />
    </main>
  );
}
