import styles from '@/styles/wallpaperViewerPreviewPage.module.scss'
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import {ImagesAPI, POPULAR_IMAGES_COUNT} from "@/api/Images";
import Image from 'next/image';
import getImageViewerAction from "@/components/ImageViewer/getImageViewerAction";

type Params = {
    wallpaperId: string;
}

type Props = {
    params: Promise<Params>;
}

export default async function WallpaperPreviewPage({ params }: Props) {
    const { wallpaperId } = await params;
    const { wallpaper, topic, topicRelatedWallpapers } = await getImageViewerAction(wallpaperId);

    return (
        <div className={styles['wallpaper-viewer-page-container']}>
            <ImageViewer topic={topic} wallpaper={wallpaper} wallpapers={topicRelatedWallpapers} />
            <Image className={styles['wallpaper-viewer-page-background-image']} src={wallpaper?.url + 'h=128'} fill alt={''} />
        </div>
    );
};