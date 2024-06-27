import CreateStoreForm from "@/components/stores/CreateStoreForm";
import StoreList from "@/components/stores/StoreList";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/stores/")({
  component: StoresPage,
});

function StoresPage() {
  return (
    <div>
      <CreateStoreForm />
      <Separator className="my-2" />
      <StoreList />
    </div>
  );
}
