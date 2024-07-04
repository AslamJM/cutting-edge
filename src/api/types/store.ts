import { Product } from "./product";
import { GRNdetailInput } from "./purchase-order";
import { TransferRequestStatus } from "./tr";

export type Store = {
    id: number
    name: string;
    location: string;
    contact_info: string;
}

export type StoreWithProduct = {
    id: number,
    name: string,
    location: string,
    contact_info: string,
    products: Product[]
}

export type ProductGRN = {
    product: Product,
    grns: GRNdetailInput[]
}

export type TransferRequestTableItem = {
    id: number,
    request_date: string,
    store: string,
    status: TransferRequestStatus,
    products_count: number,
    updated_at: string
}

export type StoreTableTR = {
    from: TransferRequestTableItem[],
    to: TransferRequestTableItem[]
}