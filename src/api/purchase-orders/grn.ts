import instance from "../instance";
import { GRNcreateInput } from "../types/purchase-order";

export async function createGRN(input: GRNcreateInput) {
    try {
        const res = await instance.post("/good-recieve-notes", input)
        return res.data
    } catch (error) {
        console.log(error);
        return error
    }
}