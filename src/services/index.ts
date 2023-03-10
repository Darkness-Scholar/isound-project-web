import axios, {AxiosRequestConfig, AxiosResponse, AxiosInstance} from "axios";

const AXIOS_SERVICE = (url:string) => {
    const axiosInstance:AxiosInstance = axios.create({ baseURL: url })
    // @ts-ignore
    axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
        // @ts-ignore
        const user:any = window?.user
        if (user?.accesstoken) {
            // @ts-ignore
            request.headers['Authorization'] = `Bearer ${user?.accesstoken}`
        }
        return request
    })

    axiosInstance.interceptors.response.use(async (response: AxiosResponse) => {
        if (response.status == 401) {
            // Sign out here
            window.location.reload()
        }
        return response
    }, async (error) => {
        if (error.response) {
            if (error.response?.status === 401) {
                // Sign out here
                window.location.reload()
            }
            return {
                status: error.response?.status || 400,
                data: error.response?.data
            }
        }
        return Promise.reject(error)
    })
    return axiosInstance
}

const service = AXIOS_SERVICE("http://localhost:8888")

export const getCurrentUser = async () => await axios.get("http://localhost:8888/user-profile", { headers: {} })

export const addToFavoriteList = (favorite_list_id:string, audio_id:string) => {
    return service.put(`/favorite/${favorite_list_id}`, { audio_id })
}