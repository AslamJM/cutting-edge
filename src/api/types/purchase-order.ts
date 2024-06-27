import { Product } from "./product"
import { Supplier } from "./supplier"

export type PurchaseOrderStatus = "PENDING" | "RECIEVED" | "CANCELLED"

export type CreatePOinput = {
    order_date: string,
    order_status: PurchaseOrderStatus
    supplier_id: number
    purchase_order_details: {
        create: Array<{
            product_id: number
            quantity: number
        }>
    }
}

export type PurchaseOrderTable = {
    id: number;
    order_date: Date;
    order_status: PurchaseOrderStatus;
    supplier_id: number;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    supplier: Supplier
}

export type PurchaseOrder = {
    id: number;
    order_date: Date;
    order_status: PurchaseOrderStatus;
    supplier_id: number;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    supplier: Supplier
    purchase_order_details: Array<{
        id: number
        product: Product
        quantity: number
    }>
}

export type GRNdetailInput = {
    product_id: number
    store_id: number
    batch_number: string
    quantity: number
    sample_quantity: number
    buying_price: number
    selling_price: number
    expiry_date: string
}

export type GRNcreateInput = {
    recieved_date: string;
    purchase_order_id: number;
    details: GRNdetailInput[]
}