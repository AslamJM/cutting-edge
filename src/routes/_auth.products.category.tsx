import CategoryList from "@/components/products/category/CategoryList";
import CreateCategoryForm from "@/components/products/category/CreateCategoryForm";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/category")({
  component: CategoryPage,
});

function CategoryPage() {
  return (
    <div>
      <CreateCategoryForm />
      <Separator className="my-2" />
      <CategoryList />
    </div>
  );
}
