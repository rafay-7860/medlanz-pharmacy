"use client";

import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/config";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";

export default function ContactSection() {
  const cards = [
    {
      title: "Call Our Pharmacy",
      description: `Speak with us at ${siteConfig.phone.display}`,
      href: getTelUrl(),
      icon: Phone,
      cta: "Call Now",
      external: false,
      className: "btn-primary",
    },
    {
      title: "Chat on WhatsApp",
      description: "Send a quick inquiry about products or services.",
      href: getWhatsAppUrl(),
      icon: MessageCircle,
      cta: "Open WhatsApp",
      external: true,
      className: "btn-whatsapp",
    },
    {
      title: "Find Our Location",
      description: siteConfig.address.full,
      href: siteConfig.maps.shortUrl,
      icon: MapPin,
      cta: "Get Directions",
      external: true,
      className: "btn-secondary",
    },
  ];

  return (
    <section className="section-padding bg-background-light">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Visit Us"
          title="Visit MEDLANZ Pharmacy"
          description="Find us in Hor Al Anz, Deira — or contact us by phone or WhatsApp for pharmacy inquiries."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card-surface flex h-full flex-col p-6"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-accent p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className={`${card.className} mt-5 !px-4 !py-2.5 text-sm`}
                >
                  {card.cta}
                </a>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-[var(--shadow)]">
          <div className="flex flex-col gap-3 border-b border-border px-5 py-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-secondary">
                {siteConfig.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{siteConfig.address.full}</p>
            </div>
            <a
              href={siteConfig.maps.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-4 !py-2.5 text-sm"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>
          <iframe
            title="MEDLANZ Pharmacy location map"
            src={siteConfig.maps.embedSrc}
            className="h-[320px] w-full border-0 md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
