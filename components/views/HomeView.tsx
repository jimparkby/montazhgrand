"use client";

import Image from "next/image";
import Link from "next/link";
import { shared, useLanguage } from "@/lib/i18n";

export default function HomeView() {
  const { t } = useLanguage();
  const h = t.ui.home;

  const stats: [string, string][] = [
    [`${new Date().getFullYear() - shared.founded}+`, h.stats[0]],
    [`${t.projects.length}+`, h.stats[1]],
    ["ISO 9001", h.stats[2]],
    ["3", h.stats[3]],
  ];

  return (
    <>
      <section className="relative flex h-[86vh] min-h-[560px] items-center overflow-hidden">
        <Image
          src="/images/hero-refinery-night.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/55 to-navy-950/95" />

        <div className="container-page relative z-10">
          <div className="heading-font text-xs font-semibold text-gold-400">
            {t.company.name}
          </div>
          <h1 className="heading-font mt-4 max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
            {t.company.slogan}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {t.company.sloganSub}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="heading-font rounded-md bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
            >
              {h.heroCtaServices}
            </Link>
            <Link
              href="/contacts"
              className="heading-font rounded-md border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              {h.heroCtaContacts}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="container-page grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="text-center sm:text-left">
              <div className="heading-font text-3xl font-bold text-navy-900 sm:text-4xl">
                {value}
              </div>
              <div className="mt-1 text-xs leading-snug text-muted sm:text-sm">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-light py-20">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="heading-font text-xs font-semibold text-gold-500">
              {h.aboutEyebrow}
            </div>
            <h2 className="heading-font mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
              {h.aboutTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{h.aboutP1}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{h.aboutP2}</p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-500"
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
              <div className="heading-font text-xs font-semibold text-gold-500">
                {h.servicesEyebrow}
              </div>
              <h2 className="heading-font mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
                {h.servicesTitle}
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-navy-900 hover:text-gold-500"
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
            <div className="heading-font text-xs font-semibold text-gold-400">
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
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300"
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
