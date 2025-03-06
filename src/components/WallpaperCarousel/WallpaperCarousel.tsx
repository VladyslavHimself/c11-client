'use client'

import styles from './wallpaperCarousel.module.scss';
import { motion } from 'framer-motion';
import {WallpaperResponse} from "@/api/Images";

import { useState } from "react";
import {Button} from "@/components/ui/button";
import WallpaperFrame from "@/components/WallpaperCarousel/WallpaperFrame/WallpaperFrame";

type Props = {
    wallpapers: WallpaperResponse[]
};

const TRANSFORM_STEP = ( 380 + 15 ) * 3;
const CAROUSEL_LIMIT = 2;

export default function WallpaperCarousel({ wallpapers }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <Button>
                <button onClick={() => {
                    if (currentIndex !== CAROUSEL_LIMIT) {
                        setCurrentIndex(prevIndex => prevIndex + 1)
                    }
                }}>step +</button>

                <button onClick={() => {
                    if (currentIndex !== 0) {
                        setCurrentIndex(prevIndex => prevIndex - 1)
                    }
                }}>step -</button>
            </Button>

            <motion.div className={styles['wallpaper-carousel']}>
                <motion.div drag="x" className={styles['wallpaper-carousel-wrapper']}
                            dragConstraints={{
                                left: 0,
                                right: 0,
                            }}
                            animate={{
                                translateX: -currentIndex * TRANSFORM_STEP,
                            }}
                            transition={{
                                duration: .5,
                            }}
                >
                    { wallpapers.map((wallpaper) =>
                        <WallpaperFrame key={wallpaper.id} wallpaper={wallpaper} />)
                    }
                </motion.div>
            </motion.div>
        </>
    );
};