import axios, {AxiosResponse} from "axios";

const BASE_URL = 'http://localhost:8000';

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
        return axios.post(`${BASE_URL}/api/auth/sign-in`, loginBody);
    },

    async registerUser(credentials: RegisterBody ) {
        return axios.post(`${BASE_URL}/api/auth/sign-up`, credentials);
    },

    async loginUserViaGoogle(accessToken: string): Promise<AxiosResponse<JWTResponse>> {
        return axios.post(`${BASE_URL}/api/auth/sign-in/by/google`, { token: accessToken });
    }
}