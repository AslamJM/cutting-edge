import { Product } from "./product";
import { GRNdetailInput } from "./purchase-order";

export type Store = {
    id: number
    name: string;
    location: string;
    contact_info: string;
}

export type StoreWithProduct = {
    id: 1,
    name: string,
    location: string,
    contact_info: string,
    products: Product[]
}

export type ProductGRN = {
    product: Product,
    grns: GRNdetailInput[]
}