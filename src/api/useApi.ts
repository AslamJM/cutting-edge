import { useAuthContext } from "@/store/AuthContext"
import axios from "axios"

const BASE_URL = "http://localhost:3000"

const useApi = () => {
    const api = axios.create({
        baseURL: BASE_URL,
        withCredentials: true
    })

    const { accessToken, setAccessToken } = useAuthContext()

    api.interceptors.request.use((config) => {
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
        err => Promise.reject(err))

    api.interceptors.response.use(res => res, async (err) => {
        const originalRequest = err.config
        if (err.response.status === 401 && !originalRequest._retry) {
            try {
                originalRequest._retry = true
                const { data } = await api.post("/auth/refresh")
                if (data.access_token) {
                    originalRequest.headers.Authorization = `Bearer ${data.access_token}`
                    setAccessToken(data.access_token)
                    return api(originalRequest)
                }
                return Promise.reject("Unauthorized")
            } catch (error) {
                return Promise.reject(error)
            }
        } else {
            return Promise.reject(err)
        }
    })

    return api
}

export default useApi