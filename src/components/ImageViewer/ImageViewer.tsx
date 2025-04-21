import styles from './imageViewer.module.scss';
import Image from 'next/image';
import {WallpaperResponse} from "@/api/Images";
import ImageViewerActionsBar from "@/components/ImageViewer/ImageViewerActionsBar/ImageViewerActionsBar";
import ImageViewerAuthorProfile from "@/components/ImageViewer/ImageViewerAuthorProfile/ImageViewerAuthorProfile";
import ImageViewerInfoTable from "@/components/ImageViewer/ImageViewerInfoTable/ImageViewerInfoTable";
import ImageViewerMenuGallery from "@/components/ImageViewer/ImageViewerMenuGallery/ImageViewerMenuGallery";
import {FoundTopicResponse} from "@/api/Topics";
import ExtendedDownloadButton from "@/components/ImageViewer/ExtendedDownloadButton/ExtendedDownloadButton";
import {UserResponse} from "@/api/Users";


// TODO: Replace "wallpapers" to topic-related wallpapers soon
type Props = {
    wallpaper: WallpaperResponse
    wallpapers: WallpaperResponse[]
    topic: FoundTopicResponse,
    author: UserResponse
}

export default function ImageViewer({ wallpaper, wallpapers, topic, author }: Props) {
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
                    <div>
                        <ImageViewerAuthorProfile author={author} />
                        <ImageViewerActionsBar wallpaperMetadata={wallpaper} />
                        <ExtendedDownloadButton link={wallpaper.url} filename={wallpaper.filename} />
                    </div>
                    <ImageViewerInfoTable wallpaper={wallpaper} topic={topic} tags={[]} />
                </div>
                { validateImageGallery && <ImageViewerMenuGallery suggestedWallpapers={wallpapers} topicName={topic.name} />}
            </div>
        </div>
    );
};


