'use client';

import React, {PropsWithChildren} from "react";
import {AddNewPageProps} from "@/components/AddNewPage/AddNewPageProviders";
import {TopicResponseBody} from "@/api/Topics";
import {Tag} from "@/api/Tags";
const AddNewPageStateContext = React.createContext<null|AddNewPageStateContext>(null);
const AddNewPageActionsContext = React.createContext<null|AddNewPageActionsContext>(null);

type AddNewPageStateContext = {
    topicList: TopicResponseBody[];
    selectedTopic: TopicResponseBody;
    tagList: any[]
    selectedTags: any[];
    selectedImage: File|null,
}

type AddNewPageActionsContext = {
    setSelectedTopic: React.Dispatch<React.SetStateAction<TopicResponseBody>>;
    setSelectedTags: React.Dispatch<React.SetStateAction<any[]>>;
    setSelectedImage: React.Dispatch<React.SetStateAction<null|File>>;
}

type InheritedAddNewPageProps = AddNewPageProps;

export default function AddNewPageProvider({ children, tagList, topicList }: PropsWithChildren<InheritedAddNewPageProps>) {

    const [selectedImage, setSelectedImage] = React.useState<File|null>(null);
    const [selectedTopic, setSelectedTopic] = React.useState<TopicResponseBody>(topicList[0]);
    const [selectedTags, setSelectedTags] = React.useState<Tag[]>([]);

    return (
        <AddNewPageStateContext value={{ topicList, tagList, selectedTopic, selectedImage, selectedTags}}>
            <AddNewPageActionsContext value={{ setSelectedTopic, setSelectedImage, setSelectedTags }}>
                { children }
            </AddNewPageActionsContext>
        </AddNewPageStateContext>
    );
};


export function useAddNewPageActions() {
    const context = React.useContext(AddNewPageActionsContext);
    if (!context) {
        throw new Error('useAddNewPageActions must be used within AddNewPageProvider');
    }
    return context;
}

export function useAddNewPageStates() {
    const context = React.useContext(AddNewPageStateContext);
    if (!context) {
        throw new Error('useAddNewPageStates must be used within AddNewPageProvider');
    }

    return context;
}