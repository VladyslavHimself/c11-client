import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {AuthAPI, JWTResponse} from "@/api/auth";
import {Account, AuthOptions} from "next-auth";

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
            if (user && account?.provider === 'credentials') {
                token.id = user.accessToken;
                token.refresh = user.refreshToken
            }

            if (account?.provider === "google") {
                const { accessToken, refreshToken } = await authenticateUserViaGoogle(account);

                token.id = accessToken;
                token.refresh = refreshToken;
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

async function authenticateUserViaGoogle(account: Account): Promise<JWTResponse> {
    const { data } = await AuthAPI.loginUserViaGoogle(account.access_token!);

    return {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken
    }
}