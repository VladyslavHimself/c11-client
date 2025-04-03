import styles from '@/styles/profile-page.module.scss';
import UserIcon from "../../../../public/UserIcon";
import SettingsButton from "@/components/SettingsButton/SettingsButton";


export default function ProfilePage() {

    return (
        <div className={styles['profile-page']}>

            <div className={styles['profile-page-content-wrapper']}>
                <div className={styles['profile-header']}>
                    <div className={styles['profile-header-avatar']}>
                        <UserIcon />
                    </div>

                    <div className={styles['profile-header-user-info']}>
                        <div className={styles["profile-header-user-info-initials"]}>Vladyslav Lutchyn</div>
                        <div>13 posts</div>
                    </div>

                    <div className={styles['profile-header-settings-button']}>
                        <SettingsButton />
                    </div>
                </div>
            </div>
        </div>
    );
};