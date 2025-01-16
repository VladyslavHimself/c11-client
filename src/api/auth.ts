import axios from "axios";

const BASE_URL = 'http://localhost:8000';

export type LoginBody = {
    email: string,
    password: string,
}

export const AuthAPI = {
    loginUser(loginBody: LoginBody) {
        return axios.post(`${BASE_URL}/api/auth/sign-in`, loginBody);
    }
}