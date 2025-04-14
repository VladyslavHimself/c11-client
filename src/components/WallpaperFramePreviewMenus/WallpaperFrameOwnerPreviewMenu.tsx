import styles from './wallpaperFramePreviewMenus.module.scss';
import {WallpaperResponse} from "@/api/Images";
import {MiniatureDownloadButton} from "@/components/MiniatureDownloadButton/MiniatureDownloadButton";
import LikeButton from "@/components/LikeButton/LikeButton";
import DeleteImageButton from "@/components/DeleteImageButton/DeleteImageButton";
import {
    ResolutionWallpaperInformation
} from "@/components/ResolutionWallpaperInformation/ResolutionWallpaperInformation";

type Props = {
    wallpaperMetadata: WallpaperResponse;
}

// TODO: Optimize with template building pattern ("Prototype" pattern will have been used)
export function WallpaperFrameOwnerPreviewMenu({ wallpaperMetadata }: Props) {
    const { width, height, url, filename } = wallpaperMetadata;
    return (
        <>
            <div className={styles['wallpaper-frame-strip']}>
                <DeleteImageButton wallpaperMetadata={wallpaperMetadata} />
                <div className={styles['wallpaper-frame-strip-divider']}>
                    <ResolutionWallpaperInformation width={width} height={height} />
                    <div className={styles['wallpaper-information']}>
                        PNG
                    </div>
                </div>
            </div>

            <div className={styles['wallpaper-frame-strip']}>
                <div className={styles['wallpaper-frame-strip-divider']}>
                    <LikeButton wallpaperMetadata={wallpaperMetadata} />

                </div>

                <MiniatureDownloadButton link={url} filename={filename} />
            </div>
        </>
    );
};