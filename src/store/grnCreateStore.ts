import { GRNdetailInput } from "@/api/types/purchase-order";
import { create } from "zustand";

interface State {
    products: GRNdetailInput[]
}

type Action = {
    add: (grn: GRNdetailInput) => void,
    clear: () => void
}

export const useGRNcreateStore = create<State & Action>((set) => ({
    products: [],
    add: (pr) => set(({ products }) => ({ products: [...products, pr] })),
    clear: () => set(() => ({ products: [] }))
}))