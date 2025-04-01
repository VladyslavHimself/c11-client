import React from "react";
import {getServerSession} from "next-auth";
import {authConfig} from "@/config/authConfig";
import {redirect} from "next/navigation";


export default async function FavouritesLayout({ children }: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authConfig);

    if (!session?.token) {
        redirect('/')
    }
    return children;
}
