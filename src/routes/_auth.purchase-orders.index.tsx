import PurchaseOrderList from "@/components/purchase-orders/PurchaseOrderList";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/purchase-orders/")({
  component: PurchaseOrdersPage,
});

function PurchaseOrdersPage() {
  return (
    <div>
      <Button>
        <Link to="/purchase-orders/create">Create Purchase Order</Link>
      </Button>
      <div>
        <PurchaseOrderList />
      </div>
    </div>
  );
}
