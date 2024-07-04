import { getAllStores, getProductGrns, getStoreWithProducts, storeDetails, getStoreTransferRequests } from "@/api/stores";
import { getTransferRequestForStore, } from "@/api/tr";
import { queryOptions } from "@tanstack/react-query";

export const storeQO = queryOptions({
    queryKey: ["stores"],
    queryFn: getAllStores
})

export const storeWithProductsQO = (id: string) => queryOptions({
    queryKey: ["store_products", id],
    queryFn: () => getStoreWithProducts(id)
})

export const productGrnQO = (storeId: string, productId: string) => queryOptions({
    queryKey: ["store_products_grns", storeId, productId],
    queryFn: () => getProductGrns(storeId, productId)
})

export const storeDetailsQO = (id: string) => queryOptions({
    queryKey: ["store_details", id],
    queryFn: () => storeDetails(id)
})

export const storeTRQO = (id: string | number) => queryOptions({
    queryKey: ["store_trs", id],
    queryFn: () => getTransferRequestForStore(id)
})

export const trTableQO = (id: string | number) => queryOptions({
    queryKey: ["store_trs_table", id],
    queryFn: () => getStoreTransferRequests(id)
})