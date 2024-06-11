import instance from "../instance";
import { CreateUserInput, User } from "../types/user";

export async function getUsers() {
    try {
        const res = await instance.get<{
            data: User[],
            statusCode: number
        }>("/users")
        if (res.status === 200) {
            return res.data.data
        } else {
            throw new Error("bad request")
        }
    } catch (error) {
        return {
            message: "an error"
        }
    }


}

export async function createUser(input: CreateUserInput) {
    try {
        const res = await instance.post<User>("/users", input)
        if (res.status === 201) {
            return res.data
        }
        throw Error("An Error occurred")
    } catch (error) {
        return {
            error
        }
    }
}