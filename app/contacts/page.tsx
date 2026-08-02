import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: `Контакты — ${company.name}`,
};

const mapQuery = encodeURIComponent("Минск, ул. Мясникова 39");

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Свяжитесь с нами"
        subtitle={company.name}
        image="/images/pipe-insulation.jpg"
        compact
      />

      <section className="bg-white py-16">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-1">
            <div>
              <h2 className="heading-font text-xs font-semibold text-muted">
                Юридический адрес
              </h2>
              <p className="mt-2 text-base text-navy-900">
                {company.legalAddress}
              </p>
            </div>
            <div>
              <h2 className="heading-font text-xs font-semibold text-muted">
                Почтовый адрес
              </h2>
              <p className="mt-2 text-base text-navy-900">
                {company.mailAddress}
              </p>
            </div>
            <div>
              <h2 className="heading-font text-xs font-semibold text-muted">
                Телефоны
              </h2>
              <ul className="mt-2 space-y-1">
                {company.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="text-base text-navy-900 hover:text-muted"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="heading-font text-xs font-semibold text-muted">
                Email
              </h2>
              <p className="mt-2">
                <a
                  href={`mailto:${company.email}`}
                  className="text-base text-navy-900 hover:text-muted"
                >
                  {company.email}
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="h-72 w-full overflow-hidden rounded-lg border border-line sm:h-96">
              <iframe
                title="Карта — Монтажгранд"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-font text-2xl font-bold text-navy-900 sm:text-3xl">
              Напишите нам
            </h2>
            <p className="mt-3 text-base text-muted">
              Заполните форму — мы свяжемся с вами в ближайшее время.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-navy-900 p-6 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
