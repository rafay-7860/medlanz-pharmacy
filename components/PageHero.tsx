type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border gradient-mesh">
      <div className="container-xl py-14 md:py-16 lg:py-20">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-extrabold text-secondary md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
