import styles from './imageViewer.module.scss';
import Image from 'next/image';
import {WallpaperResponse} from "@/api/Images";
import {Button} from "@/components/ui/button";
import DownloadIcon from "../../../public/DownloadIcon";
import ImageViewerActionsBar from "@/components/ImageViewer/ImageViewerActionsBar/ImageViewerActionsBar";
import ImageViewerAuthorProfile from "@/components/ImageViewer/ImageViewerAuthorProfile/ImageViewerAuthorProfile";
import ImageViewerInfoTable from "@/components/ImageViewer/ImageViewerInfoTable/ImageViewerInfoTable";

type Props = {
    wallpaper: WallpaperResponse
}

export default function ImageViewer({ wallpaper }: Props) {
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
                    <ImageViewerInfoTable />
                </div>

                <div className={styles['wallpaper-viewer-menu-gallery']}></div>
            </div>
        </div>
    );
};