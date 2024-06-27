import CreateGRNform from "@/components/purchase-orders/grn/CreateGRNform";
import { singlePurchaseOrderQO } from "@/query/purchase-orders";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/purchase-orders/$id/grn")({
  component: CreateGRNPage,
});

function CreateGRNPage() {
  const params = Route.useParams();
  const { data, isLoading } = useQuery(singlePurchaseOrderQO(+params.id));

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (data && data.data) {
    return (
      <div>
        <CreateGRNform po={data.data} />
      </div>
    );
  }
}
