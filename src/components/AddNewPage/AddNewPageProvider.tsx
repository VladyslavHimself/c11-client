'use client';

import React, {PropsWithChildren} from "react";
import {AddNewPageProps} from "@/components/AddNewPage/AddNewPageProviders";
import {TopicResponseBody} from "@/api/Topics";
import {Tag} from "@/api/Tags";
import useAddNewWallpaperMutation from "@/apiHooks/useAddNewWallpaperMutation";
import {useRouter} from "next/navigation";
const AddNewPageStateContext = React.createContext<null|AddNewPageStateContext>(null);
const AddNewPageActionsContext = React.createContext<null|AddNewPageActionsContext>(null);

type AddNewPageStateContext = {
    topicList: TopicResponseBody[];
    selectedTopic: TopicResponseBody;
    tagList: Tag[]
    selectedTags: Tag[];
    selectedImage: File|null,
}

type AddNewPageActionsContext = {
    setSelectedTopic: React.Dispatch<React.SetStateAction<TopicResponseBody>>;
    setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
    setSelectedImage: React.Dispatch<React.SetStateAction<null|File>>;
    onSubmitNewWallpaper: () => void;
}

type InheritedAddNewPageProps = AddNewPageProps;

export default function AddNewPageProvider({ children, tagList, topicList }: PropsWithChildren<InheritedAddNewPageProps>) {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = React.useState<null|File>(null);
    const [selectedTopic, setSelectedTopic] = React.useState<TopicResponseBody>(topicList[0]);
    const [selectedTags, setSelectedTags] = React.useState<Tag[]>([]);

    const { addNewWallpaper } = useAddNewWallpaperMutation(() => {});

    function onSubmitNewWallpaper() {
        if (!selectedImage) return;

        const formattedTags = selectedTags.map((tag) => tag.id ).join(',');

       addNewWallpaper(selectedImage, selectedTopic.id, formattedTags).then(() => {
            router.push('/');
       });
    }

    return (
        <AddNewPageStateContext value={{ topicList, tagList, selectedTopic, selectedImage, selectedTags}}>
            <AddNewPageActionsContext value={{ setSelectedTopic, onSubmitNewWallpaper, setSelectedImage, setSelectedTags }}>
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