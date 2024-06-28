import instance from "../instance";
import { StoreTRresponse, TransferRequstInput } from "../types/tr";

export async function createTR(input: TransferRequstInput) {
    try {
        const res = await instance.post("/transfer-requests", input)
        return res.data
    } catch (error) {
        return error
    }
}

export async function getTransferRequestForStore(id: number | string) {
    try {
        const res = await instance.get<{
            data: StoreTRresponse
        }>(`/transfer-requests/store/${id}`)
        return res.data
    } catch (error) {
        return {
            data: null
        }
    }
}