import {Button} from "@/components/ui/button";
import React, {PropsWithChildren} from "react";
import withAuthenticatedProtection from "@/components/withAuthenticatedProtection/withAuthenticatedProtection";

// TODO: make protected action with extending from inherit property


type Props = {
    action: () => void,
    isAuthenticatedAction?: boolean,
}

function ProtectedButton({ action, children, isAuthenticatedAction }: PropsWithChildren<Props>) {
    return (
       <Button
        onClick={() => isAuthenticatedAction && action()}
        className="flex items-center justify-center box-border px-2 py-6 max-w-[80px] w-[80px]">
           { children }
       </Button>
    );
}

export default withAuthenticatedProtection<PropsWithChildren<Props>>(ProtectedButton);
