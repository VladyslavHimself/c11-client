import {useMutation} from "@tanstack/react-query";
import {AuthAPI, LoginBody} from "@/api/auth";

export default function useSignIn() {
    const { mutate: signInUser, data: userToken} = useMutation({
        mutationKey: ['user-signIn'],
        mutationFn: function (credentials: LoginBody) {
            return AuthAPI.loginUser(credentials).then(({ data }) => data);
        },
        onSuccess: (data) => {
            console.log(data);
        }
    });

    return { signInUser, userToken };
}