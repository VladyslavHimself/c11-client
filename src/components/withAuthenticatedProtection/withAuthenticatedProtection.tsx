import {isFunction} from "lodash";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function withAuthenticatedProtection(Component) {
    if (!isFunction(Component)) throw new Error("HOC must have a Component");
    return function AuthenticatedProtection(props) {
        const router = useRouter();
        const { status } = useSession();

        const isAuthenticatedAction = status === "authenticated";

        const onOpenLoginModal = (e) => {
            e.stopPropagation();
            router.push("/sign-in");
        }

        return (
            <div onClick={(e) => {
                !isAuthenticatedAction && onOpenLoginModal(e);
            }}>
                <Component {...props} isAuthenticatedAction={isAuthenticatedAction}/>
            </div>
        )

    }
}