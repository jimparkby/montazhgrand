import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: `Реализованные проекты — ${company.name}`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Реализованные проекты"
        title="Объекты, которые говорят за нас"
        subtitle={`С ${company.founded} по ${new Date().getFullYear()} год мы участвовали в строительстве ключевых технологических комплексов на крупнейших нефтеперерабатывающих заводах региона.`}
        image="/images/pipe-rack.jpg"
      />

      <section className="bg-white py-16">
        <div className="container-page">
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            За период с {company.founded} по {new Date().getFullYear()} год
            ООО «Монтажгранд» выполнило договоры на ОАО «Мозырский НПЗ» и
            ОАО «Нафтан» — от увеличения производительности установок
            каталитического крекинга до строительства комплексов
            гидрокрекинга и замедленного коксования. Каждый проект — это
            совместная работа с ведущими генеральными подрядчиками отрасли
            и точное соблюдение технологических требований заказчика.
          </p>

          <div className="mt-12 space-y-6">
            {projects.map((project, index) => (
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
                      <dt className="font-semibold text-navy-800">Объект:</dt>
                      <dd>{project.site}</dd>
                    </div>
                    <div className="flex gap-1.5">
                      <dt className="font-semibold text-navy-800">
                        Генеральный подрядчик:
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
