"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import HeroSlider from "@/components/HeroSlider";

const heroImages = [
  "/images/hero-refinery-night.jpg",
  "/images/hero-slide-tanks.jpg",
  "/images/hero-slide-towers.jpg",
];

export default function HomeView() {
  const { t } = useLanguage();
  const h = t.ui.home;

  return (
    <>
      <section className="relative flex h-[86vh] min-h-[560px] items-center overflow-hidden">
        <HeroSlider images={heroImages} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/55 to-navy-950/95" />

        <div className="container-page relative z-10">
          <div className="heading-font text-xs font-semibold text-white/60">
            {t.company.name}
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {t.company.sloganSub}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="heading-font rounded-md bg-white px-7 py-3.5 text-sm font-bold text-navy-950 transition-colors hover:bg-white/90"
            >
              {h.heroCtaServices}
            </Link>
            <Link
              href="/contacts"
              className="heading-font rounded-md border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-white"
            >
              {h.heroCtaContacts}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-20">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="heading-font text-xs font-semibold text-muted">
              {h.aboutEyebrow}
            </div>
            <h2 className="heading-font mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
              {h.aboutTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{h.aboutP1}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{h.aboutP2}</p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-navy-600"
            >
              {h.aboutLink}
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/images/steel-structures.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="heading-font text-xs font-semibold text-muted">
                {h.servicesEyebrow}
              </div>
              <h2 className="heading-font mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
                {h.servicesTitle}
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-navy-900 hover:text-navy-600"
            >
              {h.servicesAll}
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-lg"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-navy-950/10" />
                <div className="relative z-10 p-5">
                  <h3 className="heading-font text-base font-semibold leading-snug text-white">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="container-page relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="heading-font text-xs font-semibold text-white/60">
              {h.projectsEyebrow}
            </div>
            <h2 className="heading-font mt-3 text-2xl font-bold text-white sm:text-3xl">
              {h.projectsTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              {h.projectsText}
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/70"
            >
              {h.projectsLink}
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/pipe-rack.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-16">
        <div className="container-page flex flex-col items-center gap-5 text-center">
          <h2 className="heading-font text-2xl font-bold text-navy-900 sm:text-3xl">
            {h.ctaTitle}
          </h2>
          <p className="max-w-xl text-base text-muted">{h.ctaText}</p>
          <Link
            href="/services#contact"
            className="heading-font rounded-md bg-navy-900 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-800"
          >
            {h.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
