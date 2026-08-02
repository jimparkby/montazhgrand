"use client";

import Link from "next/link";
import { shared, useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="heading-font text-lg font-semibold text-white">
            {t.company.shortName}
          </div>
          <p className="mt-3 text-sm leading-relaxed">{t.ui.footer.about}</p>
          <p className="mt-4 text-xs text-white/50">{t.company.iso}</p>
        </div>

        <div>
          <div className="heading-font text-xs font-semibold text-white/50">
            {t.ui.footer.navTitle}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {t.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="heading-font text-xs font-semibold text-white/50">
            {t.ui.footer.contactsTitle}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {shared.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="hover:text-white transition-colors">
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${shared.email}`} className="hover:text-white transition-colors">
                {shared.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="heading-font text-xs font-semibold text-white/50">
            {t.ui.footer.addressTitle}
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            {t.ui.footer.legalAddressLabel}
            <br />
            {t.company.legalAddress}
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {t.ui.footer.mailAddressLabel}
            <br />
            {t.company.mailAddress}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} {t.company.name}. {t.ui.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
