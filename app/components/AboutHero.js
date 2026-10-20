import PageHero from "./PageHero";

export default function AboutHero() {
  return (
    <PageHero
      lines={[
        { text: "Empowering Business" },
        { text: "Through Code,", blue: true },
        { text: "Creativity & Strategy.", blue: true },
      ]}
      label="About Us"
      body="At Glonect, we don't just build websites or write code, we build scalable digital solutions that help businesses compete, grow, and lead in the modern world. We are a results-driven software house offering a wide range of services that include Web Development, App Development, SEO, Social Media Marketing, Graphic Design, and Video Editing, each tailored to suit your industry and business goals."
      ctaLabel="See Our Services"
      ctaHref="/services"
    />
  );
}
