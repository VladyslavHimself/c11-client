import styles from './ImageViewerInfoTable.module.scss';
import ImageViewerInfoTableRow
    from "@/components/ImageViewer/ImageViewerInfoTable/ImageViewerInfoTableRow/ImageViewerInfoTableRow";
import ImageViewerInfoTableTags
    from "@/components/ImageViewer/ImageViewerInfoTable/ImageViewerInfoTableTags/ImageViewerInfoTableTags";
import dayjs from "dayjs";
import {WallpaperResponse} from "@/api/Images";
import {TopicResponseBody} from "@/api/Topics";

type Props = {
    wallpaper: WallpaperResponse,
    topic: TopicResponseBody,
    tags: string[]
}

export default function ImageViewerInfoTable({ wallpaper, topic, tags = []}: Props) {
    const {width, height, createdAt} = wallpaper;
    const { name } = topic;

    const formattedDate = dayjs(createdAt).format('DD MMM YYYY');

    return (
        <div className={styles['wallpaper-viewer-image-info-table']}>
            <ImageViewerInfoTableRow title="Resolution" value={[width, height].join('x')} />
            <ImageViewerInfoTableRow title="Date" value={formattedDate} />
            <ImageViewerInfoTableRow title="Topic" value={name} />
            <ImageViewerInfoTableTags tags={tags} />
        </div>
    );
};