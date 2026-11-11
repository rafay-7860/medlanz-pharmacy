import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact MEDLANZ Pharmacy in Hor Al Anz, Deira, Dubai. Call +971 56 967 6404, chat on WhatsApp, or get directions near Al Ansari Exchange.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Call, WhatsApp, or visit MEDLANZ Pharmacy on Abu Baker Al Siddique Street, Hor Al Anz, Deira.",
    url: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact MEDLANZ Pharmacy"
        description="Reach us by phone or WhatsApp, or visit our pharmacy in Hor Al Anz, Deira. We’re happy to help with inquiries about services and products."
      />
      <ContactSection />
      <section className="section-padding bg-white">
        <div className="container-xl grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-secondary">
              Pharmacy Details
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-secondary">Business Name</dt>
                <dd className="mt-1 text-muted">{siteConfig.name}</dd>
              </div>
              <div>
                <dt className="font-semibold text-secondary">Phone</dt>
                <dd className="mt-1 text-muted">{siteConfig.phone.display}</dd>
              </div>
              <div>
                <dt className="font-semibold text-secondary">WhatsApp</dt>
                <dd className="mt-1 text-muted">{siteConfig.whatsapp.display}</dd>
              </div>
              <div>
                <dt className="font-semibold text-secondary">Address</dt>
                <dd className="mt-1 text-muted">{siteConfig.address.full}</dd>
              </div>
              <div>
                <dt className="font-semibold text-secondary">Google Maps</dt>
                <dd className="mt-1">
                  <a
                    href={siteConfig.maps.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:text-primary-dark"
                  >
                    Open location
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
