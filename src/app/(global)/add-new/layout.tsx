import React from "react";
import {AddNewPageProviders} from "@/components/AddNewPage/AddNewPageProviders";
import {TopicsAPI} from "@/api/Topics";
import {TagsApi} from "@/api/Tags";
import {getServerSession} from "next-auth";
import {authConfig} from "@/config/authConfig";
import {redirect} from "next/navigation";

export default async function AddNewPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerSession(authConfig);

    if (!session?.token) {
        redirect('/')
    }

    const topicList = await TopicsAPI.getPopularTopics(4);
    const tagList = await TagsApi.searchTags(undefined, 9);

    return (
        <AddNewPageProviders topicList={topicList} tagList={tagList!}>
            {children}
        </AddNewPageProviders>
    );
};