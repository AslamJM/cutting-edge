import { Dashboard } from "@/components/layouts/DashBoardLayout";
import DashboardPage from "@/components/pages/DashboardPage";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  beforeLoad: async ({ context, location }) => {
    if (!context.user) {
      throw redirect({
        to: "/auth/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => (
    <Dashboard>
      <DashboardPage />
    </Dashboard>
  ),
});
