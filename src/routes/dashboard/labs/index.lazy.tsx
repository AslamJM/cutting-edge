import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dashboard/labs/")({
  component: () => <div>Hello /dashboard/labs/!</div>,
});
