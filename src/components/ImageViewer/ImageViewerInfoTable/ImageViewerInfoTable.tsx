import styles from './ImageViewerInfoTable.module.scss';
import ImageViewerInfoTableRow
    from "@/components/ImageViewer/ImageViewerInfoTable/ImageViewerInfoTableRow/ImageViewerInfoTableRow";
import ImageViewerInfoTableTags
    from "@/components/ImageViewer/ImageViewerInfoTable/ImageViewerInfoTableTags/ImageViewerInfoTableTags";

export default function ImageViewerInfoTable() {
    return (
        <div className={styles['wallpaper-viewer-image-info-table']}>
            <ImageViewerInfoTableRow title="Resolution" value="4429x2404" />
            <ImageViewerInfoTableRow title="Date" value="24 Aug 2024" />
            <ImageViewerInfoTableRow title="Topic" value="Anime" />
            <ImageViewerInfoTableTags tags={['Anime', 'Hentai', 'Sword Art Online', 'SAO']} />
        </div>
    );
};