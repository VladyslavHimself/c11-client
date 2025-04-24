import axios from "axios";
import {getServerSession} from "next-auth";
import {authConfig} from "@/config/authConfig";

// TODO: Make prefix with `api/v1`
const api = axios.create({
    baseURL: process.env.BACKEND_URL,
})

api.interceptors.request.use(async (config) => {
    const data = await getServerSession(authConfig);
    if (!data) return config;
    config.headers.Authorization = `Bearer ${data?.token}`;
    return config;
});

api.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
    }
)

export { api };
