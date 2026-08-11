import type { Metadata } from "next";
import CareerView from "@/components/views/CareerView";

export const metadata: Metadata = {
  title: "Карьера — ООО «Монтажгранд»",
};

export default function CareerPage() {
  return <CareerView />;
}
