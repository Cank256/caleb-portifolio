import { createFileRoute } from "@tanstack/react-router";
// The portfolio is a single self-contained HTML file (HTML + CSS + JS + GSAP).
// We import its raw contents and serve it directly as an HTML document.
import portfolioHtml from "../portfolio.html?raw";

export const Route = createFileRoute("/portfolio")({
  server: {
    handlers: {
      GET: () =>
        new Response(portfolioHtml, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});