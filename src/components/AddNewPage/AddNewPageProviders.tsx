'use client';

import AddNewPageProvider from "@/components/AddNewPage/AddNewPageProvider";
import {PropsWithChildren} from "react";
import {TopicResponseBody} from "@/api/Topics";
import {SearchTagsResponse} from "@/api/Tags";

export type AddNewPageProps = {
    topicList: TopicResponseBody[];
    tagList: SearchTagsResponse;
}

export function AddNewPageProviders(props: Readonly<PropsWithChildren<AddNewPageProps>>) {
    return (
        <AddNewPageProvider {...props}>
            { props.children }
        </AddNewPageProvider>
    );
}