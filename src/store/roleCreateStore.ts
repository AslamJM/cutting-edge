import { CreateRole, CreateRolePermisson } from "@/api/types/user";
import { create } from "zustand";

interface RoleCreateState {
    rolePermissions: CreateRolePermisson[]
    role: Omit<CreateRole, "rolePermissions"> | null
}

type Action = {
    setRole: (role: RoleCreateState["role"]) => void
    addRolePermission: (rp: CreateRolePermisson) => void
    removeRolePermission: (resource: string) => void
    updateCrud: (val: "create" | "read" | "update" | "delete", resource: string, checked: boolean) => void
}

export const useRoleCreateStore = create<RoleCreateState & Action>((set) => ({
    role: null,
    rolePermissions: [],
    setRole: (role) => set(() => ({ role })),

    addRolePermission: (rp) => set(({ rolePermissions }) => {
        rolePermissions.push(rp)
        return { rolePermissions }
    }),

    removeRolePermission: (r) => set(({ rolePermissions }) => ({ rolePermissions: rolePermissions.filter(rp => rp.resource !== r) })),

    updateCrud: (val, resource, checked) => set(({ rolePermissions }) => {
        const rp = rolePermissions.findIndex(r => r.resource === resource)
        if (rp === -1) return { rolePermissions }
        switch (val) {
            case "create":
                rolePermissions[rp].can_create = checked
                break
            case "update":
                rolePermissions[rp].can_edit = checked
                break
            case "delete":
                rolePermissions[rp].can_delete = checked
                break
            case "read":
                rolePermissions[rp].can_view = checked
        }
        return { rolePermissions }
    })
}))