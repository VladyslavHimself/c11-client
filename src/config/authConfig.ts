import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {AuthAPI, JWTResponse} from "@/api/auth";
import {Account, AuthOptions} from "next-auth";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

export const authConfig: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Custom credentials",
            credentials: {
                email: { label: "Email", type: "text"},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials) {
                const { status, data } = await AuthAPI.loginUser({
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
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ account, token, user}) {
            if (isUserLoggedFirstTime(account, user) && account?.provider === 'credentials') {
                token.id = user.accessToken;
                token.refresh = user.refreshToken

            }

            if (token?.id) {
               const decodedToken = jwtDecode(token?.id);
               token.expires = decodedToken?.exp * 1000;
            }

            if (new Date() < token?.expires) return token;

            return refreshAccessToken(token);

        },
        async session({ session, token }) {
            if (token) {
                session.token = token.id as string;
                session.user = {};
            }

            return session;
        },
    },
}


function isUserLoggedFirstTime(account, user) {
    return account && user;
}

async function refreshAccessToken(token) {
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
        console.error('Couldn\'t refresh access token', e.message || e);
        return token;
    }
}