import {api} from "@/api";


export const UsersAPI = {
    getUser() {
        return api.get("/api/users/profile").then(({ data }) => data);
    }
}