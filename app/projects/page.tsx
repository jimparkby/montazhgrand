import type { Metadata } from "next";
import ProjectsView from "@/components/views/ProjectsView";

export const metadata: Metadata = {
  title: "Реализованные проекты — ООО «Монтажгранд»",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
