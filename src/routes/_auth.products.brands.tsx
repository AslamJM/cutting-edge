import BrandList from "@/components/products/brands/BrandList";
import CreateBrandForm from "@/components/products/brands/CreateBrandForm";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/brands")({
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <div>
      <CreateBrandForm />
      <Separator className="my-2" />
      <BrandList />
    </div>
  );
}
