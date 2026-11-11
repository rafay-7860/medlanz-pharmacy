import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductCategories from "@/components/ProductCategories";
import { siteConfig } from "@/lib/config";
import { absoluteUrl, getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse MEDLANZ Pharmacy product categories in Deira, Dubai — medicines, vitamins, skincare, baby care, personal care, first aid, and wellness essentials. Inquire for availability.",
  alternates: { canonical: absoluteUrl("/products") },
  openGraph: {
    title: `Products | ${siteConfig.name}`,
    description:
      "Inquire about pharmacy and wellness product categories at MEDLANZ Pharmacy, Hor Al Anz, Deira.",
    url: absoluteUrl("/products"),
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Pharmacy & Wellness Product Categories"
        description="Explore healthcare categories and inquire via WhatsApp. Availability and pricing vary — please contact us to confirm what you need."
      />
      <ProductCategories showHeading={false} />
      <section className="pb-20">
        <div className="container-xl rounded-[1.5rem] bg-secondary p-8 text-white md:p-10">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Looking for a specific product?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            Message MEDLANZ Pharmacy on WhatsApp with the product or category
            you need. We do not offer unrestricted online purchasing of
            prescription medicines through this website.
          </p>
          <a
            href={getWhatsAppUrl(
              "Hello MEDLANZ Pharmacy, I would like to inquire about a specific product. Please assist me."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-6"
          >
            Inquire on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
