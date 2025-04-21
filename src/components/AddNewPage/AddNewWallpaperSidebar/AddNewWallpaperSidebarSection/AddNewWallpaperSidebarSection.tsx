import React from "react";
import {Input} from "@/components/ui/input";
import {
    AddNewWallpaperSidebarSectionTypes
} from "@/components/AddNewPage/AddNewWallpaperSidebar/AddNewWallpaperSidebarSection/addNewWallpaperSidebarSection.types";
import AddNewWallpaperSidebarSectionItem
    from "@/components/AddNewPage/AddNewWallpaperSidebar/AddNewWallpaperSidebarSectionItem/AddNewWallpaperSidebarSectionItem";

import styles from "./addNewWallpaperSidebarSection.module.scss";

type RequiredImageProps = {
    id: string;
    name: string;
    imgUrl?: string;
}

export default function AddNewWallpaperSidebarSection<T extends RequiredImageProps>({
  itemList,
  isLoading,
  onClick,
  searchPlaceholder,
  searchProperties,
  selectedItems,
  isCompact = false,
}: AddNewWallpaperSidebarSectionTypes<T>) {

    return (
        <div className={styles['add-new-wallpaper-sidebar-section']}>
            <Input {...searchProperties} placeholder={searchPlaceholder} />
            <div className={styles['add-new-wallpaper-sidebar-section-content']}>

                {!isLoading && itemList.length && itemList?.map(item => {
                    const isSelected = !!selectedItems.find(selectedItem => selectedItem.id === item.id);

                    return (
                        <div key={item.id} className={styles['add-new-wallpaper-sidebar-section-item-wrapper']}>
                            <AddNewWallpaperSidebarSectionItem<T>
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