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