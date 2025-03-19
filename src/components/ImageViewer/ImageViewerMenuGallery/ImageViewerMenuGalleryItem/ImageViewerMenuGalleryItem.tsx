'use client'

import styles from './ImageViewerMenuGalleryItem.module.scss';
import Image from "next/image";
import {WallpaperResponse} from "@/api/Images";
import React from "react";
import {useRouter} from "next/navigation";

type Props = {
    wallpaper: WallpaperResponse,
    index: number;
} & React.HTMLAttributes<HTMLDivElement>;

export default function ImageViewerMenuGalleryItem({ wallpaper }: Props) {
    const router = useRouter();
    return (
        <div key={wallpaper.id} className={styles['image-viewer-menu-gallery-item']} onClick={() => {
            router.replace(`/w/${wallpaper.id}`);
        }}>
            <div className={styles['image-viewer-menu-gallery-item-shadows']} />
            <Image src={wallpaper.url + 'h=256'} fill alt={''} objectFit="cover" />
        </div>
    );
};