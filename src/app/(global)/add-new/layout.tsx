import React from "react";
import {AddNewPageProviders} from "@/components/AddNewPage/AddNewPageProviders";
import {TopicsAPI} from "@/api/Topics";
import {TagsApi} from "@/api/Tags";

export default async function AddNewPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const topicList = await TopicsAPI.getPopularTopics(4);
    const tagList = await TagsApi.searchTags(undefined, 9);

    return (
        <AddNewPageProviders topicList={topicList} tagList={tagList}>
            {children}
        </AddNewPageProviders>
    );
};