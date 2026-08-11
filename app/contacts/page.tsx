import type { Metadata } from "next";
import ContactsView from "@/components/views/ContactsView";

export const metadata: Metadata = {
  title: "Контакты — ООО «Монтажгранд»",
};

export default function ContactsPage() {
  return <ContactsView />;
}
