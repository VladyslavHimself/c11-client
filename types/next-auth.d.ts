// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session extends DefaultSession {
        token: string;
    }

    interface User extends DefaultUser {
        accessToken: string;
        refreshToken: string;
    }
}