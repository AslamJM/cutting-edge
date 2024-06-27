import PODetailsSingle from "@/components/purchase-orders/PODetailsSingle";
import { Button } from "@/components/ui/button";
import { singlePurchaseOrderQO } from "@/query/purchase-orders";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/purchase-orders/$id")({
  component: SinglePOpage,
});

function SinglePOpage() {
  const { id } = Route.useParams();
  const { data, isLoading } = useQuery(singlePurchaseOrderQO(Number(id)));

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (data) {
    const po = data.data;
    return (
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2">
          <PODetailsSingle po={po} />
        </div>
        <div className="w-1/2 p-4">
          <h3>Good Recieve Note</h3>
          <Button>
            <Link to={`/purchase-orders/${po.id}/grn/`}>Create GRN</Link>
          </Button>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}
