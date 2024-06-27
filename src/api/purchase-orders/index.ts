import instance from "../instance";
import { CreatePOinput, PurchaseOrder, PurchaseOrderTable } from "../types/purchase-order";

export async function createPurchaseOrder(input: CreatePOinput) {
    try {
        const res = await instance.post("/purchase-orders", input)
        return res.data
    } catch (error) {
        return error
    }
}

export async function getPurchaseOrders() {
    try {
        const res = await instance.get<{
            data: PurchaseOrderTable[]
        }>("/purchase-orders")
        return res.data
    } catch (error) {
        return {
            data: []
        }
    }
}

export async function getSinglePurchaseOrder(id: number) {
    const res = await instance.get<{
        data: PurchaseOrder
    }>(`/purchase-orders/${id}`)
    return res.data
}