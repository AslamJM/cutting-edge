import UsersListPage from "@/components/pages/users/UsersListPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/users")({
  component: UsersListPage,
});
