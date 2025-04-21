import React from "react";
import styles from './addNewWallpaperSidebarSectionItem.module.scss';
import Image from "next/image";

type Props<T> = {
   isSelected: boolean;
   isCompact: boolean;
   onClick: (item: T) => void;
   item: T;
}

// TODO: Remove duplication and clarify types in this scope sector
type RequiredProps = {
    id: string;
    name: string;
    imgUrl?: string;
}

export default function AddNewWallpaperSidebarSectionItem<T extends RequiredProps>({ isSelected, onClick, item, isCompact }: Props<T>) {
    return (
        <div className={
            `${styles['add-new-wallpaper-sidebar-section-item']}
             ${!isCompact ? styles['add-new-wallpaper-sidebar-section-item-extended'] : ''}
             `}
             data-is-selected={isSelected}
             onClick={() => onClick(item)}
             key={item.id}>
            {
                !isCompact && (
                    <div className={styles['add-new-wallpaper-sidebar-section-item-imageholder']}>
                        <Image src={item?.imgUrl || ''} width={51} height={51} alt={item.name} />
                    </div>

                )
            }
                <div className={styles['add-new-wallpaper-sidebar-section-item-title']}>{item.name}</div>
        </div>
    );
};