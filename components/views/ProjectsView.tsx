"use client";

import PageHero from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n";

export default function ProjectsView() {
  const { t } = useLanguage();
  const p = t.ui.projects;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        subtitle={p.subtitle}
        image="/images/pipe-rack.jpg"
      />

      <section className="bg-white py-16">
        <div className="container-page">
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            {p.intro}
          </p>

          <div className="mt-12 space-y-6">
            {t.projects.map((project, index) => (
              <div
                key={project.title}
                className="flex flex-col gap-4 rounded-lg border border-line p-6 sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="heading-font shrink-0 text-2xl font-bold text-muted">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="heading-font text-base font-semibold leading-snug text-navy-900 sm:text-lg">
                    {project.title}
                  </h2>
                  <dl className="mt-3 flex flex-wrap gap-x-8 gap-y-1 text-sm text-muted">
                    <div className="flex gap-1.5">
                      <dt className="font-semibold text-navy-800">{p.siteLabel}</dt>
                      <dd>{project.site}</dd>
                    </div>
                    <div className="flex gap-1.5">
                      <dt className="font-semibold text-navy-800">
                        {p.contractorLabel}
                      </dt>
                      <dd>{project.contractor}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
