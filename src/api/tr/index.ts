import instance from "../instance";
import { ShipTRinput, StoreTRresponse, TransferRequest, TransferRequstInput } from "../types/tr";

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

export async function getSingleTr(trId: string | number) {
    try {
        const res = await instance.get<{
            data: TransferRequest
        }>(`/transfer-requests/${trId}`)
        return res.data
    } catch (error) {
        return { data: null }
    }
}
export async function shipTr(trId: number, input: ShipTRinput[]) {
    try {
        const res = await instance.post(`/transfer-requests/${trId}/ship`, {
            details: input
        })
        return res.data
    } catch (error) {
        return error
    }
}