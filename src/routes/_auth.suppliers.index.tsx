import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/suppliers/")({
  component: () => <div>Hello /_auth/suppliers/!</div>,
});
