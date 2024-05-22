import { User } from "@/store/types"

export type LoginInput = {
    username: string
    password: string
}
export async function login(input: LoginInput) {
    if (input.username === "username" && input.password === "password") {
        return {
            token: "access_token",
        }
    }
    return {
        token: null
    }
}

export async function getMe() {
    const token = localStorage.getItem('access_token')

    const sampleUser: User = {
        first_name: "crook",
        last_name: "pimppu",
        profile: "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg",
        role: ["ADMIN"]
    }

    if (token === "access_token") {
        return sampleUser
    } else {
        return null
    }
}