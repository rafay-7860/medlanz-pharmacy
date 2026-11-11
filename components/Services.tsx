"use client";

import Link from "next/link";
import {
  ClipboardPlus,
  Cross,
  HeartPulse,
  Leaf,
  Pill,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/content";

const iconMap = {
  ClipboardPlus,
  Pill,
  Leaf,
  Sparkles,
  Cross,
  HeartPulse,
} as const;

type ServicesProps = {
  showHeading?: boolean;
  limit?: number;
};

export default function Services({ showHeading = true, limit }: ServicesProps) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="section-padding bg-background-light">
      <div className="container-xl">
        {showHeading ? (
          <SectionHeading
            eyebrow="Pharmacy Services"
            title="Healthcare Services for Everyday Needs"
            description="Practical pharmacy support and healthcare essentials for residents, families, and visitors in Deira, Dubai."
          />
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06 }}
                className="card-surface group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(16,44,60,0.12)]"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-accent p-3 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex text-sm font-semibold text-primary transition hover:text-primary-dark"
                >
                  Contact Us →
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
