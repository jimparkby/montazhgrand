"use client";

import PageHero from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n";

export default function CareerView() {
  const { t } = useLanguage();
  const c = t.ui.career;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        subtitle={c.subtitle}
        image="/images/hero-slide-towers.jpg"
      />

      <section className="bg-white py-16">
        <div className="container-page">
          <h2 className="heading-font text-xl font-bold text-navy-900">
            {c.vacanciesTitle}
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {t.vacancies.map((vacancy) => (
              <div
                key={vacancy.title}
                className="flex flex-col rounded-lg border border-line p-6"
              >
                <h3 className="heading-font text-base font-semibold leading-snug text-navy-900">
                  {vacancy.title}
                </h3>

                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-navy-800">{c.educationLabel}</dt>
                    <dd className="mt-0.5 text-muted">{vacancy.education}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-800">{c.experienceLabel}</dt>
                    <dd className="mt-0.5 text-muted">{vacancy.experience}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-800">{c.skillsLabel}</dt>
                    <dd className="mt-0.5 text-muted">{vacancy.skills}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-800">
                      {c.offerLabel}
                    </dt>
                    <dd className="mt-0.5 text-muted">{vacancy.offer}</dd>
                  </div>
                </dl>

                <div className="mt-6 space-y-2 border-t border-line pt-4 text-sm">
                  <a
                    href={vacancy.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-semibold text-navy-900 hover:text-navy-600"
                  >
                    {c.linkText}
                  </a>
                  <a
                    href={`tel:${vacancy.phone.replace(/[^\d+]/g, "")}`}
                    className="block text-muted hover:text-navy-900"
                  >
                    {vacancy.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
