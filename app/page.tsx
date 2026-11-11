import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import Services from "@/components/Services";
import TrustFeatures from "@/components/TrustFeatures";
import WellnessBlog from "@/components/WellnessBlog";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Pharmacy in Hor Al Anz, Deira, Dubai`,
  description: siteConfig.description,
  alternates: { canonical: absoluteUrl("/") },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustFeatures />
      <Services />
      <ProductCategories />
      <About compact />
      <WhyChooseUs />
      <WellnessBlog limit={3} />
      <ContactSection />
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
