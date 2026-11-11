import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import About from "@/components/About";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import { images } from "@/lib/content";
import { siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MEDLANZ Pharmacy — your neighborhood pharmacy on Abu Baker Al Siddique Street in Hor Al Anz, Deira, Dubai, near Al Ansari Exchange.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "Neighborhood pharmacy in Hor Al Anz, Deira serving Dubai residents, families, and visitors.",
    url: absoluteUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About MEDLANZ Pharmacy"
        description="A customer-focused neighborhood pharmacy in Hor Al Anz, Deira — offering healthcare essentials and friendly assistance."
      />
      <About />
      <section className="section-padding bg-background-light">
        <div className="container-xl grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-secondary md:text-4xl">
              Serving the Deira Community
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              MEDLANZ Pharmacy welcomes Dubai residents, families, tourists, and
              local healthcare customers looking for a convenient pharmacy in
              Hor Al Anz. Whether you need everyday pharmacy essentials, personal
              care items, or wellness products, we are here to help with clear
              communication and a helpful approach.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our location on Abu Baker Al Siddique Street near Al Ansari
              Exchange makes it easy to stop by during your day in Deira.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Get in Touch With Us
            </Link>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(16,44,60,0.12)]">
            <Image
              src={images.pharmacyInterior}
              alt="Pharmacy healthcare essentials and wellness products"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </section>
      <WhyChooseUs />
    </>
  );
}
