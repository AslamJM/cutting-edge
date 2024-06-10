import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginForm } from "@/components/auth/LoginForm";
import AuthLayout from "@/components/layouts/AuthLayout";
import { z } from "zod";

const fallback = "/dashboard" as const;

const searchSchema = z.object({
  redirect: z.string().optional().catch(""),
});

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context, search }) => {
    if (context.auth.accessToken) {
      return redirect({
        to: search.redirect || fallback,
      });
    }
  },
  component: LoginPage,
  validateSearch: searchSchema,
});

function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
