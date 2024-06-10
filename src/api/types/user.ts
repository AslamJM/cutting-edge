export type Role = {
    name: string
    rolePermissions: RolePermission[]
}

export type RolePermission = {
    id: number;
    resource: string;
    can_create: boolean;
    can_view: boolean;
    can_edit: boolean;
    can_delete: boolean;
}

export type User = {
    id: number;
    full_name: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    role_id: number;
    role: Role
}