import styles from '@/styles/wallpaperViewerPreviewPage.module.scss'
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import {ImagesAPI} from "@/api/Images";
import Image from 'next/image';

type Params = {
    wallpaperId: string;
}

type Props = {
    params: Promise<Params>;
}

export default async function WallpaperPreviewPage({ params }: Props) {
    const { wallpaperId } = await params;

    // TODO: Change, when topic-related images will be ready
    const wallpapers = await ImagesAPI.getPopularImages();
    const wallpaper = wallpapers.find(({ id }) => id === wallpaperId);
    const currentWallpaper = await ImagesAPI.getImageById(wallpaperId);
    return (
        <div className={styles['wallpaper-viewer-page-container']}>
            <ImageViewer wallpaper={currentWallpaper} wallpapers={wallpapers} />
            <Image className={styles['wallpaper-viewer-page-background-image']} src={wallpaper?.url + 'h=128'} fill alt={''} />
        </div>
    );
};