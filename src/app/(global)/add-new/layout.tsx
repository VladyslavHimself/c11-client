import React from "react";
import {AddNewPageProviders} from "@/components/AddNewPage/AddNewPageProviders/AddNewPageProviders";

export default function AddNewPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <AddNewPageProviders>
            {children}
        </AddNewPageProviders>
    );
};