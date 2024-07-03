import { Button } from "@/components/ui/button";
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

  return (
    <div>
      {!location.pathname.endsWith("create") && (
        <div>
          <Link to={`/store/${id}/transfer-requests/create`} className="mb-2">
            <Button variant="outline">Create Transfer Request</Button>
          </Link>
        </div>
      )}
      <Outlet />
    </div>
  );
}
