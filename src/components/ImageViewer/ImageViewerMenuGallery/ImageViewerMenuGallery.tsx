import styles from './ImageViewerMenuGallery.module.scss';
import {WallpaperResponse} from "@/api/Images";
import ImageViewerMenuGalleryItem
    from "@/components/ImageViewer/ImageViewerMenuGallery/ImageViewerMenuGalleryItem/ImageViewerMenuGalleryItem";
import React from "react";

type Props = {
    suggestedWallpapers: WallpaperResponse[],
    topicName: string,
}

// TODO: Remove slice() from JSX when "getPopular" endpoint would be done on server
export default function ImageViewerMenuGallery({ suggestedWallpapers, topicName }: Props) {

    return (
        <div className={styles['image-viewer-menu-gallery']}>
            <div className={styles['image-viewer-menu-gallery-title']}>More wallpapers with &#34;{topicName}&#34; topic</div>
            <div className={styles['image-viewer-menu-gallery-container']}>
                {suggestedWallpapers.map((wallpaper, index) => {

                    return (
                        <ImageViewerMenuGalleryItem
                            key={wallpaper.id}
                            wallpaper={wallpaper}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};