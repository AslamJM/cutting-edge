import StoreDetail from "@/components/stores/StoreDetail";
import { storeWithProductsQO } from "@/query/stores";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/store/$id")({
  component: StorePage,
});

function StorePage() {
  const { id } = Route.useParams();
  const { data, isLoading } = useQuery(storeWithProductsQO(id));

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (data && data.data) {
    const store = data.data;
    return (
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="w-full md:w-1/3">
          <StoreDetail store={store} />
        </div>
        <div className="w-full md:w-2/3">
          <Outlet />
        </div>
      </div>
    );
  }
}
