import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {AuthAPI} from "@/api/auth";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Custom credentials",
            credentials: {
                email: { label: "Email", type: "text"},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials) {
                const { status, data } = await AuthAPI.loginUser({ email: credentials!.email, password: credentials!.password});

                if (status === 201 && data) return data;
                return null;
            },
            secret: process.env.NEXTAUTH_SECRET,
        })
    ]
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};