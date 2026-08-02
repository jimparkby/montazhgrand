import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;

const messages = {
  ru: {
    required: "Заполните обязательные поля: имя, фамилия, e-mail",
    tooLarge: "Файл слишком большой (максимум 5 МБ)",
    sendFailed: "Не удалось отправить письмо. Попробуйте позже.",
    subjectPrefix: "Заявка с сайта",
    fromName: "Сайт Монтажгранд",
  },
  en: {
    required: "Please fill in the required fields: name, surname, e-mail",
    tooLarge: "The file is too large (max 5 MB)",
    sendFailed: "Failed to send the message. Please try again later.",
    subjectPrefix: "Website request",
    fromName: "Montazhgrand Website",
  },
} as const;

export async function POST(request: Request) {
  const formData = await request.formData();

  const lang = formData.get("lang") === "en" ? "en" : "ru";
  const m = messages[lang];

  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const attachment = formData.get("attachment");

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: m.required }, { status: 400 });
  }

  const attachments: { filename: string; content: Buffer }[] = [];
  if (attachment instanceof File && attachment.size > 0) {
    if (attachment.size > MAX_ATTACHMENT_BYTES) {
      return NextResponse.json({ error: m.tooLarge }, { status: 400 });
    }
    const buffer = Buffer.from(await attachment.arrayBuffer());
    attachments.push({ filename: attachment.name, content: buffer });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } =
    process.env;

  const isSmtpConfigured =
    SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && CONTACT_TO_EMAIL;

  if (!isSmtpConfigured) {
    console.log("[contact] SMTP is not configured, request logged locally:", {
      firstName,
      lastName,
      email,
      subject,
      message,
      attachments: attachments.map((a) => a.filename),
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"${m.fromName}" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: subject ? `${m.subjectPrefix}: ${subject}` : m.subjectPrefix,
      text: `${firstName} ${lastName}\nE-mail: ${email}\n\n${message}`,
      attachments,
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return NextResponse.json({ error: m.sendFailed }, { status: 502 });
  }
}
