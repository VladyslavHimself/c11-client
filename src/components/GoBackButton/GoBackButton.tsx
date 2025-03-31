'use client';

import CloseIcon from "../../../public/CloseIcon";
import {Button} from "@/components/ui/button";
import React from "react";
import {useRouter} from "next/navigation";

// TODO: Rename to more consistent name
export default function GoBackButton() {
    const router = useRouter();

    return (
        <Button style={{ width: 51, height: 51}} onClick={() => router.push("/explore")}><CloseIcon /></Button>
    );
};