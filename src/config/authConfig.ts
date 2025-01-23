import CredentialsProvider from "next-auth/providers/credentials";
import {AuthAPI} from "@/api/auth";
import {AuthOptions} from "next-auth";

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
                });

                if (status === 201 && data) return data;
                return null;
            },
        })
    ],
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user}) {
            if (user) {
                token.id = user.accessToken;
                token.refresh = user.refreshToken
            }
            return {...token };
        },
        async session({ session, token }) {
            if (token) {
                session.token = token.id as string;
                // TODO: Optional. Add user data, if backend will pass data.
                session.user = {};
            }

            return session;
        },
    },
}