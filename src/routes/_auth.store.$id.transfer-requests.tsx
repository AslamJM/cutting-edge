import StoreTRdataTable from "@/components/tables/stores/StoreTRdataTable";
import { Button } from "@/components/ui/button";
import { trTableQO } from "@/query/stores";
import { useQuery } from "@tanstack/react-query";
import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/store/$id/transfer-requests")({
  component: StoreTransferRequestPage,
});

function StoreTransferRequestPage() {
  const { id } = Route.useParams();

  const location = useLocation();
  const { data: tableData } = useQuery(trTableQO(id));

  return (
    <div>
      {!location.pathname.endsWith("create") && (
        <div className="mb-2">
          <Link to={`/store/${id}/transfer-requests/create`}>
            <Button variant="outline">Create Transfer Request</Button>
          </Link>
        </div>
      )}
      {location.pathname.endsWith("transfer-requests") ? (
        <>
          {tableData && tableData.data && (
            <StoreTRdataTable data={tableData.data} />
          )}
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
