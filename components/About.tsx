"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { images } from "@/lib/content";
import { siteConfig } from "@/lib/config";

type AboutProps = {
  compact?: boolean;
};

export default function About({ compact = false }: AboutProps) {
  return (
    <section className={`bg-white ${compact ? "section-padding" : "section-padding"}`}>
      <div className="container-xl grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(16,44,60,0.14)]">
            <Image
              src={images.about}
              alt="Pharmacy interior with medicine bottles and healthcare products"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-border md:left-8 md:right-auto md:max-w-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-accent p-2 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-secondary">
                  Hor Al Anz, Deira
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Near Al Ansari Exchange on Abu Baker Al Siddique Street
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            About MEDLANZ Pharmacy
          </p>
          <h2 className="font-display text-3xl font-bold text-secondary md:text-4xl">
            Your Neighborhood Pharmacy in Deira, Dubai
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
            <p>
              MEDLANZ Pharmacy is a customer-focused neighborhood pharmacy
              serving residents, families, and visitors in Hor Al Anz, Deira.
              Conveniently located on Abu Baker Al Siddique Street near Al
              Ansari Exchange, we provide a welcoming place to find healthcare
              and wellness essentials.
            </p>
            <p>
              From everyday pharmacy needs to personal care and wellness
              products, our team is here to offer friendly assistance and a
              straightforward pharmacy experience in the heart of Deira.
            </p>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-secondary">
            <li className="flex items-center gap-2">
              <Navigation className="h-4 w-4 text-primary" />
              Convenient location on Abu Baker Al Siddique Street
            </li>
            <li className="flex items-center gap-2">
              <Navigation className="h-4 w-4 text-primary" />
              Near Al Ansari Exchange, Hor Al Anz, Deira
            </li>
            <li className="flex items-center gap-2">
              <Navigation className="h-4 w-4 text-primary" />
              Healthcare and wellness essentials for everyday needs
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get in Touch With Us
            </Link>
            <a
              href={siteConfig.maps.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
