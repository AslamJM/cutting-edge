import instance from "../instance";
import { Brand } from "../types/category";

export async function getAllBrands() {
    try {
        const res = await instance.get<{
            data: Brand[]
        }>("/brands")
        return res.data
    } catch (error) {
        return {
            data: []
        }
    }
}

export async function createBrand(input: Partial<Brand>) {
    try {
        const res = await instance.post("/brands", input)
        return res.data
    } catch (error) {
        return error
    }
}