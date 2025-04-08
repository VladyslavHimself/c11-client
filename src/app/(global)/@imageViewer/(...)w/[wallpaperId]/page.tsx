import ModalLayout from "@/components/AuthModals/ModalLayout/ModalLayout";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import styles from '@/styles/wallpaperViewer.module.scss';
import getImageViewerAction from "@/components/ImageViewer/getImageViewerAction";

type Params = {
    wallpaperId: string;
}

type Props = {
    params: Promise<Params>;
}

export default async function InterceptedWallpaperView({ params }: Props) {
    const { wallpaperId } = await params;
    const { wallpaper, topic, topicRelatedWallpapers } = await getImageViewerAction(wallpaperId);

    console.log(topicRelatedWallpapers);

    return (
        <ModalLayout modalName={styles['wallpaper-viewer']}>
            <ImageViewer wallpaper={wallpaper!} wallpapers={topicRelatedWallpapers} topic={topic} />
        </ModalLayout>
    )
}