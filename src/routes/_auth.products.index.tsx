import ProductList from "@/components/products/ProductList";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/")({
  component: ProductsMain,
});

function ProductsMain() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Button>
          <Link to="/products/category">Categories</Link>
        </Button>
        <Button>
          <Link to="/products/unit">Units</Link>
        </Button>
        <Button>
          <Link to="/products/brands">Brands</Link>
        </Button>
      </div>
      <div className="my-6">
        <Button>
          <Link to="/products/create">Create Product</Link>
        </Button>
      </div>
      <ProductList />
    </div>
  );
}
