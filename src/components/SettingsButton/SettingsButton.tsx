'use client';

import IconButton from "@/components/ui/IconButton/IconButton";
import SettingsIcon from "../../../public/SettingsIcon";
import {useRouter} from "next/navigation";

export default function SettingsButton() {
    const router = useRouter();


    return (
        <IconButton action={() => router.push("/settings")}>
         <SettingsIcon />
        </IconButton>
    );
};