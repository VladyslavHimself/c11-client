// @flow
import * as React from 'react';
import styles from "@/components/WallpaperFramePreviewMenus/wallpaperFramePreviewMenus.module.scss";

type Props = {
    width: number,
    height: number,
};

export function ResolutionWallpaperInformation({ width, height }: Props) {
    return (
        <div className={styles['wallpaper-information']} style={{ marginRight: '10px'}}>
            {[width, height].join('x')}
        </div>
    );
};