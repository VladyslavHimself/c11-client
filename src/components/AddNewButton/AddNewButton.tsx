'use client';

import {useRouter} from "next/navigation";
import IconButton from "@/components/ui/IconButton/IconButton";
import AddIcon from "../../../public/AddIcon";

export default function AddNewButton() {
    const router = useRouter();

    return (
        <IconButton action={() => router.push("/create-topic")}>
            <AddIcon />
        </IconButton>
    );
};