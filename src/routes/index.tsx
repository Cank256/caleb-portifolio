import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

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
  component: Index,
});

function Index() {
  // The portfolio is authored as a single self-contained HTML file
  // (HTML + CSS + JS + GSAP) served from /caleb-portfolio.html.
  useEffect(() => {
    window.location.replace("/portfolio");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0A0A0F",
        color: "#00E5A0",
        fontFamily: "monospace",
      }}
    >
      Loading…
    </div>
  );
}
