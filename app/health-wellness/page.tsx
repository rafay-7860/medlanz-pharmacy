import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/lib/content";
import { siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Health & Wellness",
  description:
    "Educational health and wellness articles from MEDLANZ Pharmacy in Deira, Dubai. General information only — not personalized medical advice.",
  alternates: { canonical: absoluteUrl("/health-wellness") },
  openGraph: {
    title: `Health & Wellness | ${siteConfig.name}`,
    description:
      "Everyday wellness tips, personal care essentials, vitamins education, and first aid basics.",
    url: absoluteUrl("/health-wellness"),
  },
};

export default function HealthWellnessPage() {
  return (
    <>
      <PageHero
        eyebrow="Health & Wellness"
        title="Health & Wellness Guides"
        description="Educational articles to support everyday wellness awareness. This content is for general information only and is not a diagnosis, prescription, or personalized treatment plan."
      />

      <section className="section-padding bg-white">
        <div className="container-xl space-y-10">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              id={post.slug}
              className="card-surface grid overflow-hidden md:grid-cols-[280px_1fr]"
            >
              <div className="relative min-h-[220px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {post.category}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-secondary md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {post.description}
                </p>
                <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                  <p>
                    Building healthy routines often starts with small, consistent
                    habits — staying hydrated, resting well, keeping personal care
                    products organized, and knowing where to find pharmacy
                    essentials when you need them.
                  </p>
                  <p>
                    If you have questions about products available at MEDLANZ
                    Pharmacy, contact us by phone or WhatsApp. For personal
                    medical concerns, speak with a qualified healthcare
                    professional.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
