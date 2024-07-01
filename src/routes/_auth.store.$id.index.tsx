import StoreDetailsComponent from "@/components/stores/StoreDetailsComponent";
import { Button } from "@/components/ui/button";
import { storeDetailsQO } from "@/query/stores";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_auth/store/$id/")({
  component: StoreIndex,
});

function StoreIndex() {
  const { id } = Route.useParams();
  const { data, isLoading } = useQuery(storeDetailsQO(id));
  return (
    <div className="space-y-4">
      <Button>
        <Link to={`/store/${id}/transfer-requests`}>Transfer Requests</Link>
        <ArrowRight className="ml-2" />
      </Button>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <>{data && data.data && <StoreDetailsComponent data={data.data} />}</>
      )}
    </div>
  );
}
