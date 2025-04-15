import React from "react"
import styles from '@/styles/add-new-page.module.scss';
import AddNewWallpaperSidebar from "@/components/AddNewPage/AddNewWallpaperSidebar/AddNewWallpaperSidebar";
import AddNewWallpaperImageUploadFrame
    from "@/components/AddNewPage/AddNewWallpaperImageUploadFrame/AddNewWallpaperImageUploadFrame";
import AddNewWallpaperPublishButton
    from "@/components/AddNewPage/AddNewWallpaperPublishButton/AddNewWallpaperPublishButton";

export default function AddNewPage() {

    return (
            <div className={styles['add-new-page']}>
                <div className={styles['add-new-page-content-wrapper']}>
                    <AddNewWallpaperSidebar />
                    <div className={styles['add-new-page-right-section']}>
                        <AddNewWallpaperImageUploadFrame />
                        <AddNewWallpaperPublishButton />
                    </div>
                </div>
            </div>
    );
};