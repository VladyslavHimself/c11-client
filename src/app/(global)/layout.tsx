import React from "react";
import Providers from "@/Providers";

export default function GlobalLayout({
     children,
     navigation
}: Readonly<{
    children: React.ReactNode;
    navigation: React.ReactNode;
}>) {
    return (
        <>
            <Providers>
                {navigation}
                {children}
            </Providers>

        </>
    );
}
