import styles from "./ImageViewerInfoTableRow.module.scss";

type Props = {
    title: string,
    value: string
}

export default function ImageViewerInfoTableRow({ title, value }: Props) {
    return (
        <div className={styles['wallpaper-viewer-image-info-table-row']}>
            <div className={styles["wallpaper-viewer-image-info-table-row-title"]}>{title}</div>
            <div className={styles["wallpaper-viewer-image-info-table-row-value"]}>{value}</div>
        </div>
    );
};