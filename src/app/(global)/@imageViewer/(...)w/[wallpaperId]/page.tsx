import ModalLayout from "@/components/AuthModals/ModalLayout/ModalLayout";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import styles from '@/styles/wallpaperViewer.module.scss';
import getImageViewerAction from "@/components/ImageViewer/getImageViewerAction";
import {UsersAPI} from "@/api/Users";

type Params = {
    wallpaperId: string;
}

type Props = {
    params: Promise<Params>;
}

export default async function InterceptedWallpaperView({ params }: Props) {
    const { wallpaperId } = await params;
    const { wallpaper, topic, topicRelatedWallpapers } = await getImageViewerAction(wallpaperId);
    const author = await UsersAPI.findUserById(wallpaper.authorId);
    return (
        <ModalLayout modalName={styles['wallpaper-viewer']}>
            <ImageViewer wallpaper={wallpaper!} author={author} wallpapers={topicRelatedWallpapers} topic={topic} />
        </ModalLayout>
    )
}