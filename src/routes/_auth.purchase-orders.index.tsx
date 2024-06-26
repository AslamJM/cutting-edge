import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/purchase-orders/")({
  component: () => <div>Hello /_auth/purchase-orders/!</div>,
});
