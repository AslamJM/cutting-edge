import instance from "../instance"
import { CreateSupplierInput, Supplier } from "../types/supplier"

export async function getAllSuppliers() {
    try {
        const res = await instance.get<{
            data: Supplier[]
        }>("/suppliers")
        return res.data
    } catch (error) {
        return {
            data: []
        }
    }
}

export async function createSupplier(input: CreateSupplierInput) {
    try {
        const res = await instance.post("/suppliers", input)
        return res.data
    } catch (error) {
        return error
    }
}