'use client'

import styles from './wallpaperCarousel.module.scss';
import { motion } from 'framer-motion';
import {WallpaperResponse} from "@/api/Images";

import WallpaperFrame from "@/components/WallpaperCarousel/WallpaperFrame/WallpaperFrame";
import {useCarousel} from "@/components/WallpaperCarousel/useCarousel";
import NextIcon from "../../../public/NextIcon";
import PrevIcon from "../../../public/PrevIcon";
import CarouselNavigationButton from "@/components/WallpaperCarousel/CarouselNavigationButton/CarouselNavigationButton";

type Props = {
    wallpapers: WallpaperResponse[]
};

const TRANSFORM_STEP = 395 * 3;
const CAROUSEL_LIMIT = 2;

export default function WallpaperCarousel({ wallpapers }: Props) {
    const [carouselIndex, listForward, listBackward] = useCarousel(CAROUSEL_LIMIT);
    return (
        <motion.div className={styles['wallpaper-carousel']}>
            <div className={styles['prev-button-placement']}>
                <CarouselNavigationButton
                    isHidden={carouselIndex === 0 }
                    action={listBackward}
                >
                    <PrevIcon />
                </CarouselNavigationButton>
            </div>

            <div className={styles['next-button-placement']}>
                <CarouselNavigationButton
                    isHidden={carouselIndex === CAROUSEL_LIMIT}
                    action={listForward}
                >
                    <NextIcon />
                </CarouselNavigationButton>
            </div>

            <motion.div drag="x" className={styles['wallpaper-carousel-wrapper']}
                        dragConstraints={{left: 0, right: 0,}}
                        animate={{translateX: -carouselIndex * TRANSFORM_STEP}}
                        transition={{duration: .5,}}
            >
                {wallpapers.map((wallpaper) =>
                    <WallpaperFrame key={wallpaper.id} wallpaper={wallpaper}/>)
                }
            </motion.div>
        </motion.div>
    );
};