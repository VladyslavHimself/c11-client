import React from "react";
import {AddNewPageProviders} from "@/components/AddNewPage/AddNewPageProviders";
import {TopicsAPI} from "@/api/Topics";

export default async function AddNewPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const topicList = await TopicsAPI.getPopularTopics(4);
    const tagList = [];

    return (
        <AddNewPageProviders topicList={topicList} tagList={tagList}>
            {children}
        </AddNewPageProviders>
    );
};