'use client';

import AddNewPageProvider from "@/components/AddNewPage/AddNewPageProvider";
import {PropsWithChildren} from "react";

export function AddNewPageProviders({ children }: PropsWithChildren) {
    return (
        <AddNewPageProvider>
            { children }
        </AddNewPageProvider>
    );
}