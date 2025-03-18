import styles from "./ImageViewerInfoTableTags.module.scss";

type Props = {
    tags: string[]
}

export default function ImageViewerInfoTableTags({ tags }: Props) {
    return (
        <div className={`${styles['wallpaper-viewer-image-info-table-tags']}`}>
            <div className={styles["wallpaper-viewer-image-info-table-tags-title"]}>Tags</div>
            <div className={styles["wallpaper-viewer-image-info-table-tags-values"]}>
                {
                    tags.map(tag => (
                        <div key={tag} className={styles['wallpaper-viewer-image-info-table-tag']}>
                            <span>{tag}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};