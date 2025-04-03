'use client';

import IconButton from "@/components/ui/IconButton/IconButton";
import {useRouter} from "next/navigation";
import CloseIcon from "../../../public/CloseIcon";


// TODO: Bad code smell. Improve scalability using HOC in future.
export default function ExploreButton() {
    const router = useRouter();

    return (
        <IconButton action={() => router.push("/explore")}>
         <CloseIcon />
        </IconButton>
    );
};