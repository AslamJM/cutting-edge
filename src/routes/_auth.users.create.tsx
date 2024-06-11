import RoleCreateForm from "@/components/pages/users/RoleCreateForm";
import UserCreateForm from "@/components/pages/users/UserCreateForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/users/create")({
  component: UserCreatePage,
});

function UserCreatePage() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <UserCreateForm />
      <RoleCreateForm />
    </div>
  );
}
