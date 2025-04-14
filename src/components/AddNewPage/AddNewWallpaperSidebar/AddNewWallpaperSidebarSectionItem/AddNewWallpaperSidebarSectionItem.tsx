import React from "react";

import styles from './addNewWallpaperSidebarSectionItem.module.scss';
import Image from "next/image";
import {TopicResponseBody} from "@/api/Topics";

type Props = {
    isSelected: boolean;
    onClick: () => void;
    item: TopicResponseBody;
    isCompact: boolean;
}

export default function AddNewWallpaperSidebarSectionItem({ isSelected, onClick, item, isCompact }: Props) {
    return (
        <div className={
            `${styles['add-new-wallpaper-sidebar-section-item']}
             ${!isCompact ? styles['add-new-wallpaper-sidebar-section-item-extended'] : ''}
             `}
             data-is-selected={isSelected}
             onClick={onClick}
             key={item.id}>
            {
                !isCompact && item?.image && (
                    <div className={styles['add-new-wallpaper-sidebar-section-item-imageholder']}>
                        <Image src={item?.image.url} width={51} height={51} alt={item.name} />
                    </div>

                )
            }
                <div className={styles['add-new-wallpaper-sidebar-section-item-title']}>{item.name}</div>
        </div>
    );
};