'use client';

import React from "react";
import {
    AddNewWallpaperSidebarSectionTypes
} from "@/components/AddNewPage/AddNewWallpaperSidebar/AddNewWallpaperSidebarSection/addNewWallpaperSidebarSection.types";
import {isFunction} from "lodash";
import {useAddNewPageActions, useAddNewPageStates} from "@/components/AddNewPage/AddNewPageProvider";
import AddNewWallpaperSidebarSection
    from "@/components/AddNewPage/AddNewWallpaperSidebar/AddNewWallpaperSidebarSection/AddNewWallpaperSidebarSection";
import useDebouncedInput from "@/hooks/useDebouncedInput";
import useTopicsSelect from "@/components/AddNewPage/AddNewWallpaperSidebar/useTopicsSelect";
import {TopicResponseBody} from "@/api/Topics";


// TODO: Change to tags data
function withMultiselectTags(NativeComponent: React.ComponentType<AddNewWallpaperSidebarSectionTypes<any>>) {
    if (!isFunction(NativeComponent)) throw new Error("HOC must have a NativeComponent");

    return function TagsMultiselect() {
        const { debouncedInput, sourceInput } = useDebouncedInput();
        const { data, loading } = useTopicsSelect(debouncedInput);
        const { topicList, selectedTags } = useAddNewPageStates();
        const { setSelectedTags } = useAddNewPageActions();

        function onSelectTag(topic: TopicResponseBody) {
            setSelectedTags(prev => {
                const exists = prev.some(item => item.id === topic.id);
                return exists ? prev.filter(item => item.id !== topic.id) : [...prev, topic];
            });
        }

        const filteredTags = React.useMemo(() => {
            if (!debouncedInput.trim()) return topicList;
            return data;
        }, [debouncedInput, data, topicList]);

        return <NativeComponent
            itemList={filteredTags}
            selectedItems={selectedTags}
            isLoading={loading}
            onClick={onSelectTag}

            searchProperties={sourceInput}
            searchPlaceholder="Search Tags"
            title="Selected tags"
            isCompact
        />;
    }
}

export const AddNewWallpaperTagsMultiselect = withMultiselectTags(AddNewWallpaperSidebarSection);