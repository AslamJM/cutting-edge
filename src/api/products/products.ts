import instance from "../instance";
import { CreateProductInput, Product } from "../types/product";

export async function createProduct(input: CreateProductInput) {
    try {
        const res = await instance.post("/products", input)
        console.log(res);

        return res.data
    } catch (error) {
        console.log(error);

        return error
    }
}

export async function getAllProducts() {
    try {
        const res = await instance.get<{
            data: Product[]
        }>("/products")
        return res.data
    } catch (error) {
        return {
            data: []
        }
    }
}

export async function getSingleProduct(id: string) {
    try {
        const res = await instance.get<{
            data: Product
        }>(`products/${id}`)
        return res.data
    } catch (error) {
        return {
            data: null
        }
    }
}

export async function getBatches(id: number) {
    try {
        const res = await instance.get<{
            data: Array<{
                id: number,
                batch_number: string
            }>
        }>(`/products/${id}/batch`)
        return res.data
    } catch (error) {
        return { data: [] }
    }
}