import { Product } from "./product"
import { GRNdetail } from "./purchase-order"
import { Store } from "./store"

export type TransferRequestStatus = "PENDING" | "SHIPPED" | "RECIEVED" | "CANCELLED"

export type TRdetails = {
    product_id: number
    requested_quantity: number
}

export type TransferRequstInput = {
    from_store_id: number
    to_store_id: number
    request_date: string
    transfer_status: TransferRequestStatus
    transfer_request_details: {
        create: Array<TRdetails>
    }
}

export type TransferGoodDetails = {
    id: number
    grn_detail_id: number
    returned_quantity: number
    accepted_quantity: number
    grn_detail: GRNdetail

}

export type TransferRequest = {
    id: number;
    from_store: Store;
    to_store: Store;
    request_date: string;
    transfer_status: TransferRequestStatus;
    transfer_request_details: {
        id: number
        product: Product
        requested_quantity: number
        good_details: TransferGoodDetails[]
    }[]
}

export type StoreTRresponse = {
    from: {
        id: number
        request_date: string
        transfer_status: TransferRequestStatus,
        to_store: Store
    }[],
    to: {

        id: number
        request_date: string
        transfer_status: TransferRequestStatus,
        from_store: Store

    }[]
}
export type ShipTRinput = {
    transfer_request_details_id: number
    grn_detail_id: number
    returned_quantity: number
    accepted_quantity: number
}