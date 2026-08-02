import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Монтажгранд — монтаж технологического оборудования и трубопроводов",
  description:
    "ООО «Монтажгранд» — монтаж технологического оборудования, трубопроводов и металлоконструкций на нефтехимических и промышленных предприятиях Беларуси, России и за рубежом.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
