import React from "react";
import type {Metadata} from "next";
import {getServerSession} from "next-auth";
import {authConfig} from "@/config/authConfig";
import {redirect} from "next/navigation";
import Slidebar from "@/components/Slidebar/Slidebar";

export const metadata: Metadata = {
    title: "C11 | Join our community today!",
    description: "Generated by create next app",
};

export default async function AuthLayout({ children }: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authConfig);

    if (session?.token) {
        redirect('/')
    }
    return (
        <div style={{ width: "100%", height: "100vh", display: "flex" }}>
            <div style={{ display: "flex", flexGrow: 5}}>
                {children}
            </div>

            <div style={{ display: "flex", flexGrow: 1}}>
                <Slidebar />
            </div>


        </div>
    );
}