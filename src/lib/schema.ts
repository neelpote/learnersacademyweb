import { absoluteUrl, siteConfig, SITE_URL } from "@/lib/site";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

export function sitewideSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": organizationId,
        name: siteConfig.name,
        alternateName: siteConfig.alternateName,
        description: siteConfig.description,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.logo),
        },
        image: absoluteUrl(siteConfig.socialImage),
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          ...siteConfig.geo,
        },
        hasMap: siteConfig.mapsUrl,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        areaServed: siteConfig.areaServed.map((name) => ({
          "@type": "Place",
          name: `${name}, Pune`,
        })),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "admissions",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
        founder: {
          "@type": "Person",
          name: "Dr. HrishiRaje Bhosale",
        },
        knowsAbout: [
          "Mathematics tuition",
          "Science tuition",
          "CBSE",
          "ICSE",
          "Maharashtra State Board",
          "Board exam preparation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: siteConfig.name,
        alternateName: siteConfig.alternateName,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": organizationId },
      },
    ],
  };
}

export function homepageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Best Tuition Classes in Baner Pune",
    description: siteConfig.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    inLanguage: siteConfig.language,
  };
}

export function breadcrumbSchema(
  currentName: string,
  currentPath: string,
  parent?: { name: string; path: string },
) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ];

  if (parent) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: parent.name,
      item: absoluteUrl(parent.path),
    });
  }

  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: currentName,
    item: absoluteUrl(currentPath),
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
