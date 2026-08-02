import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { company, services } from "@/lib/content";

export const metadata: Metadata = {
  title: `Услуги — ${company.name}`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Услуги"
        title="Монтажные работы полного цикла"
        subtitle="От монтажа технологического оборудования и трубопроводов до сборки металлоконструкций и изоляции — выполняем работы любой сложности."
        image="/images/welding.jpg"
      />

      <section className="bg-white py-16">
        <div className="container-page space-y-16">
          {services.map((service, index) => (
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
                  Услуга {String(index + 1).padStart(2, "0")}
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
              Готовы обсудить проект?
            </h2>
            <p className="mt-3 text-base text-white/70">
              Для получения обратной связи заполните форму — мы свяжемся с
              вами в ближайшее время.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <ContactForm />
          </div>
          <p className="mt-6 text-center text-sm text-white/50">
            Или напишите напрямую:{" "}
            <Link
              href={`mailto:${company.email}`}
              className="text-white hover:text-white/80"
            >
              {company.email}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
