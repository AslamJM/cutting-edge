import { getPurchaseOrders, getSinglePurchaseOrder } from "@/api/purchase-orders";
import { queryOptions } from "@tanstack/react-query";

export const purchaseOrderQO = queryOptions({
    queryKey: ["purchase_orders"],
    queryFn: getPurchaseOrders
})

export const singlePurchaseOrderQO = (id: number) => queryOptions({
    queryKey: ['single_po', id],
    queryFn: () => getSinglePurchaseOrder(id)
})