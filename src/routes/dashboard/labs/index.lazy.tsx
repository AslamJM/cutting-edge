import { Dashboard } from "@/components/layouts/DashBoardLayout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dashboard/labs/")({
  component: () => (
    <Dashboard>
      <div>Hello /dashboard/labs/!</div>
    </Dashboard>
  ),
});
