import { Product } from "@/components/tables/items/columns";

export async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json() as Product[]
    return data
}