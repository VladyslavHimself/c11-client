import styles from './wallpaperFramePreviewMenus.module.scss';
import {WallpaperResponse} from "@/api/Images";
import {MiniatureDownloadButton} from "@/components/MiniatureDownloadButton/MiniatureDownloadButton";
import React from "react";
import LikeButton from "@/components/LikeButton/LikeButton";
import FavouritesButton from "@/components/FavouritesButton/FavouritesButton";
import {
    ResolutionWallpaperInformation
} from "@/components/ResolutionWallpaperInformation/ResolutionWallpaperInformation";

type Props = {
    wallpaperMetadata: WallpaperResponse;
}

export default function WallpaperFrameViewerPreviewMenu({ wallpaperMetadata }: Props) {
    const { format, width, height } = wallpaperMetadata
    return (
        <>
            <div className={styles['wallpaper-frame-strip']}>
                <FavouritesButton wallpaperMetadata={wallpaperMetadata} />
                <div className={styles['wallpaper-frame-strip-divider']}>
                    <ResolutionWallpaperInformation width={width} height={height} />
                    <div className={styles['wallpaper-information']}>
                        {format}
                    </div>
                </div>
            </div>

            <div className={styles['wallpaper-frame-strip']}>
                <div className={styles['wallpaper-frame-strip-divider']}>
                    <LikeButton wallpaperMetadata={wallpaperMetadata} />
                </div>

                <MiniatureDownloadButton link={wallpaperMetadata.url} filename={wallpaperMetadata.filename} />
            </div>
        </>
    );
};