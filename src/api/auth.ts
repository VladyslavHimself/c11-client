import axios, {AxiosResponse} from "axios";

const api = axios.create({ baseURL: process.env.BACKEND_URL });

export type LoginBody = {
    email: string,
    password: string,
}

export type RegisterBody = {
    name: string,
    surname: string,
    email: string,
    password: string,
}

export type JWTResponse = {
    accessToken: string;
    refreshToken: string;
}

export const AuthAPI = {
    async loginUser(loginBody: LoginBody) {
        return api.post('/api/v1/auth/sign-in', loginBody);
    },

    async registerUser(credentials: RegisterBody ) {
        return api.post('/api/v1/auth/sign-up', credentials);
    },

    async loginUserViaGoogle(accessToken: string): Promise<AxiosResponse<JWTResponse>> {
        return api.post('/api/v1/auth/sign-in/google', { token: accessToken });
    }
}
