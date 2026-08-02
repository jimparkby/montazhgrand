import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  compact?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden ${compact ? "h-[38vh] min-h-[280px]" : "h-[46vh] min-h-[340px]"}`}>
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/70 to-navy-950/92" />
      <div className="relative z-10 flex h-full items-end">
        <div className="container-page pb-10">
          {eyebrow && (
            <div className="heading-font text-xs font-semibold text-gold-400">
              {eyebrow}
            </div>
          )}
          <h1 className="heading-font mt-3 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
