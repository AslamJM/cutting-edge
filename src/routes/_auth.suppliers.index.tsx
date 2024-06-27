import CreateSupplierForm from "@/components/suppliers/CreateSupplierForm";
import SupplierList from "@/components/suppliers/SupplierList";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/suppliers/")({
  component: SuppliersPage,
});

function SuppliersPage() {
  return (
    <div>
      <CreateSupplierForm />
      <Separator className="my-4" />
      <SupplierList />
    </div>
  );
}
