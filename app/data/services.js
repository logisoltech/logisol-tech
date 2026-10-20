// Single source of truth for service detail pages (/services/[slug]).
export const serviceDetails = [
  {
    slug: "custom-web-development",
    hero: [
      { text: "Custom Websites" },
      { text: "That Turn Clicks into", blue: true },
      { text: "Customers", blue: true },
    ],
    marquee: "Custom Web Development",
    label: "Custom Web Development",
    title: ["Custom Web Solutions", "That Fit Your Business"],
    body: "At Glonect, we specialize in creating custom web development solutions tailored to your unique business needs. Our expert team builds scalable, high-performance websites and web applications that drive growth.",
    image: "/custom-web.jpg",
    imageAlt: "Custom web development",
    metaTitle: "Custom Web Development",
    metaDescription:
      "Custom websites that turn clicks into customers. Scalable, high-performance websites and web applications tailored to your business.",
  },
  {
    slug: "mobile-app-development",
    hero: [
      { text: "Mobile Apps" },
      { text: "Built to Keep Users", blue: true },
      { text: "Coming Back", blue: true },
    ],
    marquee: "Mobile App Development",
    label: "Mobile App Development",
    title: ["Mobile Experiences", "People Love to Use"],
    body: "From idea to App Store launch, we design and build fast, intuitive mobile apps for iOS and Android. Our team focuses on smooth performance and thoughtful UX so your users stay engaged and your product keeps growing.",
    image: "/custom-web.jpg",
    imageAlt: "Mobile app development",
    metaTitle: "Mobile App Development",
    metaDescription:
      "Fast, intuitive iOS and Android apps designed and built to keep users coming back.",
  },
  {
    slug: "digital-marketing",
    hero: [
      { text: "Digital Marketing" },
      { text: "That Turns Attention", blue: true },
      { text: "into Revenue", blue: true },
    ],
    marquee: "Digital Marketing",
    label: "Digital Marketing",
    title: ["Marketing Strategies", "That Drive Real Growth"],
    body: "We combine SEO, social media, and performance marketing into data-driven strategies that put your brand in front of the right audience, and turn that attention into leads, sales, and long-term growth.",
    image: "/custom-web.jpg",
    imageAlt: "Digital marketing",
    metaTitle: "Digital Marketing",
    metaDescription:
      "SEO, social media, and performance marketing strategies that turn attention into revenue.",
  },
  {
    slug: "graphic-design",
    hero: [
      { text: "Graphic Design" },
      { text: "That Makes Your Brand", blue: true },
      { text: "Impossible to Ignore", blue: true },
    ],
    marquee: "Graphic Design",
    label: "Graphic Design",
    title: ["Designs That Speak", "Your Brand's Language"],
    body: "From logos and brand identities to marketing collateral and UI visuals, our designers craft bold, consistent graphics that make your business look as good as it performs.",
    image: "/custom-web.jpg",
    imageAlt: "Graphic design",
    metaTitle: "Graphic Design",
    metaDescription:
      "Bold, consistent branding, marketing, and UI design that makes your business stand out.",
  },
  {
    slug: "video-editing",
    hero: [
      { text: "Video Editing" },
      { text: "That Captures Attention", blue: true },
      { text: "and Holds It", blue: true },
    ],
    marquee: "Video Editing",
    label: "Video Editing",
    title: ["Stories Told Through", "Powerful Video"],
    body: "Whether it's promos, social clips, or long-form content, our editors turn raw footage into polished, scroll-stopping videos with sharp pacing, motion graphics, and sound that keep viewers watching.",
    image: "/custom-web.jpg",
    imageAlt: "Video editing",
    metaTitle: "Video Editing",
    metaDescription:
      "Polished promos, social clips, and long-form videos edited to capture and hold attention.",
  },
];

export function getServiceDetail(slug) {
  return serviceDetails.find((s) => s.slug === slug);
}
