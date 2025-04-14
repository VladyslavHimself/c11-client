import styles from './addNewWallpaperSidebar.module.scss';
import {Heading} from "@/components/ui/Heading/Heading";
import React from "react";
import { AddNewWallpaperTopicSelect } from "@/components/AddNewPage/AddNewWallpaperSidebar/withSingleSelectTopics";
import {AddNewWallpaperTagsMultiselect} from "@/components/AddNewPage/AddNewWallpaperSidebar/withMultiSelectTags";

// TODO: Move to separated file
export const sidebarHeadingCustomProperties = { titleFontSize: 24, subtitleFontSize: 14}

export default async function AddNewWallpaperSidebar() {

    return (
        <div className={styles['add-new-wallpaper-sidebar']}>
            <Heading
                title="Add New Wallpaper"
                subtitle="Please, choose topic andniiiinn tagsinsert some datinsert some dataa, that describes your wallpaper in the best way."
                customProperties={sidebarHeadingCustomProperties}
            />
            <div className={styles['add-new-wallpaper-sidebar-container']}>
                <AddNewWallpaperTopicSelect />
                <AddNewWallpaperTagsMultiselect />
            </div>
        </div>
    );
};