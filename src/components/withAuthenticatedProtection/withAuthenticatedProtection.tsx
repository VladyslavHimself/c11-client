import {isFunction} from "lodash";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import React from "react";
import {WallpaperResponse} from "@/api/Images";


// TODO: Make flexible
type ExpectedComponentProps = {
    isAuthenticatedAction: boolean,
    wallpaperMetadata?: WallpaperResponse,
}

export default function withAuthenticatedProtection(Component: React.ComponentType<ExpectedComponentProps>) {
    if (!isFunction(Component)) throw new Error("HOC must have a Component");
    return function AuthenticatedProtection(props: Omit<ExpectedComponentProps, 'isAuthenticatedAction'>) {
        const router = useRouter();
        const { status } = useSession();

        const isAuthenticatedAction = status === "authenticated";

        const onOpenLoginModal = (e) => {
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