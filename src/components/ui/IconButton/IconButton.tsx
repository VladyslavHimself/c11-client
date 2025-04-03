import {Button} from "@/components/ui/button";
import React, {PropsWithChildren} from "react";

type Props = {
    action: () => void;
}

export default function IconButton({ children, action }: PropsWithChildren<Props>) {
    return (
        <Button style={{ width: 51, height: 51}} onClick={action}>
            {children}
        </Button>
    );
};