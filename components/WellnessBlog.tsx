"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/content";

type WellnessBlogProps = {
  limit?: number;
  showHeading?: boolean;
};

export default function WellnessBlog({
  limit = 3,
  showHeading = true,
}: WellnessBlogProps) {
  const posts = blogPosts.slice(0, limit);

  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        {showHeading ? (
          <SectionHeading
            eyebrow="Health & Wellness"
            title="Educational Health & Wellness Articles"
            description="General wellness information for educational purposes. This content is not personalized medical advice, diagnosis, or treatment."
          />
        ) : null}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
