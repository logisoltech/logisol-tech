import { notFound } from "next/navigation";
import HeadlineHero from "../../components/HeadlineHero";
import AboutMarquee from "../../components/AboutMarquee";
import ServiceDetailCard from "../../components/ServiceDetailCard";
import SelectedWork from "../../components/SelectedWork";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import { serviceDetails, getServiceDetail } from "../../data/services";

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};
  return {
    title: `${service.metaTitle} — Glonect`,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();

  return (
    <main className="min-h-svh">
      <HeadlineHero
        lines={service.hero}
        ctaLabel="See Projects"
        ctaHref="#projects"
      />

      <section className="bg-[#05070a] pt-14 text-white sm:pt-20">
        <AboutMarquee text={service.marquee} />
      </section>

      <ServiceDetailCard
        label={service.label}
        title={service.title}
        body={service.body}
        image={service.image}
        imageAlt={service.imageAlt}
      />

      <SelectedWork showCms={false} />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
