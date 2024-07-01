import { getAllBrands } from "@/api/products/brands";
import { getAllGategories } from "@/api/products/category";
import { getAllProducts, getBatches } from "@/api/products/products";
import { getAllUnits } from "@/api/products/units";
import { queryOptions } from "@tanstack/react-query";

export const categoryQO = queryOptions({
    queryKey: ["categories"],
    queryFn: getAllGategories
})

export const unitQO = queryOptions({
    queryKey: ["units"],
    queryFn: getAllUnits
})

export const brandQO = queryOptions({
    queryKey: ["brands"],
    queryFn: getAllBrands
})

export const productsQO = queryOptions({
    queryKey: ["products"],
    queryFn: getAllProducts,

})

export const batchesQO = (id: number) => queryOptions({
    queryKey: ["batches", id],
    queryFn: () => getBatches(id)
})

