import React from "react";

export default function GlobalWithoutSidebarLayout({
     children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>{children}</>
    );
}
