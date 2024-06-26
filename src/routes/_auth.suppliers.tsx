import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/suppliers")({
  component: () => <Outlet />,
});
