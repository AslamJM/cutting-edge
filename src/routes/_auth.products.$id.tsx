import { getSingleProduct } from "@/api/products/products";
import ProductDetails from "@/components/products/single/ProductDetails";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/$id")({
  component: SingleProductPage,
});

function SingleProductPage() {
  const { id } = Route.useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["single_product", id],
    queryFn: () => getSingleProduct(id),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-32">Loading....</div>
    );
  }

  if (data && data.data) {
    return (
      <div>
        <ProductDetails product={data.data} />
      </div>
    );
  }
}
