import PageHero from "./PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      lines={[
        { text: "We proudly provide" },
        { text: "innovative", blue: true },
        { text: "and smart solutions", blue: true },
        { text: "tailored to meet" },
        { text: "your needs." },
      ]}
      label="Services"
      body="We specialize in creating immersive digital experiences that not only engage your audience but also drive conversions and foster business growth. Our comprehensive services range from innovative branding strategies to robust development solutions, ensuring that every aspect of your project is meticulously tailored to meet your unique needs and objectives."
      ctaLabel="See Our Services"
      ctaHref="#services"
    />
  );
}
