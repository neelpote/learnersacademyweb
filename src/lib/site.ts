export const SITE_URL = "https://www.thelearnersacademy.in";

export const siteConfig = {
  name: "The Learners' Academy",
  alternateName: "Learners Academy Baner Pune",
  description:
    "Tuition and coaching centre in Baner, Pune, offering concept-based learning, small batches, and academic support for Classes 7–12.",
  locale: "en_IN",
  language: "en-IN",
  phone: "+91-86054-68382",
  phoneDisplay: "+91-86054 68382",
  email: "info@learnersacademy.com",
  logo: "/academy%20Logo%20-%20Background%20Removed.png",
  socialImage: "/maths-coaching-classroom-baner-pune.png",
  address: {
    streetAddress: "302, Tejas Eternity, Balewadi Phata",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411045",
    addressCountry: "IN",
  },
  geo: {
    latitude: 18.56482296782019,
    longitude: 73.7802709756218,
  },
  areaServed: ["Baner", "Balewadi", "Aundh", "Pashan"],
  mapsUrl:
    "https://www.google.com/maps/place/THE+LEARNERS'+ACADEMY/@18.5648229,73.7802709,17z/",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
