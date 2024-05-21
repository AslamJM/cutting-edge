import { Dashboard } from "@/components/layouts/DashBoardLayout";
import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dashboard/")({
  component: () => (
    <Dashboard>
      <Outlet />
    </Dashboard>
  ),
});
