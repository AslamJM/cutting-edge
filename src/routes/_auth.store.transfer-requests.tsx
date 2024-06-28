import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/store/transfer-requests")({
  component: () => <div>Hello /_auth/store/transfer-requests!</div>,
});
