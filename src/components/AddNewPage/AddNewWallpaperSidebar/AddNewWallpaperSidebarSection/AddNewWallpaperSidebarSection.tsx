import React from "react";
import {Input} from "@/components/ui/input";
import {TopicResponseBody} from "@/api/Topics";

import {
    AddNewWallpaperSidebarSectionTypes
} from "@/components/AddNewPage/AddNewWallpaperSidebar/AddNewWallpaperSidebarSection/addNewWallpaperSidebarSection.types";
import AddNewWallpaperSidebarSectionItem
    from "@/components/AddNewPage/AddNewWallpaperSidebar/AddNewWallpaperSidebarSectionItem/AddNewWallpaperSidebarSectionItem";

import styles from "./addNewWallpaperSidebarSection.module.scss";

export default function AddNewWallpaperSidebarSection({
  itemList,
  isLoading,
  onClick,
  searchPlaceholder,
  searchProperties,
  selectedItems,
  isCompact,
}: AddNewWallpaperSidebarSectionTypes<TopicResponseBody>) {

    return (
        <div className={styles['add-new-wallpaper-sidebar-section']}>
            <Input {...searchProperties} placeholder={searchPlaceholder} />
            <div className={styles['add-new-wallpaper-sidebar-section-content']}>

                {!isLoading && itemList.length && itemList?.map(item => {
                    const isSelected = !!selectedItems.find(selectedItem => selectedItem.id === item.id);
                    console.log(selectedItems)

                    return (
                        <div key={item.id} className={styles['add-new-wallpaper-sidebar-section-item-wrapper']}>
                            <AddNewWallpaperSidebarSectionItem
                                key={item.id}
                                item={item}
                                onClick={onClick}
                                isCompact={isCompact}
                                isSelected={isSelected}
                            />
                        </div>
                    );
                })}

                { isLoading && <div>Loading...</div> }
            </div>
        </div>
    );
}