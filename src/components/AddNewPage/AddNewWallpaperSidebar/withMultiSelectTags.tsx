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
import {Tag} from "@/api/Tags";
import useTagsSelect from "@/components/AddNewPage/AddNewWallpaperSidebar/useTagsSelect";


// TODO: Change to tags data
function withMultiselectTags(NativeComponent: React.ComponentType<AddNewWallpaperSidebarSectionTypes<Tag>>) {
    if (!isFunction(NativeComponent)) throw new Error("HOC must have a NativeComponent");

    return function TagsMultiselect() {
        const { debouncedInput, sourceInput } = useDebouncedInput();
        const { data, loading } = useTagsSelect(debouncedInput);
        const { tagList, selectedTags } = useAddNewPageStates();
        const { setSelectedTags } = useAddNewPageActions();

        function onSelectTag(tag: Tag) {
            setSelectedTags(prev => {
                const exists = prev.some(item => item.id === tag.id);
                return exists ? prev.filter(item => item.id !== tag.id) : [...prev, tag];
            });
        }

        const filteredTags = React.useMemo(() => {
            if (!debouncedInput.trim()) return tagList.hits;
            return data;
        }, [debouncedInput, data, tagList]);

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

export const AddNewWallpaperTagsMultiselect = withMultiselectTags(AddNewWallpaperSidebarSection<Tag>);