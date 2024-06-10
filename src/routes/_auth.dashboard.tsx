import DashboardPage from "@/components/pages/DashboardPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/dashboard")({
  component: DashboardPage,
});
