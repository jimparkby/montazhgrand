"use client";

import PageHero from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n";

export default function AboutView() {
  const { t } = useLanguage();
  const a = t.ui.about;

  return (
    <>
      <PageHero
        eyebrow={a.eyebrow}
        title={a.title}
        subtitle={t.company.name}
        image="/images/hero-refinery-night.jpg"
        compact
      />

      <section className="bg-white py-16">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="heading-font text-xl font-bold text-navy-900">
                {a.missionTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {a.missionText}
              </p>
            </div>

            <div>
              <h2 className="heading-font text-xl font-bold text-navy-900">
                {a.activityTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {a.activityP1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {a.activityP2}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {a.activityP3}
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-line bg-bg-light p-6">
              <div className="heading-font text-3xl font-bold text-navy-900">
                {a.isoBig}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {a.isoText}
              </p>
            </div>
            <div className="rounded-lg border border-line bg-bg-light p-6">
              <div className="heading-font text-3xl font-bold text-navy-900">
                {a.sinceBig}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {a.sinceText}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
