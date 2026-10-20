import ProjectsHero from "../components/ProjectsHero";
import SelectedWork from "../components/SelectedWork";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export const metadata = {
  title: "Projects — Glonect",
  description:
    "Explore Glonect's selected work across web development, mobile, digital marketing, graphic design, and video editing.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-svh">
      <ProjectsHero />
      <SelectedWork showCms={false} />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
