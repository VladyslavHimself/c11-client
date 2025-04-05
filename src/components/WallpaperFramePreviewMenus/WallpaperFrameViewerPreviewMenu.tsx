import styles from './wallpaperFramePreviewMenus.module.scss';
import {Button} from "@/components/ui/button";
import StarIcon from "../../../public/StarIcon";
import LikeIcon from "../../../public/LikeIcon";
import ResolutionIcon from "../../../public/ResolutionIcon";
import DownloadIcon from "../../../public/DownloadIcon";

// TODO: Optimize with template building pattern ("Prototype" pattern will have been used)
export default function WallpaperFrameViewerPreviewMenu() {
    return (
        <>
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
        </>
    );
};