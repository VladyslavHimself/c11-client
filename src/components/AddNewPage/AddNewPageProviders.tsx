'use client';

import AddNewPageProvider from "@/components/AddNewPage/AddNewPageProvider";
import {PropsWithChildren} from "react";
import {TopicResponseBody} from "@/api/Topics";

export type AddNewPageProps = {
    topicList: TopicResponseBody[];
    tagList: any[];
}

export function AddNewPageProviders(props: Readonly<PropsWithChildren<AddNewPageProps>>) {
    return (
        <AddNewPageProvider {...props}>
            { props.children }
        </AddNewPageProvider>
    );
}