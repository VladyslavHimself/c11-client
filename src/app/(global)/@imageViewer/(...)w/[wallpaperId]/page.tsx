import ModalLayout from "@/components/AuthModals/ModalLayout/ModalLayout";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import {ImagesAPI} from "@/api/Images";
import styles from '@/styles/wallpaperViewer.module.scss';

type Params = {
    wallpaperId: string;
}

type Props = {
    params: Promise<Params>;
}

export default async function InterceptedWallpaperView({ params }: Props) {
    const { wallpaperId } = await params;
    // TODO: Change endpoint, when node.js server will be ready
    const wallpapers = await ImagesAPI.getAllWallpapers();
    const wallpaper = wallpapers.find(({ id }) => id === wallpaperId);
    return (
        <ModalLayout modalName={styles['wallpaper-viewer']}>
            <ImageViewer wallpaper={wallpaper!} />
        </ModalLayout>
    )
}