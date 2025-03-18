import React from "react";

export default function GlobalLayout({
     children,
     navigation,
     imageViewer,
}: Readonly<{
    children: React.ReactNode;
    navigation: React.ReactNode;
    imageViewer: React.ReactNode;
}>) {
    return (
        <>
            {imageViewer}
            {navigation}
            {children}
        </>
    );
}
