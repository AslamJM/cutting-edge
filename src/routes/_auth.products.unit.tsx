import CreateUnitForm from "@/components/products/units/CreateUnitForm";
import UnitList from "@/components/products/units/UnitList";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/unit")({
  component: UnitsPage,
});

function UnitsPage() {
  return (
    <div>
      <CreateUnitForm />
      <Separator className="my-2" />
      <UnitList />
    </div>
  );
}
