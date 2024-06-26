import instance from "../instance";
import { Category } from "../types/category";

export async function getAllGategories() {
    try {
        const res = await instance.get<{
            data: Category[]
        }>("/categories")
        return res.data
    } catch (error) {
        return {
            data: []
        }
    }
}

export async function createCategory(input: Partial<Category>) {
    try {
        const res = await instance.post("/categories", input)
        return res.data
    } catch (error) {
        return error
    }
}