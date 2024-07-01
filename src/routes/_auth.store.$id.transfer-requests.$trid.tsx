import SingleTRWork from "@/components/transfer-requests/SingleTRWork";
import { singleTRQO } from "@/query/transfer-request";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_auth/store/$id/transfer-requests/$trid"
)({
  component: SingleTrPage,
});

function SingleTrPage() {
  const { trid } = Route.useParams();

  const { data, isLoading } = useQuery(singleTRQO(trid));

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (data && data.data) {
    const tr = data.data;

    return (
      <div className="space-y-4">
        <SingleTRWork tr={tr} />
      </div>
    );
  }
}
