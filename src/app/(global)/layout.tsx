import React from "react";

export default function GlobalLayout({
     children,
     navigation
}: Readonly<{
    children: React.ReactNode;
    navigation: React.ReactNode;
}>) {
    return (
        <>
            {navigation}
            {children}
        </>
    );
}
