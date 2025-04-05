import Image from "next/image";
import {WallpaperResponse} from "@/api/Images";
import styles from './wallpaperFrame.module.scss';
import React from "react";

type Props = {
    wallpaper: WallpaperResponse,
    onClickHandler: (selectedWallpaper: WallpaperResponse) => void,
}

export default function WallpaperFrame({ wallpaper, children, onClickHandler }: React.PropsWithChildren<Props>) {
    const {url, filename, placeholder } = wallpaper;
    return (
        <div className={styles['wallpaper-frame']} onClick={() => onClickHandler(wallpaper)}>
            <div className={styles['wallpaper-frame-menu']}>
                { children }
            </div>
            <Image
                src={url + 'h=512'}
                alt={filename}
                blurDataURL={placeholder}
                placeholder="blur"
                objectFit="cover"
                fill
            />
        </div>
    );
};