'use client';

import AddNewWallpaperSidebarSection
    from "@/components/AddNewPage/AddNewWallpaperSidebar/AddNewWallpaperSidebarSection/AddNewWallpaperSidebarSection";
import {useAddNewPageActions, useAddNewPageStates} from "@/components/AddNewPage/AddNewPageProvider";
import {TopicResponseBody} from "@/api/Topics";
import React from "react";
import useTopicsSelect from "@/components/AddNewPage/AddNewWallpaperSidebar/useTopicsSelect";
import {
    AddNewWallpaperSidebarSectionTypes
} from "@/components/AddNewPage/AddNewWallpaperSidebar/AddNewWallpaperSidebarSection/addNewWallpaperSidebarSection.types";
import {isFunction} from "lodash";
import useDebouncedInput from "@/hooks/useDebouncedInput";

// It was written with HOCs because I decided to test how they work with RSC and Next 14 :)
function withSingleSelectTopics(NativeComponent: React.ComponentType<AddNewWallpaperSidebarSectionTypes<TopicResponseBody>>) {
    if (!isFunction(NativeComponent)) throw new Error("HOC must have a NativeComponent");

    return function TopicsSingleselect() {
        const { debouncedInput, sourceInput } = useDebouncedInput();
        const { data, loading } = useTopicsSelect(debouncedInput);
        const { topicList, selectedTopic } = useAddNewPageStates();
        const { setSelectedTopic } = useAddNewPageActions();

        function onSelectTopic(topic: TopicResponseBody) {
            setSelectedTopic(topic);
        }

        const filteredTopics = React.useMemo(() => {
            if (!debouncedInput.trim()) return topicList;
            return data;
        }, [debouncedInput, data, topicList]);


        return (
            <NativeComponent
                itemList={filteredTopics}
                selectedItems={[selectedTopic]}
                isLoading={loading}
                onClick={onSelectTopic}

                searchProperties={sourceInput}
                searchPlaceholder="Search Topics"
                title="Selected Topics"
            />
        )
    }
}

export const AddNewWallpaperTopicSelect = withSingleSelectTopics(AddNewWallpaperSidebarSection<TopicResponseBody>);