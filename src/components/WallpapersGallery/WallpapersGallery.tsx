'use client';

import React from "react";
import {WallpaperResponse} from "@/api/Images";
import WallpaperFrame from "@/components/WallpaperFrame/WallpaperFrame";
import styles from './wallpapersGallery.module.scss';
import WallpaperFrameViewerPreviewMenu
    from "@/components/WallpaperFramePreviewMenus/WallpaperFrameViewerPreviewMenu";
import { useRouter } from "next/navigation";

type Props = {
    wallpapers: WallpaperResponse[];
}

export default function WallpapersGallery({ wallpapers }: Props) {
    const router = useRouter();

    function onSelectWallpaperHandler(wallpaper: WallpaperResponse) {
        router.push(`/w/${wallpaper.id}`);
    }
    return (
        <div className={styles["wallpapers-gallery"]}>
            {
                wallpapers?.map((wallpaper: WallpaperResponse) => (
                    <WallpaperFrame
                        key={wallpaper.id}
                        wallpaper={wallpaper}
                        onClickHandler={onSelectWallpaperHandler}
                    >
                        <WallpaperFrameViewerPreviewMenu wallpaperMetadata={wallpaper} />
                    </WallpaperFrame>
                ))
            }
        </div>
    );
};