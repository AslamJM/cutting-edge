import { FC, useState } from "react";
import { Separator } from "../ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useRoleCreateStore } from "@/store/roleCreateStore";

interface PermissionSelectionProps {
  resource: string;
}

const permissions = ["read", "create", "update", "delete"] as const;

const PermissionSelection: FC<PermissionSelectionProps> = ({ resource }) => {
  const [selected, setSelected] = useState(false);

  const {
    addRolePermission,
    removeRolePermission,
    updateCrud,
    rolePermissions,
  } = useRoleCreateStore();

  const onSelect = () => {
    if (selected) {
      removeRolePermission(resource);
    } else {
      addRolePermission({
        resource,
        can_create: false,
        can_view: false,
        can_delete: false,
        can_edit: false,
      });
    }

    setSelected(!selected);
  };

  console.log(rolePermissions);

  const onChangeCrud = (
    action: "create" | "read" | "update" | "delete",
    checked: boolean
  ) => {
    updateCrud(action, resource, checked);
  };

  return (
    <div className="my-4 space-y-1">
      <div className="flex items-center space-x-2">
        <Checkbox id={resource} onCheckedChange={onSelect} />
        <h3>{resource}</h3>
      </div>
      <Separator />
      <div className="grid grid-cols-4 gap-2 my-2">
        {permissions.map((p) => (
          <div className="flex items-center space-x-2" key={p}>
            <Checkbox
              id={p}
              disabled={!selected}
              onCheckedChange={(e) => {
                onChangeCrud(p, Boolean(e));
              }}
            />
            <label
              htmlFor={p}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {p}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermissionSelection;
