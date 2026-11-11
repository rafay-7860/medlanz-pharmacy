import { siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    telephone: siteConfig.phone.display,
    image: absoluteUrl("/logo/medlanz-og.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    sameAs: [siteConfig.maps.shortUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
