import {api} from "@/api";

export type UserResponse = {
    id: string,
    email: string,
    name: string,
    surname: string,
    pictureUrl: string,
    authProvider: 'INTERNAL' | 'GOOGLE',
    authProviderId: string,
    createdAt: string,
    updatedAt: string,
}

export const UsersAPI = {
    getUser(): Promise<UserResponse> {
        return api.get("/api/v1/users/profile").then(({ data }: { data: UserResponse}) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    }
}