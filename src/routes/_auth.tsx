import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { Dashboard } from "@/components/layouts/DashBoardLayout";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.accessToken) {
      return redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => (
    <Dashboard>
      <Outlet />
    </Dashboard>
  ),
});
