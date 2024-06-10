import instance from "../instance";

export async function getUsers() {
    const res = await instance.get("/users")
    const data = res.data
    return data
}