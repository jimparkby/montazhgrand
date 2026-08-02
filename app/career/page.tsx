import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company, vacancies } from "@/lib/content";

export const metadata: Metadata = {
  title: `Карьера — ${company.name}`,
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Карьера"
        title="Строим карьеру в «Монтажгранд»"
        subtitle="Приглашаем в команду специалистов, готовых работать на крупных объектах нефтехимической промышленности."
        image="/images/welding.jpg"
      />

      <section className="bg-white py-16">
        <div className="container-page">
          <h2 className="heading-font text-xl font-bold text-navy-900">
            Вакансии
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {vacancies.map((vacancy) => (
              <div
                key={vacancy.title}
                className="flex flex-col rounded-lg border border-line p-6"
              >
                <h3 className="heading-font text-base font-semibold leading-snug text-navy-900">
                  {vacancy.title}
                </h3>

                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-navy-800">Образование</dt>
                    <dd className="mt-0.5 text-muted">{vacancy.education}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-800">Опыт работы</dt>
                    <dd className="mt-0.5 text-muted">{vacancy.experience}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-800">Навыки</dt>
                    <dd className="mt-0.5 text-muted">{vacancy.skills}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-800">
                      Компания предлагает
                    </dt>
                    <dd className="mt-0.5 text-muted">{vacancy.offer}</dd>
                  </div>
                </dl>

                <div className="mt-6 space-y-2 border-t border-line pt-4 text-sm">
                  <a
                    href={vacancy.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-semibold text-navy-900 hover:text-gold-500"
                  >
                    Вакансия на gsz.gov.by →
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
