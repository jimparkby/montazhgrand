"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");
  const { lang, t } = useLanguage();
  const f = t.ui.form;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(formRef.current);
    formData.set("lang", lang);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? f.errorDefault);
      }

      setStatus("success");
      formRef.current.reset();
      setFileName("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : f.errorDefault);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-gold-400/40 bg-white/5 p-8 text-center">
        <p className="heading-font text-lg font-semibold text-gold-300">
          {f.successTitle}
        </p>
        <p className="mt-2 text-sm text-white/70">{f.successText}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-gold-400 underline underline-offset-4 hover:text-gold-300"
        >
          {f.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          name="firstName"
          placeholder={f.firstName}
          className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/45 outline-none focus:border-gold-400"
        />
        <input
          required
          name="lastName"
          placeholder={f.lastName}
          className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/45 outline-none focus:border-gold-400"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          type="email"
          name="email"
          placeholder={f.email}
          className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/45 outline-none focus:border-gold-400"
        />
        <input
          name="subject"
          placeholder={f.subject}
          className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/45 outline-none focus:border-gold-400"
        />
      </div>
      <textarea
        name="message"
        placeholder={f.message}
        rows={6}
        className="w-full resize-none rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/45 outline-none focus:border-gold-400"
      />

      <div className="flex flex-wrap items-center gap-4">
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-white/25 px-4 py-2.5 text-sm text-white/85 hover:border-gold-400 hover:text-gold-300">
          <span aria-hidden>📎</span>
          {f.attach}
          <input
            type="file"
            name="attachment"
            className="hidden"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </label>
        {fileName && <span className="text-xs text-white/60">{fileName}</span>}
        <span className="text-xs text-white/40">{f.attachHint}</span>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="heading-font rounded-md bg-gold-500 px-8 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? f.submitting : f.submit}
      </button>
    </form>
  );
}
