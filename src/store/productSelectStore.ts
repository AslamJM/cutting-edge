import { create } from "zustand"

export type SelectProduct = {
    product_id: number
    quantity: number
}

interface ProductSelectState {
    products: SelectProduct[]
}

type Action = {
    addNew: (pr: SelectProduct) => void,
    remove: (prId: number) => void,
    update: (pr: SelectProduct, index: number) => void,
    empty: () => void
}

export const useProductSelectStore = create<ProductSelectState & Action>(set => ({
    products: [],
    addNew: (p) => set(({ products }) => {
        products.push(p)
        return { products }
    }),
    remove: (id) => set(({ products }) => ({
        products: products.filter(p => p.product_id !== id)
    })),
    update: (pr, index) => set(({ products }) => {
        products[index] = pr
        return { products }
    }),
    empty: () => set(() => ({ products: [] }))
}))