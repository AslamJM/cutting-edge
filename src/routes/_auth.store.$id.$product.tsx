import ProductGRNDetails from "@/components/stores/ProductGRNDetails";
import { productGrnQO } from "@/query/stores";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/store/$id/$product")({
  component: StoreProductDetails,
});

function StoreProductDetails() {
  const { id, product } = Route.useParams();

  const { data, isLoading } = useQuery(productGrnQO(id, product));

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (data && data.data) {
    return <ProductGRNDetails data={data.data} />;
  }
}
