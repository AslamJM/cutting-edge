import { createFileRoute } from "@tanstack/react-router";
import UsersListPage from "@/components/pages/users/UsersListPage";

export const Route = createFileRoute("/_auth/users/")({
  component: UsersListPage,
});
