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
          <Button>
            <Link to={`/store/${id}/transfer-requests/create`}>
              Create Transfer Request
            </Link>
          </Button>
        </div>
      )}
      <Outlet />
    </div>
  );
}
