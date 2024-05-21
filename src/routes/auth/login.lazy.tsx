import { createLazyFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/auth/LoginForm";
import AuthLayout from "@/components/layouts/AuthLayout";

export const Route = createLazyFileRoute("/auth/login")({
  component: () => <LoginPage />,
});

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
