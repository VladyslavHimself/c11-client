import {isFunction} from "lodash";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import React from "react";


// TODO: Make flexible
type RequiredProtectionProps = { isAuthenticatedAction?: boolean }

export default function withAuthenticatedProtection<T extends RequiredProtectionProps>(Component: React.ComponentType<T>) {
    if (!isFunction(Component)) throw new Error("HOC must have a Component");
    return function AuthenticatedProtection(props: T) {
        const router = useRouter();
        const { status } = useSession();

        const isAuthenticatedAction = status === "authenticated";

        const onOpenLoginModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            router.push("/sign-in");
        }

        return (
            <div onClick={(e) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                !isAuthenticatedAction && onOpenLoginModal(e);
            }}>
                <Component {...props} isAuthenticatedAction={isAuthenticatedAction}/>
            </div>
        )
    }
}