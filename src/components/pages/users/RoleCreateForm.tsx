import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PermissionSelection from "@/components/user/PermissionSelection";
import { useRoleCreateStore } from "@/store/roleCreateStore";
import { useState } from "react";

const mainRoles = ["Admin", "Lab", "Pharmacy", "Store"];

const RoleCreateForm = () => {
  const [selected, setSelected] = useState("");

  const { setRole } = useRoleCreateStore();

  const onRoleSelect = (role: string) => {
    setSelected(role);
    setRole({
      name: role,
      description: "selected by user",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a role</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {mainRoles.map((role) => (
            <Button
              key={role}
              variant="ghost"
              onClick={() => onRoleSelect(role)}
              className={`${selected === role ? "ring-1 bg-slate-200" : ""}`}
            >
              {role}
            </Button>
          ))}
        </div>
        <PermissionSelection resource="All" />
        <PermissionSelection resource="Store" />
        <PermissionSelection resource="Pharmacy" />
        <PermissionSelection resource="Labs" />
      </CardContent>
    </Card>
  );
};

export default RoleCreateForm;
