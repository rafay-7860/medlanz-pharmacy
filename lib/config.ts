export const siteConfig = {
  name: "MEDLANZ Pharmacy",
  shortName: "MEDLANZ",
  category: "Pharmacy & Medicine",
  tagline: "Your Health, Our Priority.",
  description:
    "MEDLANZ Pharmacy is your neighborhood healthcare destination in Hor Al Anz, Deira, Dubai. Pharmacy essentials, wellness products, and friendly pharmacy assistance.",
  phone: {
    display: "+971 56 967 6404",
    tel: "+971569676404",
  },
  whatsapp: {
    display: "+971 56 967 6404",
    number: "971569676404",
    url: "https://wa.me/971569676404",
    defaultMessage:
      "Hello MEDLANZ Pharmacy, I would like to inquire about your pharmacy services and healthcare products. Please assist me.",
  },
  address: {
    street: "Abu Baker Al Siddique St, Near Al Ansari Exchange",
    area: "Hor Al Anz, Deira",
    city: "Dubai",
    country: "United Arab Emirates",
    full: "Abu Baker Al Siddique St, Near Al Ansari Exchange, Hor Al Anz, Deira, Dubai, United Arab Emirates.",
  },
  maps: {
    shortUrl: "https://maps.app.goo.gl/zw2UFyBsBKMDXr989",
    // Update embedSrc if you obtain a Google Maps embed URL for this location
    embedSrc:
      "https://www.google.com/maps?q=Abu+Baker+Al+Siddique+St,+Near+Al+Ansari+Exchange,+Hor+Al+Anz,+Deira,+Dubai&output=embed",
  },
  // Update this to your real production domain when ready
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://medlanzpharmacy.ae",
  locale: "en_AE",
  country: "United Arab Emirates",
  targetMarket:
    "Dubai residents, families, tourists, and local healthcare customers",
  keywords: [
    "MEDLANZ Pharmacy Dubai",
    "Pharmacy in Hor Al Anz",
    "Pharmacy in Deira Dubai",
    "Pharmacy Near Al Ansari Exchange",
    "Pharmacy in Abu Baker Al Siddique Street",
    "Medicine Shop in Deira",
    "Pharmacy Dubai UAE",
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Health & Wellness", href: "/health-wellness" },
    { label: "Contact", href: "/contact" },
  ],
  social: [] as { label: string; href: string }[],
} as const;

export const inquiryTypes = [
  "General Inquiry",
  "Product Availability",
  "Prescription Assistance",
  "Health & Wellness Products",
  "Directions / Location",
  "Other",
] as const;

export type InquiryType = (typeof inquiryTypes)[number];
