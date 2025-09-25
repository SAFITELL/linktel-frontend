const defaultSEOConfig = {
  title: "Linktel | ",
  description:
     "Bridging the connectivity divide using innovation and scalable technology.",
  canonical: "https://linktel-globalplatform.vercel.app/",
  robots: {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
locale: "en_US",
language: "en",
  openGraph: {
    type: "website",
    url: "https://linktel-globalplatform.vercel.app/",
    site_name: "LinkTel",
    title: "LinkTel | Where Connectivity Meets Innovation.",
    description:
      "Bridging the connectivity divide using innovation and scalable technology.",
    images: [
      {
        url: "https://res.cloudinary.com/dzt5eiysm/image/upload/v1758808715/1001146306_l2axoq.jpg",
        width: 1200,
        height: 630,
        alt: "Lincoln Madaraka Crafted Site",
      },
    ],
    profile: {
      firstName: "Lincoln",
      lastName: "Madaraka",
      username: "syntaxrtx",
      gender: "male",
    },
    publishedTime: "2025-09-09T13:56:44.447Z",
    modifiedTime: "2025-09-09T13:56:44.447Z",
    authors: ["https://www.upwork.com/freelancers/~01e9590570d6665e01"],
      },
  twitter: {
    handle: "@syntaxrtx",
    site: "@syntaxrtx",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
  { name: "theme-color", content: "#1a202c" },
  { name: "author", content: "Lincoln Madaraka" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
],
  structuredData: {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Linktel",
  url: "",
  sameAs: [
    "https://twitter.com/syntaxrtx",
    "https://github.com/Lincoln-Madaraka",
  ],
  jobTitle: "Professional Fullstack Developer",
  image: "https://hello-lincoln-prime.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b796cd42.png&w=1920&q=75",
},
};

export default defaultSEOConfig;  

