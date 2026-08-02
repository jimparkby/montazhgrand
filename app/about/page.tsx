import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "О компании — ООО «Монтажгранд»",
};

export default function AboutPage() {
  return <AboutView />;
}
