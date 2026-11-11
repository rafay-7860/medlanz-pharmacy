import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

export default function BlogCard({
  slug,
  category,
  title,
  description,
  image,
}: BlogCardProps) {
  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {category}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold text-secondary">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>
        <Link
          href={`/health-wellness#${slug}`}
          className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
