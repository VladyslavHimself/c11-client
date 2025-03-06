'use client';

import Image from "next/image";
import {WallpaperResponse} from "@/api/Images";
import {Button} from "@/components/ui/button";
import StarIcon from "../../../../public/StarIcon";
import LikeIcon from "../../../../public/LikeIcon";
import ResolutionIcon from "../../../../public/ResolutionIcon";
import DownloadIcon from "../../../../public/DownloadIcon";
import styles from './wallpaperFrame.module.scss';

type Props = {
    wallpaper: WallpaperResponse
}

export default function WallpaperFrame({ wallpaper }: Props) {
    return (
        <div className={styles['wallpaper-frame']} onClick={() => console.log('open wallpaper')}>
            <div className={styles['wallpaper-frame-menu']}>
                <div className={styles['wallpaper-frame-strip']}>
                    <Button onClick={e => {
                        e.stopPropagation();
                        console.log('added to favourites')
                    }}>
                        <StarIcon />
                    </Button>

                    <div className={styles['wallpaper-frame-strip-divider']}>
                        <div className={styles['wallpaper-information']} style={{ marginRight: '10px'}}>
                            4429x2404
                        </div>
                        <div className={styles['wallpaper-information']}>
                            PNG
                        </div>
                    </div>
                </div>

                <div className={styles['wallpaper-frame-strip']}>
                    <div className={styles['wallpaper-frame-strip-divider']}>
                        <Button onClick={e => {
                            e.stopPropagation();
                            console.log('wallpaper liked')
                        }}>
                            <LikeIcon /> 2.4k
                        </Button>

                        <div className={styles['wallpaper-information']} style={{marginLeft: '10px'}}>
                            <ResolutionIcon /> 4k
                        </div>
                    </div>

                    <Button onClick={e => {
                        e.stopPropagation();
                        console.log('download wallpaper')
                    }}>
                        <DownloadIcon />
                    </Button>
                </div>
            </div>
            <Image src={wallpaper.url} alt={wallpaper.filename} objectFit="cover" fill />
        </div>
    );
};