"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { shared, useLanguage, type Lang } from "@/lib/i18n";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy-950 text-xs text-white/70 md:block">
        <div className="container-page flex items-center justify-end gap-6 py-2">
          {shared.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="hover:text-gold-300 transition-colors"
            >
              {phone}
            </a>
          ))}
          <a
            href={`mailto:${shared.email}`}
            className="hover:text-gold-300 transition-colors"
          >
            {shared.email}
          </a>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </div>

      <div className="bg-navy-900/98 backdrop-blur supports-[backdrop-filter]:bg-navy-900/95 border-b border-white/10">
        <div className="container-page flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo-mark.jpeg"
              alt="Монтажгранд"
              width={44}
              height={44}
              className="rounded-sm"
              priority
            />
            <span className="heading-font leading-tight">
              <span className="block text-base font-semibold tracking-wide text-white">
                {t.company.shortName.toUpperCase()}
              </span>
              <span className="block text-[11px] tracking-[0.2em] text-gold-300">
                {t.company.name.toUpperCase()}
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {t.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`heading-font px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                    active
                      ? "text-gold-400"
                      : "text-white/85 hover:text-gold-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="md:hidden">
              <LangSwitch lang={lang} setLang={setLang} compact />
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-white"
              aria-label="Menu"
            >
              <span
                className={`h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-white/10 bg-navy-900">
            <div className="container-page flex flex-col py-2">
              {t.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="heading-font py-3 text-sm font-semibold uppercase tracking-wide text-white/90 border-b border-white/5 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-1 py-3 text-sm text-white/70">
                {shared.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function LangSwitch({
  lang,
  setLang,
  compact = false,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center overflow-hidden rounded border border-white/20 ${compact ? "text-[11px]" : "text-[11px]"}`}
    >
      {(["ru", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`heading-font px-2 py-1 font-semibold uppercase tracking-wide transition-colors ${
            lang === code
              ? "bg-gold-500 text-navy-950"
              : "text-white/70 hover:text-gold-300"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
