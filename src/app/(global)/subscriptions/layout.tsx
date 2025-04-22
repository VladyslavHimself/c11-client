import React from "react";
import {getServerSession} from "next-auth";
import {authConfig} from "@/config/authConfig";
import {redirect} from "next/navigation";
import featureFlags from '@/config/local-feature-flags.json';

export default async function ProtectedLayout({ children }: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authConfig);

    if (!session?.token || !featureFlags.isSubscriptionsPageEnabled) {
        redirect('/')
    }
    return children;
}