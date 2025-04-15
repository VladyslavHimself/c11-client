'use client';

import styles from './addNewWallpaperPublishButton.module.scss';
import {Button} from "@/components/ui/button";
import ShareIcon from "../../../../public/ShareIcon";
import {useAddNewPageActions} from "@/components/AddNewPage/AddNewPageProvider";


export default function AddNewWallpaperPublishButton() {
    const { onSubmitNewWallpaper } = useAddNewPageActions();
    return (
        <div className={styles['add-new-wallpaper-publish-button-container']}>
            <Button variant="accent" onClick={onSubmitNewWallpaper} >
                <ShareIcon />
                Publish
            </Button>
        </div>
    );
};