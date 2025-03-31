import React from "react";
import {WallpaperResponse} from "@/api/Images";
import WallpaperFrame from "@/components/WallpaperCarousel/WallpaperFrame/WallpaperFrame";
import styles from './wallpapersGallery.module.scss';

type Props = {
    wallpapers: WallpaperResponse[];
}

export default function WallpapersGallery({ wallpapers }: Props) {
    return (
        <div className={styles["wallpapers-gallery"]}>
            {
                wallpapers.map((wallpaper: WallpaperResponse) => (
                    <WallpaperFrame wallpaper={wallpaper} key={wallpaper.id} />
                ))
            }
        </div>
    );
};