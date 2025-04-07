import styles from './imageViewer.module.scss';
import Image from 'next/image';
import {WallpaperResponse} from "@/api/Images";
import {Button} from "@/components/ui/button";
import DownloadIcon from "../../../public/DownloadIcon";
import ImageViewerActionsBar from "@/components/ImageViewer/ImageViewerActionsBar/ImageViewerActionsBar";
import ImageViewerAuthorProfile from "@/components/ImageViewer/ImageViewerAuthorProfile/ImageViewerAuthorProfile";
import ImageViewerInfoTable from "@/components/ImageViewer/ImageViewerInfoTable/ImageViewerInfoTable";
import ImageViewerMenuGallery from "@/components/ImageViewer/ImageViewerMenuGallery/ImageViewerMenuGallery";
import {TopicResponseBody} from "@/api/Topics";


// TODO: Replace "wallpapers" to topic-related wallpapers soon
type Props = {
    wallpaper: WallpaperResponse
    wallpapers: WallpaperResponse[]
    topic: TopicResponseBody
}

export default function ImageViewer({ wallpaper, wallpapers, topic }: Props) {
    // TODO: Refactor validation from topic.name to topic.images, when backend will been changed
    const validateImageGallery = wallpapers.length && topic.name;

    return (
        <div className={styles['wallpaper-viewer-container']}>
            <div className={styles['wallpaper-view']}>
                <Image
                    src={wallpaper.url}
                    alt={wallpaper.id}
                    fill
                    objectFit="cover"
                    placeholder='blur'
                    blurDataURL={wallpaper.placeholder}
                />
            </div>
            <div className={styles['wallpaper-viewer-menu']}>
                <div className={styles['wallpaper-viewer-menu-metadata']}>
                    <div style={{ width: '196px'}}>
                        <ImageViewerAuthorProfile />
                        <ImageViewerActionsBar />
                        <Button variant="accent" className="py-6 mt-1.5 w-full"><DownloadIcon style={{ width: 24, height: 24}} fill="black" /> Download</Button>
                    </div>
                    <ImageViewerInfoTable wallpaper={wallpaper} topic={topic} />
                </div>
                { validateImageGallery && <ImageViewerMenuGallery suggestedWallpapers={wallpapers} topicName={topic.name} />}
            </div>
        </div>
    );
};


