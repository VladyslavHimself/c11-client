import styles from './ImageViewerAuthorProfile.module.scss';
import UserIcon from "../../../../public/UserIcon";
import {UserResponse} from "@/api/Users";

type Props = {
    author: UserResponse
}

export default function ImageViewerAuthorProfile({ author }: Props) {
    const { name, surname } = author;

    return (
        <div className={styles['image-viewer-author-profile']}>
            <UserIcon />
            <div className={styles['image-viewer-author-profile-initials']}>
                <div>{[name, surname].join(' ')}</div>
                <div>Author</div>
            </div>
        </div>
    );
};