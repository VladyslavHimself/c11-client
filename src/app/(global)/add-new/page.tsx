import React from "react"
import styles from '@/styles/add-new-page.module.scss';
import AddNewWallpaperSidebar from "@/components/AddNewPage/AddNewWallpaperSidebar/AddNewWallpaperSidebar";

export default function AddNewPage() {

    return (
            <div className={styles['add-new-page']}>
                <div className={styles['add-new-page-content-wrapper']}>
                    <AddNewWallpaperSidebar />
                    <div>
                        {/*<AddNewWallpaperImageUploadFrame />*/}
                        {/*<AddNewWallpaperPublishButton />*/}
                    </div>
                </div>
            </div>
    );
};