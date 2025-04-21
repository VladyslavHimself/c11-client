// eslint-disable-next-line @typescript-eslint/no-unused-vars
import JwtDecode from 'jwt-decode';

declare module 'jwt-decode' {
    interface JwtPayload {
       email: string;
    }
}