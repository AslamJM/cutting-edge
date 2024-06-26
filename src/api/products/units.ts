import instance from "../instance";
import { Unit } from "../types/category";

export async function getAllUnits() {
    try {
        const res = await instance.get<{
            data: Unit[]
        }>("/units")
        return res.data
    } catch (error) {
        return {
            data: []
        }
    }
}

export async function createUnit(input: Partial<Unit>) {
    try {
        const res = await instance.post("/units", input)
        return res.data
    } catch (error) {
        return error
    }
}