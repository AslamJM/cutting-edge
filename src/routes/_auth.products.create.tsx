import CreateProductForm from "@/components/products/CreateProductForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/create")({
  component: CreateProductPage,
});

function CreateProductPage() {
  return (
    <div>
      <CreateProductForm />
    </div>
  );
}
