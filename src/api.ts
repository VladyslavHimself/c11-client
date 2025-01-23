import {Axios} from "axios";
import {getServerSession} from "next-auth";
import {authConfig} from "@/config/authConfig";

const api = new Axios({
    baseURL: "http://localhost:8000",
})

api.interceptors.request.use(async (config) => {
    const data = await getServerSession(authConfig);
    if (!data) return config;
    config.headers.Authorization = `Bearer ${data?.token}`;
    return config;
});

export { api };