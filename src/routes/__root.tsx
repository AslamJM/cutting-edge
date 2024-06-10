import { useAuthContext } from "@/store/AuthContext";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface AppRouterContext {
  auth: ReturnType<typeof useAuthContext>;
}

export const Route = createRootRouteWithContext<AppRouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
