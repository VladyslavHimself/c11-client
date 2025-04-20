import styles from '@/styles/wallpaperViewerPreviewPage.module.scss'
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import Image from 'next/image';
import getImageViewerAction from "@/components/ImageViewer/getImageViewerAction";
import {UsersAPI} from "@/api/Users";

type Params = {
    wallpaperId: string;
}

type Props = {
    params: Promise<Params>;
}

export default async function WallpaperPreviewPage({ params }: Props) {
    const { wallpaperId } = await params;
    const { wallpaper, topic, topicRelatedWallpapers } = await getImageViewerAction(wallpaperId);
    const author = await UsersAPI.findUserById(wallpaper?.authorId);
    return (
        <div className={styles['wallpaper-viewer-page-container']}>
            <ImageViewer topic={topic} author={author} wallpaper={wallpaper} wallpapers={topicRelatedWallpapers} />
            <Image className={styles['wallpaper-viewer-page-background-image']} src={wallpaper?.url + 'h=128'} fill alt={''} />
        </div>
    );
};