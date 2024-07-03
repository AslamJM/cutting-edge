import ProductList from "@/components/products/ProductList";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Cuboid, Ruler, Triangle } from "lucide-react";

export const Route = createFileRoute("/_auth/products/")({
  component: ProductsMain,
});

function ProductsMain() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Link to="/products/category">
          <Button variant="outline">
            <Cuboid className="mr-2" />
            Categories
          </Button>
        </Link>

        <Link to="/products/unit">
          <Button variant="outline">
            <Ruler className="mr-2" /> Units
          </Button>
        </Link>

        <Link to="/products/brands">
          <Button variant="outline">
            <Triangle className="mr-2" />
            Brands
          </Button>
        </Link>
      </div>
      <div className="my-6">
        <Link to="/products/create">
          <Button>Create Product</Button>
        </Link>
      </div>
      <ProductList />
    </div>
  );
}
