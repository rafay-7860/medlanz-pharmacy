"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { productCategories } from "@/lib/content";
import { getProductInquiryMessage, getWhatsAppUrl } from "@/lib/utils";

type ProductCategoriesProps = {
  showHeading?: boolean;
};

export default function ProductCategories({
  showHeading = true,
}: ProductCategoriesProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        {showHeading ? (
          <SectionHeading
            eyebrow="Product Categories"
            title="Explore Healthcare & Wellness Categories"
            description="Browse popular pharmacy categories and inquire about availability via WhatsApp. Product stock and pricing may vary — please contact us to confirm."
          />
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category, index) => (
            <motion.article
              key={category.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className="card-surface group overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.title} category at MEDLANZ Pharmacy`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/55 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-secondary">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {category.description}
                </p>
                <a
                  href={getWhatsAppUrl(getProductInquiryMessage(category.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-4 !px-4 !py-2.5 text-sm"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
