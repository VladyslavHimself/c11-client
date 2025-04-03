import styles from '@/styles/profile-page.module.scss';
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";


export default function ProfilePage() {

    return (
        <div className={styles['profile-page']}>

            <div className={styles['profile-page-content-wrapper']}>
                <ProfileHeader />
            </div>
        </div>
    );
};