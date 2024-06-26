export type CreateSupplierInput = {
    name: string;
    contact_name: string;
    phone: string;
    email: string;
    address: string;
}

export type Supplier = {
    id: number,
    name: string;
    contact_name: string;
    phone: string;
    email: string;
    address: string;
}