"use client";

import {
  HandHeart,
  MapPinned,
  PhoneCall,
  ShieldPlus,
  Smile,
  Store,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { whyChooseUs } from "@/lib/content";

const iconMap = {
  MapPinned,
  Smile,
  ShieldPlus,
  Store,
  HandHeart,
  PhoneCall,
} as const;

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-background-light">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose MEDLANZ Pharmacy?"
          description="A neighborhood pharmacy experience built around convenience, clear communication, and everyday healthcare essentials."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
                className="card-surface p-6 transition hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-primary ring-1 ring-border">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
