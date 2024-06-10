import { User } from "@/api/types/user"
import instance from "../instance"

export type LoginInput = {
    username: string
    password: string
}
export async function login(input: LoginInput) {
    try {
        const res = await instance.post<{ access_token: string, user: User }>("/auth/login", input)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function refresh() {
    try {
        const res = await instance.post<{ access_token: string, user: User }>("/auth/refresh")
        return res.data
    } catch (error) {
        console.log(error);
    }
}



export async function logout() {
    const res = await instance.post<{ success: boolean }>("/auth/logout")
    return res.data
}