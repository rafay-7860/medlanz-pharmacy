"use client";

import { MapPin, MessageCircle, Package, Users } from "lucide-react";
import { motion } from "framer-motion";
import { trustFeatures } from "@/lib/content";

const iconMap = {
  MapPin,
  Package,
  Users,
  MessageCircle,
} as const;

export default function TrustFeatures() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container-xl grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {trustFeatures.map((feature, index) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap];
          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl bg-background-light p-5 ring-1 ring-border"
            >
              <div className="mb-3 inline-flex rounded-xl bg-white p-2.5 text-primary shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-secondary">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
