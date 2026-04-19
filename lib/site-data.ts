import { brand, mediaLibrary } from "@/lib/brand";

export type ServiceCategory = {
  id: "hair" | "skin" | "nails" | "makeup";
  name: string;
  icon: string;
  summary: string;
  image: string;
  highlights: string[];
};

export type GalleryItem = {
  title: string;
  category: "Hairstyle" | "Interior" | "Manicure" | "Transformation";
  image: string;
  alt: string;
  description: string;
};

export type ReviewHighlight = {
  title: string;
  description: string;
};

export type Transformation = {
  title: string;
  category: "Hair Transformation" | "Colour Refresh" | "Smoothening Finish" | "Texture Revival";
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  details: string;
};

export type BranchLocation = {
  name: string;
  phones: string[];
  address: string;
  hours: string;
  directionUrl: string;
  mapEmbed: string;
};

export type FeatureVideo = {
  title: string;
  src: string;
  description: string;
};

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/transformations", label: "Transformations" },
  { href: "/testimonials", label: "Visit & Reviews" },
];

export const announcementBar = `Wakad: ${brand.phones.wakadPrimary} | ${brand.phones.wakadSecondary}   Pimple Gurav: ${brand.phones.pimpleGurav}`;

export const heroContent = {
  eyebrow: "Known for hair, beauty and makeup services",
  title: "Modern beauty rituals for Wakad and Pimple Gurav.",
  description:
    "B Tanish Salon blends trend-aware styling, hygienic care, and a calm salon atmosphere so every visit feels polished from consultation to final finish.",
  primaryCta: {
    href: `https://wa.me/${brand.phones.whatsapp}`,
    label: "Book on WhatsApp",
  },
  secondaryCta: {
    href: "/gallery",
    label: "View Gallery",
  },
};

export const ownerStory = {
  eyebrow: "Welcome to B Tanish",
  title: "Built on experience, detail, and client trust.",
  description:
    "With over 18 years of experience, Ravindra Giramkar has shaped B Tanish into a salon known for thoughtful customer care, trend-led beauty work, and consistent quality across hair, skincare, nail care, and makeup services.",
};

export const featuredStats = [
  { value: "18+", label: "Years of beauty experience" },
  { value: "20,000+", label: "Customers served" },
  { value: "3,000+", label: "Five-star ratings" },
  { value: "2", label: "Branches in Pune" },
];

export const whyChooseUs: ReviewHighlight[] = [
  {
    title: "Trusted by thousands",
    description: "The live site highlights a community of 20,000+ customers who return for reliable results and attentive care.",
  },
  {
    title: "Highly rated across both branches",
    description: "B Tanish showcases 3,000+ five-star ratings across the Wakad and Pimple Gurav locations.",
  },
  {
    title: "Hygienic and personalised service",
    description: "Appointments are shaped around consultation, clean processes, and a dedicated expert for your service.",
  },
  {
    title: "Support before and after your visit",
    description: "The salon positions itself as approachable and supportive, with guidance that continues after the appointment.",
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair",
    name: "Hair Care",
    icon: "01",
    image: `${mediaLibrary.hairstyle}/10.png`,
    summary:
      "Haircuts, colouring, styling, and finish work for clients who want current looks with wearable polish.",
    highlights: ["Precision cuts and styling", "Colour refresh and makeover work", "Smooth finishes and occasion hair"],
  },
  {
    id: "skin",
    name: "Skin Care",
    icon: "02",
    image: `${mediaLibrary.interior}/1.png`,
    summary:
      "Facial and skin-focused services delivered in calm treatment spaces designed for comfort and visible care.",
    highlights: ["Facials and skin rituals", "Clean treatment rooms", "Relaxed consultation-led care"],
  },
  {
    id: "nails",
    name: "Nail Care",
    icon: "03",
    image: `${mediaLibrary.manicure}/1.png`,
    summary:
      "Manicure artistry, nail extensions, and polished finishing for everyday wear, celebrations, and bridal moments.",
    highlights: ["Nail art and extensions", "Bridal nail services", "Creative colour and detailing"],
  },
  {
    id: "makeup",
    name: "Make-up",
    icon: "04",
    image: `${mediaLibrary.hairstyle}/21.png`,
    summary:
      "Soft glam and occasion-ready beauty finishes that fit B Tanish's hair and beauty service mix.",
    highlights: ["Party and event looks", "Bridal-ready finishing", "Beauty styling under one roof"],
  },
];

export const featuredGallery: GalleryItem[] = [
  {
    title: "Glossed waves",
    category: "Hairstyle",
    image: `${mediaLibrary.hairstyle}/1.png`,
    alt: "Long glossy hairstyle created at B Tanish Salon",
    description: "Soft movement with salon-finished shine.",
  },
  {
    title: "Signature manicure",
    category: "Manicure",
    image: `${mediaLibrary.manicure}/10.png`,
    alt: "Creative manicure design at B Tanish Salon",
    description: "Detailed nail art with a clean, sculpted finish.",
  },
  {
    title: "Treatment room",
    category: "Interior",
    image: `${mediaLibrary.interior}/6.png`,
    alt: "Interior treatment room at B Tanish Salon",
    description: "A calm private setup for skin and beauty care.",
  },
  {
    title: "Colour dimension",
    category: "Hairstyle",
    image: `${mediaLibrary.hairstyle}/17.png`,
    alt: "Dimensional hair colouring result at B Tanish Salon",
    description: "Colour work designed to catch natural light.",
  },
  {
    title: "Statement nails",
    category: "Manicure",
    image: `${mediaLibrary.manicure}/12.png`,
    alt: "Statement manicure with artistic design",
    description: "Playful detailing balanced with salon neatness.",
  },
  {
    title: "Salon reception",
    category: "Interior",
    image: `${mediaLibrary.interior}/12.png`,
    alt: "Reception space inside B Tanish Salon",
    description: "Warm wood tones and a polished, welcoming arrival.",
  },
  {
    title: "Transformation result",
    category: "Transformation",
    image: `${mediaLibrary.transform}/1/after.png`,
    alt: "Hair transformation after result at B Tanish Salon",
    description: "Visible before-and-after beauty work from the salon floor.",
  },
  {
    title: "Smooth finish",
    category: "Hairstyle",
    image: `${mediaLibrary.hairstyle}/20.png`,
    alt: "Straight smooth hairstyle result at B Tanish Salon",
    description: "Healthy-looking length with a sleek finish.",
  },
  {
    title: "Art-led manicure",
    category: "Manicure",
    image: `${mediaLibrary.manicure}/3.png`,
    alt: "Art-led manicure from B Tanish Salon",
    description: "Shape, colour, and detailing brought together cleanly.",
  },
  {
    title: "Care corner",
    category: "Interior",
    image: `${mediaLibrary.interior}/3.png`,
    alt: "Interior beauty setup at B Tanish Salon",
    description: "Functional beauty spaces designed around comfort.",
  },
  {
    title: "Colour glow",
    category: "Hairstyle",
    image: `${mediaLibrary.hairstyle}/11.png`,
    alt: "Hair colour glow result at B Tanish Salon",
    description: "Rich tones styled for a soft high-shine finish.",
  },
  {
    title: "Refined detailing",
    category: "Manicure",
    image: `${mediaLibrary.manicure}/8.png`,
    alt: "Refined manicure details from B Tanish Salon",
    description: "A close-up look at clean shaping and art precision.",
  },
];

export const featureVideos: FeatureVideo[] = [
  {
    title: "Inside the salon",
    src: `${mediaLibrary.videos}/videoplayback.mp4`,
    description: "A quick look at the mood, movement, and styling energy inside B Tanish.",
  },
  {
    title: "Hair in motion",
    src: `${mediaLibrary.videos}/videoplayback (2).mp4`,
    description: "Showcasing real hair texture, finish, and shine after service.",
  },
  {
    title: "Beauty floor moments",
    src: `${mediaLibrary.videos}/videoplayback (4).mp4`,
    description: "Real salon footage that complements the gallery and transformation work.",
  },
];

export const transformations: Transformation[] = [
  {
    title: "Colour lift and softness",
    category: "Hair Transformation",
    beforeImage: `${mediaLibrary.transform}/1/before.png`,
    afterImage: `${mediaLibrary.transform}/1/after.png`,
    beforeLabel: "Flat tone and heavy texture",
    afterLabel: "Brighter dimension and cleaner movement",
    details: "A real salon transformation focused on lighter dimension, a softer finish, and a more polished silhouette.",
  },
  {
    title: "Freshened salon finish",
    category: "Colour Refresh",
    beforeImage: `${mediaLibrary.transform}/2/before.png`,
    afterImage: `${mediaLibrary.transform}/2/after.png`,
    beforeLabel: "Dullness and uneven balance",
    afterLabel: "Refined colour and visible shine",
    details: "This result highlights how colour placement and finishing can quickly make the overall look feel more intentional.",
  },
  {
    title: "Smoother final look",
    category: "Smoothening Finish",
    beforeImage: `${mediaLibrary.transform}/3/before.png`,
    afterImage: `${mediaLibrary.transform}/3/after.png`,
    beforeLabel: "Unsettled texture",
    afterLabel: "Silkier finish and better control",
    details: "A before-and-after pair that shows the salon's preference for finish, softness, and camera-ready neatness.",
  },
  {
    title: "Texture revival",
    category: "Texture Revival",
    beforeImage: `${mediaLibrary.transform}/4/before.png`,
    afterImage: `${mediaLibrary.transform}/4/after.png`,
    beforeLabel: "Low definition",
    afterLabel: "More shape, glow, and movement",
    details: "A transformation that demonstrates how B Tanish balances visible change with an approachable, wearable result.",
  },
];

export const reviewHighlights: ReviewHighlight[] = [
  {
    title: "Personalised consultation",
    description: "The original website emphasizes one-on-one consultation and a dedicated expert for the appointment.",
  },
  {
    title: "Affordable, justified pricing",
    description: "B Tanish presents itself as accessible while still focusing on quality products and careful execution.",
  },
  {
    title: "Trend-aware beauty work",
    description: "Hair, nails, skin, and makeup are positioned as current, modern, and adaptable from everyday to occasion looks.",
  },
  {
    title: "Supportive aftercare",
    description: "The business messaging promises help before and after the service, not just during the appointment itself.",
  },
];

export const branchLocations: BranchLocation[] = [
  {
    name: "Wakad",
    phones: [brand.phones.wakadPrimary, brand.phones.wakadSecondary],
    address: "Rajveer Nucleus Building, Flat No. 206, 2nd Floor, Mathoba Chowk, Pimpri-Chinchwad, Maharashtra",
    hours: "9:30 am - 9:30 pm",
    directionUrl: "https://maps.app.goo.gl/c9LFQatF6LPyxRmC6",
    mapEmbed: "https://maps.google.com/maps?q=btanish%20wakad&t=m&z=11&output=embed&iwloc=near",
  },
  {
    name: "Pimple Gurav",
    phones: [brand.phones.pimpleGurav],
    address: "Shop No 3, 1st Floor, Ganeshkrupa Building, Katepuram Chowk, Pimple Gurav, Pune",
    hours: "10:30 am - 8:30 pm",
    directionUrl: "https://maps.app.goo.gl/xJcwtroCHa4Nec4N8",
    mapEmbed: "https://maps.google.com/maps?q=btanish%20pimple%20gurav&t=m&z=11&output=embed&iwloc=near",
  },
];

export const brandPartners = [
  { name: "Brand Partner 1", image: `${mediaLibrary.brandPartners}/1.png` },
  { name: "Brand Partner 2", image: `${mediaLibrary.brandPartners}/2.png` },
  { name: "Brand Partner 3", image: `${mediaLibrary.brandPartners}/3.png` },
  { name: "Brand Partner 4", image: `${mediaLibrary.brandPartners}/4.png` },
  { name: "Brand Partner 5", image: `${mediaLibrary.brandPartners}/5.png` },
  { name: "Brand Partner 6", image: `${mediaLibrary.brandPartners}/6.png` },
  { name: "Brand Partner 7", image: `${mediaLibrary.brandPartners}/11.png` },
];

export const contactDetails = {
  email: brand.email,
  whatsapp: brand.phones.whatsapp,
  instagram: brand.social.instagram,
  facebook: brand.social.facebook,
  google: brand.social.google,
};
