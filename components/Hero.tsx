"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeartPulse, Pill, ShieldPlus, Stethoscope } from "lucide-react";
import { images } from "@/lib/content";

const floatingIcons = [
  { Icon: Pill, className: "left-[8%] top-[18%]", delay: 0.2 },
  { Icon: HeartPulse, className: "right-[10%] top-[22%]", delay: 0.35 },
  { Icon: ShieldPlus, className: "left-[12%] bottom-[18%]", delay: 0.5 },
  { Icon: Stethoscope, className: "right-[14%] bottom-[20%]", delay: 0.65 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-mesh">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent blur-3xl" />

      <div className="container-xl relative grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm ring-1 ring-border">
            Hor Al Anz · Deira · Dubai
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-secondary md:text-5xl lg:text-6xl">
            Your Health, Our Priority.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Welcome to MEDLANZ Pharmacy – Your neighborhood healthcare
            destination in Hor Al Anz, Deira, Dubai. Discover pharmacy
            essentials, wellness products, and friendly pharmacy assistance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Contact Our Pharmacy
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_30px_80px_rgba(16,44,60,0.18)]">
            <Image
              src={images.hero}
              alt="Modern pharmacy shelves with healthcare and wellness products"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/35 via-transparent to-primary/20" />
          </div>

          {floatingIcons.map(({ Icon, className, delay }) => (
            <motion.div
              key={className}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay, duration: 0.5 },
                y: { delay: delay + 0.4, duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className={`absolute hidden rounded-2xl bg-white/95 p-3 text-primary shadow-lg ring-1 ring-border md:block ${className}`}
            >
              <Icon className="h-5 w-5" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
