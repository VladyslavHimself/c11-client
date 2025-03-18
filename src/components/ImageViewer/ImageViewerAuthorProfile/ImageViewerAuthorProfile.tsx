import styles from './ImageViewerAuthorProfile.module.scss';
import UserIcon from "../../../../public/UserIcon";

export default function ImageViewerAuthorProfile() {
    return (
        <div className={styles['image-viewer-author-profile']}>
            <UserIcon />
            <div className={styles['image-viewer-author-profile-initials']}>
                <div>Vladyslav Lutchyn</div>
                <div>Author</div>
            </div>
        </div>
    );
};