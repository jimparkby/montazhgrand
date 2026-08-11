import type { Metadata } from "next";
import ServicesView from "@/components/views/ServicesView";

export const metadata: Metadata = {
  title: "Услуги — ООО «Монтажгранд»",
};

export default function ServicesPage() {
  return <ServicesView />;
}
