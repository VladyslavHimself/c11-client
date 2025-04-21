'use client';

import {useRouter} from "next/navigation";
import useDragControlCarousel from "@/components/TopicsCarousel/useAdaptiveCarousel/useDragControlCarousel";
import {motion} from "framer-motion";
import React from "react";
import {WallpaperResponse} from "@/api/Images";
import styles from './userUploadsCarousel.module.scss';
import WallpaperFrame from "@/components/WallpaperFrame/WallpaperFrame";
import {WallpaperFrameOwnerPreviewMenu} from "@/components/WallpaperFramePreviewMenus/WallpaperFrameOwnerPreviewMenu";

type Props = {
    userUploads: WallpaperResponse[]
}

export default function UserUploadsCarousel({ userUploads }: Props) {
    const router = useRouter();
    const { carouselOuterRef, carouselInnerRef, dragConstraints } = useDragControlCarousel();
    let isCarouselDragging = false;

    const onSelectWallpaperHandler = (wallpaper: WallpaperResponse) => {
        if (isCarouselDragging) return;
        router.push(`/w/${wallpaper.id}`);
    }

    return (
        <div ref={carouselOuterRef} className={styles['user-uploads-carousel']}>
            <div className={styles['user-uploads-carousel-container']}>
                <motion.div
                    drag="x"
                    dragConstraints={dragConstraints}
                    ref={carouselInnerRef}
                    // @ts-expect-error while drag is not supported by the "motion.div" component.
                    whileDrag={() => { isCarouselDragging = true; }}
                    onDragEnd={() => { isCarouselDragging = false; }}
                    style={{display: "flex", alignItems: "center"}}>

                    {
                        userUploads.map((wallpaper) => (
                            <WallpaperFrame
                                key={wallpaper.id}
                                wallpaper={wallpaper}
                                onClickHandler={onSelectWallpaperHandler}
                            >
                                <WallpaperFrameOwnerPreviewMenu wallpaperMetadata={wallpaper} />
                            </WallpaperFrame>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    );
};