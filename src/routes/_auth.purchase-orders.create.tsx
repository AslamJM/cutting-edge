import CreatePOform from "@/components/purchase-orders/CreatePOform";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/purchase-orders/create")({
  component: PurchaseOrderCreatePage,
});

function PurchaseOrderCreatePage() {
  return (
    <div>
      <CreatePOform />
    </div>
  );
}
