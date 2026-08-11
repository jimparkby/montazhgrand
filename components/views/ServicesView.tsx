"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { shared, useLanguage } from "@/lib/i18n";

export default function ServicesView() {
  const { t } = useLanguage();
  const s = t.ui.services;

  return (
    <>
      <PageHero
        eyebrow={s.eyebrow}
        title={s.title}
        subtitle={s.subtitle}
        image="/images/hero-refinery-night.jpg"
      />

      <section className="bg-white py-16">
        <div className="container-page space-y-16">
          {t.services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-24 gap-8 lg:grid-cols-2 lg:items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
              <div>
                <div className="heading-font text-xs font-semibold text-muted">
                  {s.serviceLabel} {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="heading-font mt-3 text-2xl font-bold text-navy-900">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden bg-navy-900 py-20"
      >
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/pipe-rack.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="container-page relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-font text-2xl font-bold text-white sm:text-3xl">
              {s.contactTitle}
            </h2>
            <p className="mt-3 text-base text-white/70">{s.contactText}</p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <ContactForm />
          </div>
          <p className="mt-6 text-center text-sm text-white/50">
            {s.orWrite}{" "}
            <Link
              href={`mailto:${shared.email}`}
              className="text-white hover:text-white/80"
            >
              {shared.email}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
