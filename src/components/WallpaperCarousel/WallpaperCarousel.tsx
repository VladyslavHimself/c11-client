'use client'

import styles from './wallpaperCarousel.module.scss';
import { motion } from 'framer-motion';
import {WallpaperResponse} from "@/api/Images";

import WallpaperFrame from "@/components/WallpaperFrame/WallpaperFrame";
import {useCarousel} from "@/components/WallpaperCarousel/useCarousel";
import NextIcon from "../../../public/NextIcon";
import PrevIcon from "../../../public/PrevIcon";
import CarouselNavigationButton from "@/components/WallpaperCarousel/CarouselNavigationButton/CarouselNavigationButton";
import WallpaperFrameViewerPreviewMenu
    from "@/components/WallpaperFramePreviewMenus/WallpaperFrameViewerPreviewMenu";
import {useRouter} from "next/navigation";
import React from "react";

type Props = {
    wallpapers: WallpaperResponse[]
};

const TRANSFORM_STEP = 355 * 3;
const CAROUSEL_LIMIT = 3;

export default function WallpaperCarousel({ wallpapers }: Props) {
    const [carouselIndex, listForward, listBackward] = useCarousel(CAROUSEL_LIMIT);
    const router = useRouter();
    let isCarouselDragging = false;

    return (
        <motion.div className={styles['wallpaper-carousel']}>
            <div className={styles['prev-button-placement']}>
                <CarouselNavigationButton
                    isHidden={carouselIndex === 0}
                    // TODO: Investigate why listBackward defines as number | () => void
                    action={listBackward as () => void}
                >
                    <PrevIcon />
                </CarouselNavigationButton>
            </div>

            <div className={styles['next-button-placement']}>
                <CarouselNavigationButton
                    isHidden={carouselIndex === CAROUSEL_LIMIT}
                    // TODO: Investigate why listForward defines as number | () => void
                    action={listForward as () => void}
                >
                    <NextIcon />
                </CarouselNavigationButton>
            </div>

            <motion.div drag="x" className={styles['wallpaper-carousel-wrapper']}
                        dragConstraints={{left: 0, right: 0,}}
                        animate={{translateX: -carouselIndex * TRANSFORM_STEP}}
                        transition={{duration: .5,}}
                        // @ts-expect-error while drag is not supported by the "motion.div" component.
                        whileDrag={() => { isCarouselDragging = true; }}
                        onDragEnd={() => { isCarouselDragging = false; }}
            >
                {wallpapers.map((wallpaper) =>
                    <WallpaperFrame
                        key={wallpaper.id}
                        wallpaper={wallpaper}
                        onClickHandler={onSelectWallpaperHandler}
                    >
                        <WallpaperFrameViewerPreviewMenu wallpaperMetadata={wallpaper} />
                    </WallpaperFrame>
                )
                }
            </motion.div>
        </motion.div>
    );

    function onSelectWallpaperHandler(wallpaper: WallpaperResponse) {
        if (isCarouselDragging) return;
        // TODO: Create function to generate URL. Avoid raw string placement.
        router.push(`/w/${wallpaper.id}`);
    }
};