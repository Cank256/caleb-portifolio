import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "../components/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caleb Nkunze — Web Developer · Designer · Digital Communicator" },
      {
        name: "description",
        content:
          "Caleb Nkunze — Kampala-based web developer, graphic designer, digital communications specialist and IT expert. I build things that look good and work perfectly.",
      },
      { property: "og:title", content: "Caleb Nkunze — Web Developer & Designer" },
      {
        property: "og:description",
        content:
          "I build things that look good and work perfectly. Kampala-based web developer, designer and IT specialist.",
      },
    ],
  }),
  component: function Index() {
    return <PortfolioPage />;
  },
});
