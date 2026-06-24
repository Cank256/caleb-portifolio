import { createFileRoute, redirect } from "@tanstack/react-router";

// Redirect /portfolio to / since the portfolio is now the root page
export const Route = createFileRoute("/portfolio")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
