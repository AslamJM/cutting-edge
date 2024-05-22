import { User } from "./types";
import { create } from 'zustand'

interface AppState {
    user: User | null
    authToken: string | null
}

type Action = {
    setUser: (user: AppState["user"]) => void
    setAuthToken: (token: AppState["authToken"]) => void
}

export const useGlobalStore = create<AppState & Action>((set) => ({
    user: null,
    authToken: localStorage.getItem("access_token"),
    setUser: (user) => set(() => ({ user })),
    setAuthToken: (token) => set(() => ({ authToken: token }))
}))