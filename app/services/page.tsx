import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import TrustFeatures from "@/components/TrustFeatures";
import { siteConfig } from "@/lib/config";
import { absoluteUrl, getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore MEDLANZ Pharmacy services in Deira, Dubai — prescription assistance, OTC medicines, vitamins, personal care, first aid, and wellness products.",
  alternates: { canonical: absoluteUrl("/services") },
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description:
      "Healthcare services for everyday needs at MEDLANZ Pharmacy in Hor Al Anz, Deira.",
    url: absoluteUrl("/services"),
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Healthcare Services for Everyday Needs"
        description="Friendly pharmacy assistance and healthcare essentials for residents, families, and visitors in Hor Al Anz, Deira."
      />
      <TrustFeatures />
      <Services showHeading={false} />
      <section className="section-padding bg-white">
        <div className="container-xl card-surface flex flex-col items-start gap-5 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-secondary md:text-3xl">
              Need help finding something?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              Contact MEDLANZ Pharmacy by phone or WhatsApp for inquiries about
              services and healthcare products.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
