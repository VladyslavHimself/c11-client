import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {AuthAPI} from "@/api/auth";
import {Account, AuthOptions, User} from "next-auth";
import {jwtDecode} from "jwt-decode";
import axios, {AxiosError} from "axios";
import {AdapterUser} from "next-auth/adapters";
import { JWT } from "next-auth/jwt";

export const authConfig: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Custom credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                const {status, data} = await AuthAPI.loginUser({
                    email: credentials!.email,
                    password: credentials!.password
                }).then(res => res);

                if (status === 201 && data) return data;
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

        })
    ],
    session: {strategy: "jwt"},
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({account, token, user}) {
            if (isUserLoggedFirstTime(account, user) && account?.provider === 'credentials') {
                token.id = user.accessToken;
                token.refresh = user.refreshToken

            }

            if (token?.id) {
                const decodedToken = jwtDecode(token.id as string);
                token.expires = decodedToken!.exp! * 1000;
                token.email = decodedToken.email
            }

            if (new Date() < token.expires!) return token;

            return refreshAccessToken(token);

        },
        async session({session, token}) {
            if (token) {
                session.token = token.id as string;
            }
            return session;
        },
    },
}


function isUserLoggedFirstTime(account: null | Account, user: User | AdapterUser) {
    return account && user;
}

async function refreshAccessToken(token: JWT) {
    try {
        const res = await axios.post(
            'http://localhost:8000/api/v1/auth/refresh', {},
            {
                headers: {
                    Authorization: `Bearer ${token.refresh}`,
                },
                withCredentials: true,
            }
        );


        if (res.status !== 201) {
            console.warn('Unexpected status:', res.status);
        }

        return {
            ...token,
            id: res.data.accessToken,
        };

    } catch (e) {
        const axiosError = e as AxiosError;
        console.error('Couldn\'t refresh access token', axiosError.message || e);
        return token;
    }
}