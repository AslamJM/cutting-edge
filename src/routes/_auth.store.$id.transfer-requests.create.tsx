import CreateTRform from "@/components/transfer-requests/CreateTRform";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_auth/store/$id/transfer-requests/create"
)({
  component: CreateTransferRequestPage,
});

function CreateTransferRequestPage() {
  return (
    <div>
      <CreateTRform storeId={+Route.useParams().id} />
    </div>
  );
}
